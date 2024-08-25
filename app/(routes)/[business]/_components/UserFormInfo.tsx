import { Input } from '@/components/ui/input'
import { User } from '@/types';
import React, { useEffect, useState } from 'react'

export interface UserFormInfoProps{
  onChangeUser: (user: User) => void;
}

export default function UserFormInfo({onChangeUser}: UserFormInfoProps) {

  const [formValue, setFormValue] = useState<User>({
    name: '',
    email: '',
    note: ''
  });

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  useEffect(() => {
    formValue && onChangeUser(formValue);
  }, [formValue]);


  return (
    <div className='p-4 px-8 flex flex-col gap-3'>
      <h2 className='font-bold text-xl'>UserFormInfo</h2>
      <div>
        <h2>Name *</h2>
        <Input placeholder='John Doe' name='name' onChange={onChangeValue} />
      </div>
      <div>
        <h2>Email *</h2>
        <Input placeholder='john.doe@gmail.com' name='email' onChange={onChangeValue} />
      </div>
      <div>
        <h2>Share any Note</h2>
        <Input placeholder='' name='note' onChange={onChangeValue} />
      </div>
      <div>
        <h2 className='text-xs text-gray-400'>By processing, you confirm that you read and agree to terms and conditions.</h2>
      </div>
    </div>
  )
}
