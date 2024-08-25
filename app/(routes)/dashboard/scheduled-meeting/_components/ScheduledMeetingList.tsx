'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { formatDate } from "date-fns";
import { CalendarArrowDown, Clock, Clock1, Link2 } from "lucide-react";
import Link from "next/link";


export interface ScheduledMeetingListProps {
    meetingList: any[] | undefined;
}
export default function ScheduledMeetingList({ meetingList }: ScheduledMeetingListProps) {
    return (
        <div>
            {
                meetingList && meetingList?.map((meeting, index) => (
                    <Accordion key={index} type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center">
                                    <Clock1 className='h-6 w-6' /> {meeting.formattedDate}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='mt-5 flex flex-col gap-4'>
                                    <h2 className='flex gap-2'>
                                        <Clock className='h-6 w-6' />
                                        <span>Duration: </span>
                                        {meeting?.duration ? meeting.duration : ''} Min
                                    </h2>
                                    <h2 className='flex gap-2'>
                                        <CalendarArrowDown className='h-6 w-6' /> {meeting?.formattedDate}
                                    </h2>
                                    <h2 className='flex gap-2'>
                                        <Clock1 className='h-6 w-6' /> {meeting.selectedTime}
                                    </h2>
                                    <Link href={meeting?.locationURL ?? ''} className='text-primary'>
                                        <h2 className='flex gap-2'>
                                            <Link2 />
                                            {meeting?.locationURL}
                                        </h2>
                                    </Link>
                                </div>
                                <div className="flex justify-end">
                                    <Link href={meeting.locationURL}>
                                        <Button className="mt-6">Join Now</Button>
                                    </Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))
            }
        </div>
    )
}
