'use client';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React, { useEffect, useState } from 'react'
import { doc, getFirestore, getDoc } from 'firebase/firestore';
import { db } from '@/config/FirebaseConfig';
import { useRouter } from 'next/navigation';
import MeetingType from './meeting-type/page';
import Loader from '@/components/shared/Loader';

export default function Dashboard() {
  // Get User From Kind
  const { user } = useKindeBrowserClient();

  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    user && isBusinessRegistered();
  }, [user]);

  const isBusinessRegistered = async () => {
    const docRef = doc(db, "Business", user!.email!);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      setLoading(false);
    } else {
      console.log('No such document found!');
      router.replace('/create-business');
    }
  };


  return (
    <div>
      {
        loading ?
          <Loader />
          :
          <MeetingType />
      }
    </div>
  )
}
