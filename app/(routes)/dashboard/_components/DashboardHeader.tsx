'use client';
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardHeader() {
  const { user } = useKindeBrowserClient();

  return (
    <div className='p-4 px-20 flex justify-end items-center'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='flex items-center cursor-pointer'>
            {user?.picture ? (
              <Image src={user.picture} alt='User Avatar' width={40} height={40} className='rounded-full' />
            ) : (
              <div className='w-10 h-10 bg-gray-200 rounded-full' />
            )}
            <ChevronDown className='ml-2' />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutLink>
              Logout
            </LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
