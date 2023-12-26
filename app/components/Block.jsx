import Image from 'next/image'
import React from 'react'

export default function Block({title, para}) {
    return (
        <div className='w-64 h-full flex items-center gap-3 border-r ps-4 last:border-0 '>
            <Image src={'/logo.webp'} alt='img' width={200} height={200} className='object-contain w-10 h-20 rounded-full' />
            <div>
                <h3 className='font-bold'>{title}</h3>
                <p className='text-gray-400 text-sm line-clamp-1'>{para}</p>
            </div>
        </div>
    )
}
