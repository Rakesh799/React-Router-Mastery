import React from 'react'
import { NavLink } from 'react-router-dom'

const Project = () => {
    return (
        <div>
            <ul>
                <li className='cursor-pointer hover:underline'>
                    <NavLink to="https://rakeshmegablog.netlify.app" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"} target='blank'>
                        MegaBlog
                    </NavLink>
                </li>
                <li className='cursor-pointer hover:underline'>
                    <NavLink to="https://rakeshpasswordgenerator.netlify.app" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"} target='blank'>
                        Password Generator
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Project
