import React from 'react'

const Contact = () => {
    return (
        <>
            <div>
                <div className="md:w-1/5 bg-[#F3E5F5] mx-auto text-center rounded-lg">
                    <h1 className='text-3xl font-bold p-3 my-4'>Contact us</h1>
                </div>
                <div className='md:w-3/4 md:h-96 mx-auto md:flex justify-between items-center gap-12 p-2'>
                    <div className='md:w-1/2 flex flex-col gap-4 px-8'> 
                        <div>
                            <h2 className='text-sm font-bold'>Damanjodi,Koraput, Odisha, (763008) (INDIA)</h2>
                            <p className='text-xs'>Present Address (Home) </p>
                        </div>
                        <div>
                            <h2 className='text-sm font-bold'>Bhubaneswar, Odisha (INDIA)</h2>
                            <p className='text-xs'>University Address</p>
                        </div>
                        <div>
                            <h2 className='text-sm font-bold'>Bangalore, Karnatak (INDIA)</h2>
                            <p className='text-xs'>Previous Work Address</p>
                        </div>
                        <div>
                            <h2 className='text-sm font-bold'>Follow me</h2>
                            <div className='flex gap-2'>
                                <img className='w-4 h-4 rounded-full' src="facebook.png" alt="IMG" />
                                <img className='w-4 h-4 ' src="insta.png" alt="IMG" />
                                <img className='w-4 h-4 rounded-full' src="twitter.png" alt="IMG" />
                            </div>
                        </div>
                    </div>

                    <div className='md:w-1/2 shadow-2xl rounded-lg p-4'>
                        <form className='flex flex-col gap-2 p-4' action="">
                            <div className='flex flex-col'>
                                <label htmlFor="name">Name</label>
                                <input className='outline-none rounded-sm w-full h-8 bg-[#F3E5F5] p-1 text-xs' type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email">Email</label>
                                <input className='outline-none rounded-sm w-full h-8 bg-[#F3E5F5] p-1 text-xs' type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="phone">Phone Number</label>
                                <input className='outline-none rounded-sm w-full h-8 bg-[#F3E5F5] p-1 text-xs' type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="message">Message</label>
                                <textarea className='outline-none rounded-sm w-full h-20 bg-[#F3E5F5] p-1 text-xs' rows="3" type="text" />
                            </div>
                            <div>
                                <button className='bg-[#F3E5F5] text-sm font-bold py-1 px-2 rounded-lg mt-4 ring-1 ring-black hover:bg-[#e8f0fe]'>
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
