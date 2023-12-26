'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function Login() {

  const [formStep, setFormStep] = useState(0);

  return (
    <div className='flex h-screen relative justify-center mx-auto  login-page'>
      <div className='max-w-7xl'>
        <h2 className='text-white items-center flex text-lg font-semibold absolute top-10 gap-5'> <span className='font-extrabold text-4xl '><Link href='/'>  OYO </Link></span> Hotels and homes across 800 cities, 24+ countries</h2>
        <div className='grid grid-cols-2 gap-10 mt-[6%]'>
          <div className='col-span-1 p-4 text-white pt-20'>
            <p className='text-6xl font-bold'>There’s a smarter way to OYO around</p>
            <p className='text-base mt-4'>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
          </div>

          <div className='col-span-1 bg-white mx-20'>
            <div className='w-full bg-red-600 text-white py-2 px-8'>
              <p>Sign up & Get ₹500 OYO Money</p>
            </div>
            <div className='px-8 py-4 space-y-4 mb-28 '>
              <h3 className='font-bold text-4xl pt-4 '>Login / Signup</h3>
              <p className=''>Please enter your phone number to continue</p>
              {
                formStep == 0 &&
                <>

                  <form className='flex flex-col gap-4'>
                    <input type='text' placeholder='Name' className='w-full outline-none border border-black rounded py-2 px-4' />
                    <input type='email' placeholder='ex: mail@mail.com' className='w-full outline-none border border-black rounded py-2 px-4' />
                    <input type='password' placeholder='*******' className='w-full outline-none border border-black rounded py-2 px-4' />
                    <button type='submit' className='bg-green-600 w-1/2 rounded-md px-6 py-2 text-white text-lg'>Sign Up</button>
                  </form>
                  <p>Already have an account ? <span className='text-red-600 font-bold cursor-pointer' onClick={() => setFormStep(1)} > Click here </span></p>
                </>
              }
              {
                formStep == 1 &&
                <>
                  <form className='flex flex-col gap-4'>
                    <input type='email' placeholder='ex: mail@mail.com' className='w-full outline-none border border-black rounded py-2 px-4' />
                    <input type='password' placeholder='*******' className='w-full outline-none border border-black rounded py-2 px-4' />
                    <button type='submit' className='bg-green-600 w-1/2 rounded-md px-6 py-2 text-white text-lg'>Login</button>
                  </form>
                  <p>Not have an account ? <span className='text-red-600 font-bold cursor-pointer' onClick={() => setFormStep(0)} > Click here </span></p>
                </>
              }



            </div>
            <div className='border-t-2 px-8 border-gray-200 relative py-6'>
              <p className='absolute bg-white px-2 -top-3 left-8 font-bold text-black'>Or sign in as</p>

              <ul className='flex gap-8'>
                <li className=''>Travel Agent</li>
                <li>Corporate</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
