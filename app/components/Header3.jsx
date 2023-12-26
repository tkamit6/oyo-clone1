import React from 'react'

export default function Header3() {
    return (
        <div className=' bg-gradient-to-r from-red-600 to-red-500/90 py-6'>
            <div className=' max-w-7xl mx-auto '>
                <h2 className='text-4xl text-center font-bold text-white'>Over 157,000 hotels and homes across 35 countries</h2>
                <div className='pt-5 grid grid-cols-5 items-center'>
                    <input type='text' placeholder='Search...' className='outline-none px-3 h-12 text-lg border-r-2 border-gray-400 col-span-2' />
                    <input type='text' placeholder='Search...' className='outline-none px-3 h-12 text-lg border-r-2 border-gray-400 col-span-1' />
                    <input type='text' placeholder='Search...' className='outline-none px-3 h-12 text-lg border-r-2 border-gray-400 col-span-1' />
                    <button className='col-span-1 h-12 outline-none text-lg py-2 px-3 bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white'>Search</button>
                </div>
                <div className='flex mx-20 my-5 font-bold'>
                    <button className=' h-12 outline-none text-lg py-2 px-3 hover:cursor-pointer mr-5 text-white'>Contineu Your Search</button>
                    <button className='border border-gray-100 h-12 outline-none text-lg py-2 px-3 hover:cursor-pointer mr-5 text-white hover:bg-gray-600 rounded-lg'>Home Stay in India</button>

                </div>
            </div>
        </div>
    )
}
