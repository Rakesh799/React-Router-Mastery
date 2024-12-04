import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className=' bg-[#F3E5F5] py-4'>
                <div className="mx-auto w-3/4 flex justify-between items-center">
                    <h2 className='font-bold text-2xl'>React Router</h2>
                    <ul className='flex gap-4 font-bold items-center'>
                        <li className='cursor-pointer hover:underline'>
                            <NavLink to="" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
                                Home
                            </NavLink>
                        </li>
                        <li className='cursor-pointer hover:underline'>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
                                About
                            </NavLink>
                        </li>
                        <li className='cursor-pointer hover:underline'>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black'>
                                <NavLink to="/github" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
                                    Github
                                </NavLink>
                            </button>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Header