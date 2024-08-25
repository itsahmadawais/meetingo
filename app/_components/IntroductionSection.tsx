'use client'
import Image from 'next/image'
import React from 'react'

export default function IntroductionSection() {
  return (
    <div className='bg-primary text-white px-10 md:px-20 py-10 md:py-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className='flex flex-col gap-4 w-full md:w-4/5'>
                <h2 className='font-bold text-3xl md:text-5xl'>Schedule Meetings with Confidence!</h2>
                <p className='text-lg md:text-xl'>
                Whether you&apos;re managing a team, consulting clients&cedil; or organizing personal meetings&cedil; our app makes scheduling quick, easy, and hassle-free. Say goodbye to the endless back-and-forth emails.
                </p>
            </div>
            <div className='flex justify-end'>
                <Image src={'/intro.png'} alt='Intro to Meetingo' width={400} height={400}/>
            </div>
        </div>
    </div>
  )
}
