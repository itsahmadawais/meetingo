import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className='flex flex-col justify-center items-center my-20'>
            <div className='hidden lg:block'>
                <Image src='/profile1.jpg' width={100} height={100} alt=''
                className='h-[100px] object-cover rounded-full absolute right-36'
                />
                 <Image src='/profile2.jpg' width={100} height={100} alt=''
                className='h-[100px] object-cover rounded-full absolute top-48 left-16'
                />
                 <Image src='/profile3.jpg' width={100} height={100} alt=''
                className='h-[100px] object-cover rounded-full absolute bottom-20 left-36'
                />
                 <Image src='/profile4.jpg' width={100} height={100} alt=''
                className='h-[100px] object-cover rounded-full absolute right-16 bottom-32'
                />
            </div>
            <div className='text-center max-w-3xl'>
                <h2 className='font-bold text-[60px] text-slate-700'>Simplify Your Calendar with Meetingo!</h2>
                <h2 className='text-xl mt-5 text-slate-500'>Meetingo automates your scheduling, eliminating endless emails. Find the perfect time effortlessly and enjoy seamless calendar coordination.</h2>
                <div className='flex gap-4 flex-col mt-5'>
                    <h3 className='text-sm'>Sign Up free with Google and Facebook</h3>
                    <div className='flex justify-center gap-8'>
                        <Button className='p-7 flex gap-4'>
                            <Image src='/google.png' width={40} height={40} alt='google' />
                            Sign up with Google
                        </Button>
                        <Button className='p-7 flex gap-4'>
                            <Image src='/facebook.png' width={40} height={40} alt='facebook' />
                            Sign up with Facebook
                        </Button>
                    </div>
                    <hr />
                    <h2>
                        <Link href='#' className='text-primary'>Sign up Free with Email.</Link> No Credit Card Required.
                    </h2>
                </div>
            </div>
        </div>
    )
}
