'use client';

import { CalendarArrowDown, Clock, Clock1, Loader2, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { format, formatDate } from 'date-fns';
import TimeDateSelection from './TimeDateSelection';
import { Button } from '@/components/ui/button';
import UserFormInfo from './UserFormInfo';
import { User } from '@/types';
import { doc, query, setDoc, getDocs, collection, where, Timestamp } from 'firebase/firestore';
import { db } from '@/config/FirebaseConfig';
import { toast } from 'sonner';
import Plunk from '@plunk/node';
import { render } from '@react-email/render';
import Email from '@/emails';
import { useRouter } from 'next/navigation';

export interface MeetingTimeDateSelectionProps {
  eventInfo: any;
  businessInfo: any;
}

export default function MeetimgTimeDateSelection({ eventInfo, businessInfo }: MeetingTimeDateSelectionProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [enableTimeSlot, setEnableTimeSlot] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<any>();
  const [step, setStep] = useState<number>(1);
  const [userInfo, setuserInfo] = useState<User | undefined>(undefined);

  const [isScheduling, setIsScheduling] = useState<boolean>(false);

  const [previousBooking, setPreviousBooking] = useState<any[]>([]);

  const [_isValid, setIsValid] = useState<boolean>(false);

  const plunk = new Plunk(process.env.NEXT_PUBLIC_PLUNK_API_KEY!);

  const createTimeSlot = (interval: number) => {
    const startTime = 8 * 60;
    const endTime = 22 * 60;
    const totalSlots = (endTime - startTime) / interval;
    const slots = Array.from({ length: totalSlots }, (_, i) => {
      const totalMinutes = startTime + i * interval;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const formattedHours = hours > 12 ? hours - 12 : hours;
      const period = hours >= 12 ? 'PM' : 'AM';
      return `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
    });
    setTimeSlots(slots);
  };

  const onDateChange = async (d: any) => {
    setDate(d);
    setSelectedTime(undefined);
    const day = format(d, 'EEEE');
    if (businessInfo.daysAvailable?.[day]) {
      setEnableTimeSlot(true);
      await getPrevEventBooking(d);
    } else {
      setEnableTimeSlot(false);
    }
  }

  const onSelectTime = (time: any) => {
    setSelectedTime(time);
  }

  const onGoToNextStep = () => {
    setStep((prevState) => prevState + 1);
  }

  const onGoToBackStep = () => {
    setStep((prevState) => prevState - 1);
  }

  const onChangeUser = (user: User) => {
    setuserInfo(user);
  }

  const onScheduleEvent = async () => {
    if (userInfo?.email && userInfo?.name) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(userInfo.email)) {
        setIsValid(false);
        toast('Enter a valid email address!');
        return;
      }
      setIsValid(true);
      try {
        setIsScheduling(true);
        const docId = Date.now().toString();
        await setDoc(doc(db, 'ScheduledMeetings', docId), {
          businessName: businessInfo.businessName,
          businessEmail: businessInfo.email,
          selectedTime: selectedTime,
          selectedDate: date,
          formattedDate: format(date!, 'PPP'),
          formattedTimestamp: format(date!, 't'),
          duration: eventInfo.duration,
          locationURL: eventInfo.locationURL,
          userName: userInfo.name,
          userEmail: userInfo.email,
          note: userInfo?.note ?? '',
          eventId: eventInfo.id
        });
        toast('Meeting scheduled successfully!');
        sendEmail();
      } catch (error) {
        console.error('Error scheduling meeting:', error);
        toast('Failed to schedule meeting. Please try again.');
      } finally{
        setIsScheduling(false);
      }
    } else {
      toast('User email is required.');
    }
  };

  /**
   * Fetch previous booking details for a given event!
   * @param date_
   */
  const getPrevEventBooking = async (date_: Date) => {
    try {
      if (!(date_ instanceof Date) || isNaN(date_.getTime())) {
        console.error('Invalid date provided');
        return;
      }

      // Set to start of day and end of day
      const startOfDay = new Date(date_);
      startOfDay.setHours(0, 0, 0, 0); // Start of the day

      const endOfDay = new Date(date_);
      endOfDay.setHours(23, 59, 59, 999); // End of the day

      // Convert to Firestore Timestamp
      const startOfDayTimestamp = Timestamp.fromDate(startOfDay);
      const endOfDayTimestamp = Timestamp.fromDate(endOfDay);

      // Query Firestore
      const q = query(
        collection(db, 'ScheduledMeetings'),
        // where('selectedDate', '>=', startOfDayTimestamp),
        // where('selectedDate', '<=', endOfDayTimestamp),
        where('formattedDate', '==', format(date_!, 'PPP')),
        where('eventId', '==', eventInfo.id)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setPreviousBooking([]);
        console.log('No previous bookings found.');
        return;
      }

      // Log for debugging
      console.log('Booked Slots:', querySnapshot.docs.map(doc => doc.data()));

      const bookings = querySnapshot.docs.map(doc => doc.data());
      setPreviousBooking(prev => [...prev, ...bookings]);

    } catch (error) {
      console.error('Error fetching previous event bookings:', error);
    }
  };

  const router = useRouter();

  const sendEmail = async () => {
    if(userInfo?.email && userInfo.name && date){
      const emailHtml = await render(<Email
        businessName={businessInfo.businessName}
        date={format(date!, 'PPP').toString()}
        durtaion={eventInfo.duration}
        meetingTime={selectedTime}
        meetingURL={eventInfo.locationURL}
        userFirstName={userInfo?.name}
        />);

        plunk.emails.send({
          to: userInfo?.email,
          subject: "Meeting Scheduled!",
          body: emailHtml,
        }).then((res) => {
          console.log(res);
          router.replace('/confirmation');
        });
    }
  }

  useEffect(() => {
    if (eventInfo?.duration) {
      createTimeSlot(eventInfo.duration);
    }
  }, [eventInfo?.duration]); // Proper dependency array

  return (
    <div className={`p-5 py-10 shadow-lg m-5 border-t-8
        mx-10 md:mx-26 lg:mx-56 lg:my-26`} style={{
        borderTopColor: eventInfo.themeColor
      }}>
      <Image src={'/logo.svg'} alt='logo' width={100} height={100} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        {/* Meeting Info */}
        <div className='p-4 border-r'>
          <h2>{businessInfo?.businessName}</h2>
          <h2 className='font-bold text-xl'>{eventInfo?.eventName ? eventInfo.eventName : 'Meeting Name'}</h2>
          <div className='mt-5 flex flex-col gap-4'>
            <h2 className='flex gap-2'>
              <Clock /> {eventInfo?.duration ? eventInfo.duration : ''} Min
            </h2>
            <h2 className='flex gap-2'>
              <MapPin /> {eventInfo?.locationType} Meeting
            </h2>
            {date &&
              <h2 className='flex gap-2'>
                <CalendarArrowDown /> {formatDate(date!, 'PPP')}
              </h2>}
            {selectedTime &&
              <h2 className='flex gap-2'>
                <Clock1 /> {selectedTime}
              </h2>}
            <Link href={eventInfo?.locationURL ?? ''} className='text-primary'>
              <h2 className='flex gap-2'>
                {eventInfo?.locationURL}
              </h2>
            </Link>
          </div>
        </div>
        {/* Time & Date Selection */}
        {
          step === 1 &&
          <TimeDateSelection date={date} onDateChange={onDateChange} timeSlots={timeSlots} enableTimeSlot={enableTimeSlot} onSelectTime={onSelectTime} selectedTime={selectedTime} previousBooking={previousBooking} />
        }
        {
          step === 2 &&
          <UserFormInfo onChangeUser={onChangeUser} />
        }
      </div>
      <div className="mt-10 mb-16 flex gap-3 justify-end">
        {
          step === 2 &&
          <Button variant={'outline'} onClick={onGoToBackStep}>Back</Button>
        }
        {
          step === 1 &&
          <Button onClick={onGoToNextStep} disabled={!selectedTime || !date}>
            Next
          </Button>
        }
        {
          step === 2 &&
          <Button
            onClick={onScheduleEvent}
            disabled={!(userInfo?.email && userInfo?.name)}
          >
            {isScheduling && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Schedule
          </Button>
        }
      </div>
    </div>
  );
}