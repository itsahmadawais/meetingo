'use client'
import { Button } from '@/components/ui/button';
import { app } from '@/config/FirebaseConfig';
import { Meeting } from '@/types';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import { Clock, Copy, MapPin, Pen, Settings, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function MeetingEventList() {
  const [eventList, setEventList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [businessInfo, setBusinessInfo] = useState<any>();

  const db = getFirestore(app);

  const { user } = useKindeBrowserClient();

  const getEventLsit = async () => {
    const q = query(collection(db, 'MeetingEvent'), where('createdBy', '==', user!.email!), orderBy('id', 'desc'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setEventList([doc.data()])
    });

    setIsLoading(false);
  }

  const getBusinessInfo = async () => {
    const docRef = doc(db, 'Business', user!.email!);
    const docSnap = await getDoc(docRef);
    setBusinessInfo(docSnap.data());
  }

  const onClickCopy = (eventId: string) => {
    const meetingURL = `${process.env.NEXT_PUBLIC_BASE_URL}/${businessInfo.businessName}/${eventId}`
    navigator.clipboard.writeText(meetingURL);
    toast('Copied to clipboard!');
  }

  const onDeleteEvent = async (event: any) => {
    try {
      await deleteDoc(doc(db, 'MeetingEvent', event?.id));
      toast('Meeting event deleted!');
      getEventLsit();
    } catch (error) {
      toast('Error while deleting meeting event!');
    }
  }

  useEffect(() => {
    user && getEventLsit();
    user && getBusinessInfo();
  }, [user]);

  return (
    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
      {
        isLoading && <h2>Loading...</h2>
      }
      {
        isLoading === false &&
        <>
          {
            eventList.length > 0 ? eventList.map((event, index) => (
              <div key={index} className='border shadow-md border-t-8 rounded-lg p-5 flex flex-col gap-3' style={{
                borderTopColor: event.themeColor
              }}>
                <div className='flex justify-end'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Settings className='cursor-pointer' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className='flex gap-2 items-center'> <Pen className='w-4 h-4' /> Edit</DropdownMenuItem>
                      <DropdownMenuItem className='flex gap-2 items-center' onClick={() => onDeleteEvent(event)}> <Trash className='w-4 h-4' /> Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                </div>
                <h2 className='font-medium text-xl'>{event.eventName}</h2>
                <div className='flex justify-between'>
                  <h2 className='flex gap-2 text-gray-500'>
                    <Clock /> {event.duration} Min
                  </h2>
                  <h2 className='flex gap-2 text-gray-500'>
                    <MapPin /> {event.locationType}
                  </h2>
                </div>
                <hr />
                <div className='flex justify-between'>
                  <h2 className='flex gap-2 text-sm text-primary items-center cursor-pointer' onClick={() => onClickCopy(event.id)}>
                    <Copy className='h-4 w-4' /> Copy Link
                  </h2>
                  <Button variant={'outline'} className='rounded-full text-primary border-primary'>
                    Share
                  </Button>
                </div>
              </div>
            ))
              :
              <h2>No Meeting event found!</h2>
          }
        </>
      }
    </div>
  )
}
