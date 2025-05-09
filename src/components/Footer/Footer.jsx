import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='w-[95%] md:w-full mx-auto bottom-0'>
        <div className="md:w-3/4 p-1 mx-auto mt-8 grid grid-cols-3 gap-4">
          <div className=''>
            <div className='flex items-center gap-2'>
              <img className='w-8 h-8 rounded-full' src="dp.jpg" alt="IMG" />
              <h2 className='font-bold'>Rakesh Choudhury</h2>
            </div>
            <div>
              <p className='text-xs mt-2'>
              Passionate about building dynamic, user-friendly web applications with React. Focused on creating seamless navigation and optimized user experiences.
              </p>
            </div>
          </div>
          <div className='flex md:gap-x-20 gap-x-6'>
            <div className='md:ml-4 ml-8'>
              <h3 className='font-bold'>Pages</h3>
              <div className='text-xs mt-2'>
                <div className='hover:underline'>
                  <Link to="/">Home</Link>
                </div>
                <div className='hover:underline'>
                  <Link to="/about">About</Link>
                </div>
                <div className='hover:underline'>
                  <Link to="contact">Contact</Link>
                </div>
                <div className='hover:underline'>
                  <Link to="github">Github</Link>
                </div>
              </div>
            </div>
            <div>
              <h3 className='font-bold'>Utility Pages</h3>
              <div className='text-xs mt-2'>
                <div>Style Guide</div>
                <div>Instructions</div>
                <div>Licenses</div>
                <div>Changelog</div>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <h3 className='font-bold'>Subscribe to GymboyRakesh</h3>
            <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg mt-5 font-bold ring-1 ring-black'>
              <Link to={"https://www.youtube.com/@GymBoyRakesh"} target='blank'>GymboyRakesh</Link>
            </button>
          </div>
        </div>
        <div>
          <hr className='my-2 mx-auto w-3/4' />
          <p className='w-3/4 mx-auto text-sm mb-2'>&copy; 2024 Gymboy Rakesh. All rights reserved. Unauthorized reproduction or distribution of any content is prohibited.</p>
        </div>
      </div>
    </>
  )
}

export default Footer