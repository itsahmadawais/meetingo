'use client'
import Image from 'next/image'
import React from 'react'

export default function IntroductionSection() {
  return (
    <div className='bg-primary text-white px-20 py-10'>
        <div className="grid grid-cols-2 items-center">
            <div className='flex flex-col gap-4 w-4/5'>
                <h2 className='font-bold text-5xl'>Schedule Meetings with Confidence!</h2>
                <p>
                Whether you're managing a team, consulting clients, or organizing personal meetings, our app makes scheduling quick, easy, and hassle-free. Say goodbye to the endless back-and-forth emails.
                </p>
            </div>
            <div className='flex justify-end'>
                <Image src={'/intro.png'} alt='Intro to Meetingo' width={400} height={400}/>
            </div>
        </div>
    </div>
  )
}
