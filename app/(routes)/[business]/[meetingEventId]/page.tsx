'use client';
import React, { useEffect, useState } from 'react'
import MeetingTimeDateSelection from '../_components/MeetingTimeDateSelection'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { db } from '@/config/FirebaseConfig';
import Loader from '@/components/shared/Loader';
import { BusinessInfo, Meeting } from '@/types';
import { toast } from 'sonner';

export interface SharedMeetingEventProps {
  params: {
    business: string;
    meetingEventId: string;
  }
};

export default function SharedMeetingEvent({ params }: SharedMeetingEventProps) {
  const [businessInfo, setBusinessInfo] = useState<any>();
  const [eventInfo, setEventInfo] = useState<Meeting | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const getMeetingBusinessAndEventDetails = async () => {
    setLoading(true);
    const q = query(collection(db, 'Business'), where('businessName', '==', params.business));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Assuming there's only one document with the matching business name
      const businessDoc = querySnapshot.docs[0];
      setBusinessInfo(businessDoc.data() as BusinessInfo);
    } else {
      toast.error('Business not found!');
    }


    const docRef = doc(db, 'MeetingEvent', params.meetingEventId);
    const result = await getDoc(docRef);
    setEventInfo(result.data() as Meeting);
    // console.log(result.data());
    setLoading(false);
  }

  useEffect(() => {
    params && getMeetingBusinessAndEventDetails();
  }, [params]);

  return (
    <div>
      {
        loading ?
          <div className='flex min-h-screen items-center justify-center'>
            <Loader />
          </div>
          :
          <>
            {eventInfo && businessInfo && <MeetingTimeDateSelection eventInfo={eventInfo} businessInfo={businessInfo} />}
          </>
      }
    </div>
  )
}
