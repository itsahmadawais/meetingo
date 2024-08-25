'use client'
import DaysList from '@/app/_utils/DaysList'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function Availability() {
    const [daysAvailable, setDaysAvailable] = useState<any>({
        Sunday: false,
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false
    });
    const[startTime, setStartTime] = useState<any>();
    const[endTime, setEndTime] = useState<any>();

    const db = getFirestore(app);

    const { user } = useKindeBrowserClient();

    const onCheckboxChange = (day: string, value: any) => {
        setDaysAvailable((prevState: any) => ({
            ...prevState,
            [day]: value
        }));
    }


    const getBusinessInfo = async () => {
        const docRef = doc(db, 'Business', user!.email!);
        const docSnap = await getDoc(docRef);
        const result = docSnap.data();
        if(result?.daysAvailable) setDaysAvailable(result!.daysAvailable);
        if(result?.startTime) setStartTime(result!.startTime);
        if(result?.endTime) setEndTime(result!.endTime);
    }

    const onSave = async () => {
        if(!user) return;
        const docRef = doc(db, 'Business', user!.email!);
        await updateDoc(docRef, {
            daysAvailable: daysAvailable,
            startTime: startTime,
            endTime: endTime
        }).then((res) => {
            toast('Change updated!');
        })
    }

    useEffect(() => {
        user && getBusinessInfo();
    }, [user]);

    return (
        <div className='p-5'>
            <h2 className='font-bold text-2xl'>Availability</h2>
            <hr className='my-7' />
            <div>
                <h2 className='font-bold'>Availability Days</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 my-3'>
                    {
                        DaysList.map((item, index) => (
                            <div key={index}>
                                <h2 className='flex gap-2 items-center'><Checkbox checked={daysAvailable[item.day] ? daysAvailable[item.day] : false} onCheckedChange={(e) => onCheckboxChange(item.day, e) } /> {item.day}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
            <h2 className='font-bold'>Availability Time</h2>
            <div className="flex gap-10">
                <div className='mt-3'>
                    <h2>Start Time</h2>
                    <Input type="time" defaultValue={startTime} onChange={(e) => setStartTime(e.target.value)} />
                </div>
                <div className='mt-3'>
                    <h2>End Time</h2>
                    <Input type="time" defaultValue={endTime} onChange={(e) => setEndTime(e.target.value)} />
                </div>
            </div>
            <Button className='mt-6' onClick={onSave}>Save</Button>
        </div>
    )
}
