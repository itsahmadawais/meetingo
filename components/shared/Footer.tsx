'use client'
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function Footer() {

    const links = [
        {
            label: 'Create an Account',
            link: '#register'
        },
        {
            label: 'Contact',
            link: '/contact'
        },
        {
            label: 'Terms and Conditions',
            link: '/terms-conditions'
        },
        {
            label: 'Privacy Policy',
            link: 'privacy-policy'
        }
    ];

    return (
        <div className='bg-[#161717] p-10 md:p-20'>
            <div className="max-w-[90%] md:max-w-[50%] flex flex-col items-center gap-2 mx-auto text-center">
                <Image src={'/logo.svg'} alt='Meetingo' width={200} height={200} />
                <p className='font-thin text-slate-100'>
                    We respect your privacy and are committed to protecting your personal information. Your data is secure with us and will never be shared without your consent.</p>
                <ul className='flex gap-2 mt-4 flex-wrap md:flex-no-wrap justify-center '>
                    {
                        links.map((link, index) => (
                            <li key={index} className='font-thin text-slate-200 flex items-center gap-1 cursor-pointer'>
                                {
                                    link.link === "#register" ?
                                        <RegisterLink>
                                            {index !== 0 && <span className='mx-2'>•</span>}
                                            {link.label}
                                        </RegisterLink>
                                        :
                                        <Link href={link.link}>
                                            {index !== 0 && <span className='mx-2'>•</span>}
                                            {link.label}
                                        </Link>
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
