'use client';
import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface TimeDateSelectionProps {
    date: any;
    onDateChange: (d: any) => void;
    timeSlots: string[];
    enableTimeSlot: boolean;
    onSelectTime: (time: any) => void;
    selectedTime: any;
    previousBooking: any[];
}

export default function TimeDateSelection({ date, onDateChange, timeSlots, enableTimeSlot, onSelectTime, selectedTime, previousBooking }: TimeDateSelectionProps) {
    const checkTimeSlot = (time: any) => {
        return (previousBooking.filter((item: any) => item.selectedTime === time)).length > 0;
    }
    return (
        <>
            <div className="md:col-span-2 flex px-4">
                <div className="flex flex-col">
                    <h2 className='font-bold'>Select Date & Time</h2>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(d) => onDateChange(d)}
                        className="rounded-md border mt-5"
                        disabled={(date) => date < new Date()}
                    />
                </div>
                <div className='flex flex-col w-full overflow-auto gap-4 p-5 max-h-[400px]'>
                    {
                        timeSlots?.map((time, index) => (
                            <Button key={index} variant={'outline'}
                                onClick={() => onSelectTime(time)}
                                disabled={!enableTimeSlot || checkTimeSlot(time)} className={`border-primary text-primary ${time === selectedTime && 'bg-primary text-white'}`}>
                                {time}
                            </Button>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
