import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const { userid } = useParams()

    return (
        <>
            <div className='w-3/4 h-[65vh] mx-auto text-center font-bold py-8'>

                <h2 className='text-3xl'>Welcome {userid.toUpperCase()}</h2>

                <p className='text-2xl'>Here we have collected the data, dynamically from the slug.</p>
            </div>
        </>
    )
}

export default User
