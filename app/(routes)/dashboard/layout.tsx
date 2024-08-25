'use client';

import React, { useEffect } from 'react';
import DashboardHeader from './_components/DashboardHeader';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation'; // Updated import
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import SideNavBar from '@/app/_components/SideNavBar';

export default function DashboardLayout({ children }: any) {
    const pathname = usePathname(); // Get the current path
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);

    // Close the sheet when the URL changes
    useEffect(() => {
        setIsSheetOpen(false); // Close the sheet when the path changes
    }, [pathname]); // Listen for changes to the pathname

    return (
        <div className='relative'>
            {/* Sidebar for larger screens */}
            <div className='hidden md:block w-64 bg-slate-50 h-screen fixed'>
                <SideNavBar />
            </div>
            {/* Sidebar for smaller screens */}
            <div className="md:hidden p-10 px-6 absolute top-0 -mt-4">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="sm">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetTitle></SheetTitle>
                        <SideNavBar />
                    </SheetContent>
                </Sheet>
            </div>
            {/* Main content area */}
            <div className='md:ml-64 w-full'>
                <DashboardHeader />
                <Toaster />
                {children}
            </div>
        </div>
    );
}
