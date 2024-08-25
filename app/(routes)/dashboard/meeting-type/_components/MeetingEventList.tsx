'use client';
import { db } from '@/config/FirebaseConfig';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where
} from 'firebase/firestore';
import { Clock, Copy, MapPin, Settings, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Loader from '@/components/shared/Loader';
import { BusinessInfo, Meeting } from '@/types';

export interface MeetingEventListProps {
  searchQuery: string;
}

export default function MeetingEventList({ searchQuery }: MeetingEventListProps) {
  const [eventList, setEventList] = useState<Meeting[]>([]);
  const [filteredEventList, setFilteredEventList] = useState<Meeting[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);

  const { user } = useKindeBrowserClient();

  const getEventList = async () => {
    if (!user?.email) return;

    try {
      const q = query(
        collection(db, 'MeetingEvent'),
        where('createdBy', '==', user.email),
        orderBy('id', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const events: Meeting[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Meeting
      }));
      setEventList(events);
      setFilteredEventList(events); // Initialize filtered list
    } catch (error) {
      toast.error('Error fetching events!');
    } finally {
      setIsLoading(false);
    }
  };

  const getBusinessInfo = async () => {
    if (!user?.email) return;

    try {
      const docRef = doc(db, 'Business', user.email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBusinessInfo(docSnap.data() as BusinessInfo);
      } else {
        toast.error('Business information not found!');
      }
    } catch (error) {
      toast.error('Error fetching business info!');
    }
  };

  const onClickCopy = (eventId: string) => {
    if (businessInfo) {
      const meetingURL = `${process.env.NEXT_PUBLIC_BASE_URL}/${businessInfo.businessName}/${eventId}`;
      navigator.clipboard.writeText(meetingURL);
      toast.success('Copied to clipboard!');
    }
  };

  const onDeleteEvent = async (eventId: string) => {
    try {
      await deleteDoc(doc(db, 'MeetingEvent', eventId));
      toast.success('Meeting event deleted!');
      getEventList(); // Refresh the event list
    } catch (error) {
      toast.error('Error while deleting meeting event!');
    }
  };

  const handleSearchChange = (query: string) => {
    const text = query.toLowerCase();
    setFilteredEventList(
      eventList.filter(event =>
        event.eventName!.toLowerCase().includes(text) ||
        event.locationType!.toLowerCase().includes(text)
      )
    );
  };

  useEffect(() => {
    if (user) {
      getEventList();
      getBusinessInfo();
    }
  }, [user]);

  useEffect(() => {
    handleSearchChange(searchQuery);
  }, [searchQuery, eventList]); // Ensure to re-filter when searchQuery or eventList changes

  return (
    <div className='mt-10'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {filteredEventList.length > 0 ? (
            filteredEventList.map((event) => (
              <div
                key={event.id}
                className='border shadow-md border-t-8 rounded-lg p-5 flex flex-col gap-3'
                style={{ borderTopColor: event.themeColor }}
              >
                <div className='flex justify-end'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Settings className='cursor-pointer' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        className='flex gap-2 items-center'
                        onClick={() => onDeleteEvent(event.id!)}
                      >
                        <Trash className='w-4 h-4' /> Delete
                      </DropdownMenuItem>
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
                  <h2
                    className='flex gap-2 text-sm text-primary items-center cursor-pointer'
                    onClick={() => onClickCopy(event.id!)}
                  >
                    <Copy className='h-4 w-4' /> Copy Link
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <h2>No Meeting events found!</h2>
          )}
        </div>
      )}
    </div>
  );
}
