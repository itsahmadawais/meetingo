'use client';
import React, { useEffect, useState } from 'react'
import MeetingTimeDateSelection from '../_components/MeetingTimeDateSelection'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { app } from '@/config/FirebaseConfig';

export interface SharedMeetingEventProps {
  params: {
    business: string;
    meetingEventId: string;
  }
};

export default function SharedMeetingEvent({ params }: SharedMeetingEventProps) {
  const [businessInfo, setBusinessInfo] = useState<any>();
  const [eventInfo, setEventInfo] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const db = getFirestore(app);

  const getMeetingBusinessAndEventDetails = async () => {
    setLoading(true);
    const q = query(collection(db, 'Business'), where('businessName', '==', params.business));
    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => setBusinessInfo(doc.data()));

    const docRef = doc(db, 'MeetingEvent', params.meetingEventId);
    const result = await getDoc(docRef);
    setEventInfo(result.data());
    setLoading(false);
  }

  useEffect(() => {
    params && getMeetingBusinessAndEventDetails();
  }, [params]);

  return (
    <div>
      {eventInfo && businessInfo && <MeetingTimeDateSelection eventInfo={eventInfo} businessInfo={businessInfo} />}
    </div>
  )
}
