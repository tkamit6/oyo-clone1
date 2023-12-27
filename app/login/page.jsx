'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function Login() {

  const router = useRouter();
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChangeSignup = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState, [name]: value
    }))
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/registeruser', {
        name: FormData.name,
        email: FormData.email,
        password: FormData.password
      })
      if (res?.data) {
        Cookies.set('oyouser', res.data.token)
        alert(res.data.msg)
        console.log(res)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', {
        email: FormData.email,
        password: FormData.password
      })
      if (res?.data) {
        Cookies.set('oyouser', res.data.token)
        alert(res.data.msg)
        router.push('/')
        console.log(res)
      }
    } catch (error) {
      console.log(error)
    }

  }
  const [loginForm, setLoginForm] = useState(false);
  const formToggle = () => {
    setLoginForm(!loginForm)
  }

  return (
    <div className='flex h-screen relative justify-center mx-auto  login-page'>
      <div className='max-w-7xl container'>
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
                loginForm ?
                  <>
                    <form onSubmit={handleSignup} className='flex flex-col gap-4'>
                      <input type='text' name='name' onChange={handleChangeSignup} value={FormData.name} placeholder='Name' className='w-full outline-none border border-black rounded py-2 px-4' />
                      <input type='email' name='email' onChange={handleChangeSignup} value={FormData.email} placeholder='ex: mail@mail.com' className='w-full outline-none border border-black rounded py-2 px-4' />
                      <input type='password' name='password' onChange={handleChangeSignup} value={FormData.password} placeholder='*******' className='w-full outline-none border border-black rounded py-2 px-4' />
                      <button type='submit' className='bg-green-600 w-1/2 rounded-md px-6 py-2 text-white text-lg'>Sign Up</button>
                    </form>
                    {/* <p>Already have an account ? <span className='text-red-600 font-bold cursor-pointer' onClick={() => setFormStep(1)} > Click here </span></p> */}
                  </> : null
              }
              {
                loginForm ? '' :
                  <>
                    <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                      <input type='email' onChange={handleChangeSignup} value={FormData.email} name='email' placeholder='ex: mail@mail.com' className='w-full outline-none border border-black rounded py-2 px-4' />
                      <input type='password' onChange={handleChangeSignup} value={FormData.password} name='password' placeholder='*******' className='w-full outline-none border border-black rounded py-2 px-4' />
                      <button type='submit' className='bg-green-600 w-1/2 rounded-md px-6 py-2 text-white text-lg'>Login</button>
                    </form>
                  </>
              }

              <p>{loginForm ? 'Already have an account ?' : 'Not have an account ?'} <span className='text-red-600 font-bold cursor-pointer' onClick={formToggle} > {loginForm ? "Login" : "SignUp"} </span></p>


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
