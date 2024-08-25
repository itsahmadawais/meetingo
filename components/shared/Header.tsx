"use client";
import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function Header() {
  return (
    <div className='flex items-center justify-between p-5 shadow-md'>
      <Link href='/'>
        <Image src='/logo.svg' width={70} height={70} alt='logo'
          className='w-[150px] md:w-[100px]'
        />
      </Link>
      <ul className='hidden md:flex gap-14 font-medium text-lg'>
        <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Product</li>
        {/* <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Pricing</li> */}
        <li className='hover:text-primary transition-all duration-300 cursor-pointer'>
          <Link href='/contact'>Contact us</Link>
        </li>
        <li className='hover:text-primary transition-all duration-300 cursor-pointer'>
          <Link href={'/about'}>About us</Link>
        </li>
      </ul>
      <div className='flex gap-5'>
        <LoginLink><Button variant={'ghost'}>Login</Button></LoginLink>
        <RegisterLink><Button>Get Started</Button></RegisterLink>
      </div>
    </div>
  )
}
