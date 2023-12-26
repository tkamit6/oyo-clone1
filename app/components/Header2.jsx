import React from 'react'

const List = [
    {
        name: 'Banglore'
    },
    {
        name: 'Delhi'
    },
    {
        name: 'Kolkata'
    },
    {
        name: 'Heyderabad'
    },
]
export default function Header2() {
    return (
        <div className='px-16 max-w-7xl mx-auto flex bg-gray-100/40 py-3 justify-between'>
            {
                List.map((elem, id) => (
                    <span key={id} >{elem.name}</span>
                ))
            }
        </div>
    )
}
