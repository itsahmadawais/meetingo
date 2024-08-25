import Image from 'next/image'
import React from 'react'

export default function WhyChoose() {

  const features = [
    {
      icon: '/calendar.png',
      title: 'Effortless Scheduling',
      description: 'Set availability and let others pick a time.'
    },
    {
      icon: '/link.png',
      title: 'Meeting Links',
      description: 'Create and share meeting links.'
    },
    {
      icon: '/bell.png',
      title: 'Never Miss a Meeting',
      description: 'Automatic reminders keep you on track.'
    }
  ];

  return (
    <div className='flex flex-col items-center justify-center px-20 py-40'>
      <h2 className='font-bold text-5xl text-slate-700'>Why Choose Meetingo?</h2>
      <div className="flex justify-between gap-4 mt-14">
        {
          features.map((feature, index) => (
            <div key={index} className='bg-[#FCFCFC] p-20 flex flex-col gap-2 items-center rounded-lg'>
              <Image src={feature.icon} alt={feature.title} width={60} height={60}/>
              <h2 className='font-bold text-xl text-slate-700'>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
