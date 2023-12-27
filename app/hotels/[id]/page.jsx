import Image from 'next/image'
import React from 'react'

export default function SinglHotel() {
    return (
        <div className='m-5 my-10'>
            <Image src={'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={2000} height={2000} className='w-7/12 my-5 object-contain mx-auto' />
            <div className='mx-20 '>
                <h3 className='text-3xl font-bold'> Heading</h3>
                <p className='text-xl my-5 text-justify'>Paragraph</p>
                <button className='px-8 py-2 rounded-lg bg-blue-400 text-lg text-white'>Price: 450</button>
                <p className='text-3xl font-bold my-5'>Facilities</p>
                <ul className='flex text-xl justify-between'>
                    <li> Swimming Pool </li>
                    <li> Swimming Pool </li>
                    <li> Swimming Pool </li>
                    <li> Swimming Pool </li>
                </ul>
                <button className='px-8 py-2 mt-6 rounded-lg bg-blue-400 text-lg text-white'>Book Now</button>
            </div>
        </div>
    )
}
