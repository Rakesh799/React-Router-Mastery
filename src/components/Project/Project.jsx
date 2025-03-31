import React from 'react'
import { NavLink } from 'react-router-dom'

const Project = () => {
    return (
        <div className='w-3/4 mx-auto' >
            <h1 className='ml-2 mt-8 mb-4 font-bold text-2xl underline'>Click on the project names to explore.</h1>
            <ul className='w-[95%] mx-auto text-lg font-bold flex flex-col gap-2'>
                <li className='cursor-pointer hover:underline'>
                    <NavLink to="https://rakeshmegablog.netlify.app" className="text-purple-900" target='blank'>
                        MegaBlog
                    </NavLink>
                </li>
                <li className='cursor-pointer hover:underline'>
                    <NavLink to="https://rakeshpasswordgenerator.netlify.app" className="text-purple-900" target='blank'>
                        Password Generator
                    </NavLink>
                </li>
                <li className='cursor-pointer hover:underline'>
                    <NavLink to="https://rakeshcurrencyconverter.netlify.app" className="text-purple-900" target='blank'>
                        Currency Convertor
                    </NavLink>
                </li>
                <li className='cursor-pointer hover:underline'>
                    <NavLink to="https://todopracticerakesh.netlify.app" className="text-purple-900" target='blank'>
                        TodoApp
                    </NavLink>
                </li>
                <li className='cursor-pointer hover:underline'>
                    <NavLink to="https://reactroutermastery.netlify.app/" className="text-purple-900" target='blank'>
                        React Router
                    </NavLink>
                </li>
                <li className='cursor-pointer hover:underline'>
                    <NavLink to="https://colorwheelrakesh.netlify.app/" className="text-purple-900" target='blank'>
                        Colour Wheel
                    </NavLink>
                </li>
                <li className='cursor-pointer hover:underline'>
                    <NavLink to="https://1mdmrakesh.netlify.app/" className="text-purple-900" target='blank'>
                        1MDM
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Project
