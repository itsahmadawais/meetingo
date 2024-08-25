import SideNavBar from '@/app/_components/SideNavBar'
import React from 'react'
import DashboardHeader from './_components/DashboardHeader'
import { Toaster } from '@/components/ui/sonner'

export default function DashboardLayout({ children }: any) {
    return (
        <div>
            <div className='hidden md:block w-64 bg-slate-50 h-screen fixed'>
                <SideNavBar />
            </div>
            <div className='md:ml-64'>
                <DashboardHeader />
                <Toaster />
                {children && children}
            </div>
        </div>
    )
}
