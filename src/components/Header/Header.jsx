import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleHamburger = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div>
            <nav className=' bg-[#F3E5F5] py-4'>
                <div className="mx-auto md:w-3/4 flex md:flex-row flex-col justify-between items-center px-2">
                    <h2 className='font-bold text-2xl md:w-40 w-[95%] flex justify-between'>
                        React Router
                        <img
                            className='md:hidden'
                            onClick={handleHamburger}
                            src={menuOpen?"/cross.svg": "/hamburger.svg"}
                            alt="" />
                    </h2>
                    <ul className={`md:flex gap-4 mt-2 font-bold items-center ${menuOpen? "flex": "hidden"}`}>
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
                            <button className='cursor-pointer hover:underline'>
                                <NavLink to="/github" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
                                    Github
                                </NavLink>
                            </button>
                        </li>
                        <li className='cursor-pointer hover:underline'>
                            <NavLink to="/project" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
                                Projects
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Header