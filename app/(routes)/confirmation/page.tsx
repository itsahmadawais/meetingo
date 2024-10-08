import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Confirmation() {
  return (
    <div className='flex flex-col items-center justify-center p-20 gap-4 min-h-screen'>
        <CheckCircle className='h-9 w-9 text-green-500'/>
        <h2 className="font-bold text-3xl">Your meeting has been scheduled!</h2>
        <h2 className="text-lg text-gray-500">Confirmation email sent!</h2>
        <p className=''>Thank you!</p>
        <Link href={'/'}>
          <Button>
            Go to Home
          </Button>
        </Link>
    </div>
  )
}
