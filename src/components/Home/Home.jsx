import React from 'react'

const Home = () => {
    return (
        <>
            <div>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold mt-10 md:w-1/3 mx-auto px-1'>Mastering React Router: Simplified Navigation</h1>
                    <p className='md:w-1/4 text-xs mx-auto py-6 px-2'>React Router simplifies navigation in React apps, enabling dynamic routing, URL management, and component-based rendering. It enhances user experience effortlessly.</p>
                    <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black'>Get Started</button>
                </div>
                <div className='md:w-3/4 px-1 h-80 flex mx-auto md:gap-6 gap-1 my-12 relative'>
                    <div className='w-1/4 h-full'>
                        <img className='rounded-xl' src="d.png" alt="" />
                    </div>
                    <div className='w-1/4 h-full relative top-6'>
                        <img className='rounded-xl' src="c.png" alt="" />
                    </div>
                    <div className='w-1/4 h-full'>
                        <img className='rounded-xl' src="b.png" alt="" />
                    </div>
                    <div className='w-1/4 h-full relative top-6'>
                        <img className='rounded-xl' src="a.png" alt="" />
                    </div>
                </div>

                <div className='w-3/4 mx-auto md:mt-24 md:my-20'>
                    <img src="e.png" alt="" />
                </div>

                <h2 className='font-bold text-3xl mx-auto w-3/4 text-center my-8'>Core concept of React-Router</h2>

                <div className="grid grid-cols-3 md:gap-14 gap-2 md:w-3/4 px-1 mx-auto text-center">
                    <div className='shadow-2xl py-6 flex flex-col gap-4'>
                        <img className='mx-auto' src="f.png" width={40} alt="img" />
                        <h2 className='font-bold'>Routes</h2>
                        <p className='text-xs px-2'>Define paths to render specific components dynamically based on URLs.</p>
                    </div>
                    <div className='shadow-2xl py-6 flex flex-col gap-4'>
                        <img className='mx-auto' src="g.png" width={40} alt="img" />
                        <h2 className='font-bold'>Links</h2>
                        <p className='text-xs px-2'>Navigate seamlessly between pages using React Router's link components.</p>
                    </div>
                    <div className='shadow-2xl py-6 flex flex-col gap-4'>
                        <img className='mx-auto' src="h.png" width={40} alt="img" />
                        <h2 className='font-bold'>History</h2>
                        <p className='text-xs px-2'>Manage session history efficiently for a smooth navigation experience.</p>
                    </div>
                </div>

                <div className="md:flex h-fit md:w-3/4 p-1 mx-auto my-20 gap-12">
                    <div className='md:w-1/2 flex flex-col gap-28'>
                        <div>
                            <h2 className='font-bold text-3xl'>Unlock Seamless Navigation with React Router</h2>
                            <p className='text-sm mt-5'>React Router empowers developers to build dynamic, single-page applications with ease. Its intuitive tools like routes, links, and history management ensure smooth user experiences. Dive into the core concepts, learn their significance, and start mastering the art of navigation in modern web development.</p>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <div>Managing Route Structures</div>
                                    <div>Team Collaboration with Router</div>
                                    <div>Launching Apps with Navigation</div>
                                </div>
                                <div>
                                    <div>Simplifying Navigation for Beginners</div>
                                    <div>Advanced Techniques for Experts</div>
                                </div>
                            </div>
                            <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black mt-4'>Contact us</button>
                        </div>
                    </div>
                    <div className=' md:w-1/2 py-1 h-full'>
                        <img className='rounded-lg' src="i.png" alt="" />
                    </div>
                </div>

                <div className="md:flex h-fit md:w-3/4 mx-auto my-20 gap-12">
                    <div className='md:w-1/2 px-1 h-full'>
                        <img className='rounded-lg' src="j.png" alt="" />
                    </div>
                    <div className='md:w-1/2 p-1 flex flex-col gap-6'>
                        <div>
                            <h2 className='font-bold text-3xl'>We Empower Seamless Navigation Experiences</h2>
                            <p className='text-sm mt-5'>React Router equips you with the tools to create dynamic, single-page applications. With features like route management, link components, and history handling, it ensures intuitive navigation. Whether you're a beginner or an experienced developer, React Router simplifies building user-friendly web apps.</p>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div className='w-1/2 flex flex-col gap-1'>
                                    <h2 className='text-2xl font-bold'>Project</h2>
                                    <p>Explore how dynamic routes greatly enhance the overall app experience effectively.</p>
                                    <p className='text-blue-700 underline'>Boost app navigation seamlessly.</p>
                                </div>
                                <div className='w-1/2 flex flex-col gap-1'>
                                    <h2 className='text-2xl font-bold'>Contact</h2>
                                    <p>Have questions or need further assistance with React Router? Connect with us!</p>
                                    <p className='text-blue-700 underline'>We're here to help.</p>
                                </div>
                            </div>
                            <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black mt-8'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
