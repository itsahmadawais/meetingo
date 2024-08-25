'use client'

import React, { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ScheduledMeetingList from './_components/ScheduledMeetingList'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { format } from 'date-fns'

export default function ScheduledMeeting() {
  const [meetingList, setMeetingList] = useState<any[]>([]);

  const db = getFirestore(app);

  const { user } = useKindeBrowserClient();

  const getScheduledMeetings = async () => {
    try {
      const q = query(
        collection(db, 'ScheduledMeetings'),
        where('businessEmail', '==', user?.email || '')
      );

      const querySnapshot = await getDocs(q);

      // Collect the meeting data in an array
      const meetings = querySnapshot.docs.map(doc => doc.data());

      // Update the state once with the collected data
      setMeetingList(prevItems => [...prevItems, ...meetings]);
    } catch (error) {
      console.error('Error fetching scheduled meetings:', error);
    }
  };

  const filterMeetingList = (type: 'upcoming' | 'expired') => {
    if (type === 'upcoming') {
      return meetingList.filter((item) => (item.formattedTimestamp >= format(new Date(), 't')));
    } else if (type === 'expired') {
      return meetingList.filter((item) => (item.formattedTimestamp < format(new Date(), 't')));
    }
  }

  useEffect(() => {
    user && getScheduledMeetings();
  }, [user]);
  return (
    <div className='p-10'>
      <h2 className='font-bold text-2xl'>Scheduled Meetings</h2>
      <hr className='my-5' />
      <Tabs defaultValue="upcoming" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <ScheduledMeetingList meetingList={filterMeetingList('upcoming')} />
        </TabsContent>
        <TabsContent value="expired">
          <ScheduledMeetingList meetingList={filterMeetingList('expired')} />
        </TabsContent>
      </Tabs>

    </div>
  )
}
