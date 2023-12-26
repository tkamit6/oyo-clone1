import Image from 'next/image'
import React from 'react'
import Block from './Block'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Header1() {
    // const router = useRouter();
    return (
        <div className='flex sticky top-0 bg-white h-16 px-10 items-center justify-between border-b-2 border-gray-300'>
            <Link href='/' >
                <Image src='/logo.webp' alt='logo' width={100} height={100} className='w-24 h-20 object-contain' />
            </Link>
            <div className='h-full flex'>
                <Block title={'Become a member'} para={'Additional 10% of on stays'} />
                <Block title={'Oyo for business'} para={'Trusted by 30000 corporates'} />
                <Block title={'List your properties'} para={'Start earning in 30 min'} />
                <Block title={'97979797979'} para={'Call us to book now'} />
                <div className='flex items-center px-4'>
                    <h3 className='font-bold'><Link href='/login'> Login / Sign up </Link></h3>
                </div>
            </div>
        </div>
    )
}
