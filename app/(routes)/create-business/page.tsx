'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { app } from '@/config/FirebaseConfig';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function CreateBusiness() {
  // Get User From Kinde
  const { user } = useKindeBrowserClient();

  const [businessName, setBusinessName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  const onChangeBusinessName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessName(event.target.value);
  };

  const db = getFirestore(app);

  const onCreateBusiness = async () => {
    if (!user || !businessName) return;

    try {
      await setDoc(doc(db, 'Business', user.email!), {
        businessName: businessName,
        email: user.email!,
        userName: `${user?.given_name} ${user?.family_name}`,
      });
      toast(`${businessName} created!`);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error creating business:', error);
      toast(`Error while creting business ${businessName}!`);
    }
  };

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className='p-14 flex items-center flex-col gap-20 my-10'>
      <Image src='/logo.svg' width={200} height={200} alt='logo' />
      <div className='flex flex-col items-center gap-4 max-w-3xl'>
        <h2 className='text-4xl font-bold'>What&apos;s your business name?</h2>
        <p className='text-slate-500'>You can always change this later from settings.</p>
        <div className='w-full'>
          <label className='text-slate-400'>Team Name</label>
          <Input className='mt-2' placeholder='Ex. DevTech' onChange={onChangeBusinessName} />
        </div>
        <Button className='w-full' disabled={!businessName} onClick={onCreateBusiness}>
          Create Business
        </Button>
      </div>
    </div>
  );
}
