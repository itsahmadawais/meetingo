'use client'
import { Button } from '@/components/ui/button'
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className='flex flex-col justify-center items-center my-10 md:my-20 md:h-[80vh]'>
            <div className='hidden lg:block'>
                <Image src='/profile1.jpg' width={100} height={100} alt=''
                    className='h-[100px] object-cover rounded-full absolute top-48 right-16 border-4 border-primary border-t-indigo-500 border-b-indigo-500 animate-pulse duration-1000'
                />
                <Image src='/profile2.jpg' width={100} height={100} alt=''
                    className='h-[100px] object-cover rounded-full absolute top-48 left-16 border-4 border-[#FF0C81] border-t-[#FF0C81] animate-pulse duration-1000'
                />
                <Image src='/profile3.jpg' width={100} height={100} alt=''
                    className='h-[100px] object-cover rounded-full absolute bottom-20 left-36 border-4 border-[#22A6B3] border-t-[#1A828C] border-b-[#1A828C] animate-pulse duration-1000'
                />
                <Image src='/profile4.jpg' width={100} height={100} alt=''
                    className='h-[100px] object-cover rounded-full absolute right-16 bottom-20 right-36 border-4 border-primary animate-pulse duration-1000'
                />
            </div>
            <div className='text-center max-w-sm md:max-w-3xl p-4'>
                <h2 className='font-bold text-[2rem] md:text-[60px] text-slate-700'>Simplify Your Calendar with Meetingo!</h2>
                <h2 className='text-lg md:text-xl mt-5 text-slate-500'>Meetingo automates your scheduling, eliminating endless emails. Find the perfect time effortlessly and enjoy seamless calendar coordination.</h2>
                <div className='flex gap-4 flex-col mt-5'>
                    <h3 className='text-sm'>Sign Up free with Google and Facebook</h3>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8'>
                        <RegisterLink className='w-full md:w-fit'>
                            <Button className='p-7 flex gap-4 w-full'>
                                <Image src='/google.png' width={40} height={40} alt='google' />
                                Sign up with Google
                            </Button>
                        </RegisterLink>
                        <RegisterLink className='w-full md:w-fit'>
                            <Button className='p-7 flex gap-4 w-full'>
                                <Image src='/facebook.png' width={40} height={40} alt='facebook' />
                                Sign up with Facebook
                            </Button>
                        </RegisterLink>
                    </div>
                    <hr />
                    <h2>
                        <RegisterLink className='text-primary'>Sign up Free with Email.</RegisterLink> No Credit Card Required.
                    </h2>
                </div>
            </div>
        </div>
    )
}
