'use client';
import { Meeting } from '@/types';
import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from '@/components/ui/button';

export interface PreviewMeetingProps {
    meeting: Meeting;
}

export default function PreviewMeeting({ meeting }: PreviewMeetingProps) {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [timeSlots, setTimeSlots] = useState<string[]>([]);

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

    useEffect(() => {
        if (meeting?.duration) {
            createTimeSlot(meeting.duration);
        }
    }, [meeting?.duration]); // Proper dependency array

    return (
        <div className={`p-5 py-10 shadow-lg m-5 border-t-8`} style={{
            borderTopColor: meeting.themeColor
        }}>
            <Image src={'/logo.svg'} alt='logo' width={100} height={100} />
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                {/* Meeting Info */}
                <div className='p-4 border-r'>
                    <h2>Business Name</h2>
                    <h2>{meeting?.eventName ? meeting.eventName : 'Meeting Name'}</h2>
                    <div className='mt-5 flex flex-col gap-4'>
                        <h2 className='flex gap-2'>
                            <Clock /> {meeting?.duration ? meeting.duration : ''} Min
                        </h2>
                        <h2 className='flex gap-2'>
                            <MapPin /> {meeting?.locationType} Meeting
                        </h2>
                        <Link href={meeting?.locationURL ?? ''} className='text-primary'>
                            <h2 className='flex gap-2'>
                                {meeting?.locationURL}
                            </h2>
                        </Link>
                    </div>
                </div>
                {/* Time & Date Selection */}
                <div className="md:col-span-2 flex px-4">
                    <div className="flex flex-col">
                        <h2 className='font-bold'>Select Date & Time</h2>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border mt-5"
                            disabled={(date) => date < new Date()}
                        />
                    </div>
                    <div className='flex flex-col w-full overflow-auto gap-4 p-5 max-h-[400px]'>
                        {
                            timeSlots?.map((time, index) => (
                                <Button key={index} variant={'outline'} className='border-primary text-primary'>
                                    {time}
                                </Button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
