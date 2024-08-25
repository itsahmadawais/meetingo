'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LocationOption from '@/app/_utils/LocationOption';
import Image from 'next/image';
import Link from 'next/link';
import ThemeOption from '@/app/_utils/ThemeOption';
import { Meeting } from '@/types';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { app } from '@/config/FirebaseConfig';
import { eventNames } from 'process';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export interface MeetingFormProps {
    onChangeValues: (values: Meeting) => void;
}

// Define an interface for form values
interface FormValue {
    eventName: string;
    duration: number;
    locationType: string;
    locationURL: string;
    themeColor: string;
}

export default function MeetingForm({ onChangeValues }: MeetingFormProps) {
    const [formValue, setFormValue] = useState<FormValue>({
        eventName: '',
        duration: 30,
        locationType: '',
        locationURL: '',
        themeColor: ''
    });

    const isFormValid =
        formValue.eventName.trim() !== '' &&
        formValue.duration > 0 &&
        formValue.locationType.trim() !== '' &&
        formValue.locationURL.trim() !== '';

    const handleInputChange = (field: keyof FormValue, value: string | number) => {
        setFormValue((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const meetingDurationOptions = [
        { label: '15 Min', value: 15 },
        { label: '30 Min', value: 30 },
        { label: '45 Min', value: 45 },
        { label: '60 Min', value: 60 }
    ];

    const db = getFirestore(app);
    const { user} = useKindeBrowserClient();

    const router = useRouter();

    const onCreate = async () => {
        try{
            const id = Date.now().toString();
            await setDoc(doc(db, 'MeetingEvent', id), {
                id: id,
                eventName: formValue.eventName,
                duration: formValue.duration,
                locationType: formValue.locationType,
                locationURL: formValue.locationURL,
                themeColor: formValue.themeColor,
                businessId: `Business/${user?.email}`,
                createdBy: user?.email,

            });
            toast('New Meeting Event Created!');
            router.replace('/dashboard/meeting-type');
        } catch(error){
            toast('Error while creating meeting event!');
        }
    }

    useEffect(() => {
        onChangeValues(formValue);
    }, [formValue, onChangeValues]);

    return (
        <div className='p-9'>
            <Link href={'/dashboard'}>
                <h2 className='flex gap-2'>
                    <ChevronLeft /> Cancel
                </h2>
            </Link>

            <div className="mt-4">
                <h2 className='font-bold text-2xl my-4'>Create New Event</h2>
                <hr />
                <div className='flex flex-col gap-3 my-4'>
                    <h2>Event Name*</h2>
                    <Input
                        placeholder='Name of your meeting event'
                        value={formValue.eventName}
                        onChange={(e) => handleInputChange('eventName', e.target.value)}
                    />

                    <h2 className='font-bold'>Duration *</h2>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='outline' className='max-w-40'>
                                {formValue.duration} Min
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {meetingDurationOptions.map((option) => (
                                <DropdownMenuItem
                                    key={option.value}
                                    onClick={() => handleInputChange('duration', option.value)}
                                >
                                    {option.label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <h2 className='font-bold'>Location *</h2>
                    <div className='grid grid-cols-4 gap-3'>
                        {LocationOption.map((option, index) => (
                            <div
                                key={index}
                                className={`border flex flex-col justify-center items-center p-3 rounded-lg cursor-pointer ${formValue.locationType === option.name ? 'bg-blue-100 border-primary' : 'hover:bg-blue-50'
                                    }`}
                                onClick={() => handleInputChange('locationType', option.name)}
                            >
                                <Image src={option.icon} width={30} height={30} alt={option.name} />
                                <h2>{option.name}</h2>
                            </div>
                        ))}
                    </div>
                    {formValue.locationType && (
                        <>
                            <h2 className='font-bold'>Add {formValue.locationType} URL *</h2>
                            <Input
                                placeholder='Add URL'
                                value={formValue.locationURL}
                                onChange={(e) => handleInputChange('locationURL', e.target.value)}
                            />
                        </>
                    )}

                    <h2 className='font-bold'>Select Theme Color</h2>
                    <div className='flex justify-evenly'>
                        {ThemeOption.map((color, index) => (
                            <div
                                key={index}
                                className={`h-12 w-12 rounded-full cursor-pointer ${formValue.themeColor === color ? 'border-2 border-[#353b48]' : ''
                                    }`}
                                style={{ backgroundColor: color }}
                                onClick={() => handleInputChange('themeColor', color)}
                            />
                        ))}
                    </div>
                </div>

                <Button className='w-full mt-6' disabled={!isFormValid} onClick={onCreate}>
                    Create
                </Button>
            </div>
        </div>
    );
}
