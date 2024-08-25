'use client';
import React, { useState } from 'react'
import MeetingForm from './_components/MeetingForm'
import { Meeting } from '@/types';
import PreviewMeeting from './_components/PreviewMeeting';

export default function CreateMeeting() {
  const [formValue, setFormValue] = useState<Meeting | undefined>(undefined);

  const onChangeFormValue = (values: Meeting) => {
    setFormValue(values);
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      {/* Meeting Form */}
      <div className='shadow-md border h-screen'>
        <MeetingForm onChangeValues={onChangeFormValue} />
      </div>
      {/* Preview */}
      <div className='md:col-span-2'>
        {formValue && <PreviewMeeting meeting={formValue} />}
      </div>
    </div>
  )
}
