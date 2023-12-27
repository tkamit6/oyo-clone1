import React from 'react'
import Hotel from '../components/Hotel'
import Header1 from '../components/Header1'

export default function Hotels() {
    return (
        <>
            <Header1 />
            <div className='flex flex-col gap-5 m-5'>
                <Hotel />
                <Hotel />
            </div>
        </>
    )
}
