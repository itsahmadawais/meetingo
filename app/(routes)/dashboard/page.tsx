'use client';
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React, { useEffect, useState } from 'react'
import { doc, getFirestore, getDoc } from 'firebase/firestore';
import { app } from '@/config/FirebaseConfig';
import { useRouter } from 'next/navigation';
import MeetingType from './meeting-type/page';

export default function Dashboard() {
  // Get User From Kind
  const { user } = useKindeBrowserClient();

  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  const db = getFirestore(app);

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
      setLoading(false);
      router.replace('/create-business');
    }
  };

  if (loading) {
    return <h2>Loading</h2>
  }

  return (
    <div>
      <MeetingType />
    </div>
  )
}
