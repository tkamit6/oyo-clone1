import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hotel() {
    return (
        <div className='border-2 border-red-500 rounded-lg  w-full py-10 flex'>
            <div className='flex gap-4'>
                <Image src={'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img' width={1000} height={1000} className='object-cover w-72 h-72' />

                <div className='grid grid-rows-3 my-4'>
                    <Image src={'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img' width={1000} height={1000} className='object-contain w-24' />
                    <Image src={'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img' width={1000} height={1000} className='object-contain w-24' />
                    <Image src={'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img' width={1000} height={1000} className='object-contain w-24' />

                </div>
            </div>
            <div className='ml-10'>
                <h2 className='font-bold text-2xl line-clamp-1'>LoremLoremLorem LoremLoremLorem LoremLoremLorem</h2>
                <p className='text-justify my-2 text-lg'>para</p>
                <p className='text-2xl my-2 '>
                    <span className='font-bold'>Facilities:</span>
                    <span className=''> Free Wifi, Pet , Breakfast, Car Parking</span>
                </p>
                <div className='flex items-center gap-4'>
                    <button className='px-8 py-2 rounded-lg bg-blue-400 text-lg text-white'>Price: 450</button>
                    <p className='font-bold text-red-600'>
                        <Link href={'/hotels/2'} >See Details</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
