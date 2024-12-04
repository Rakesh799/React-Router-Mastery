import React from 'react'

const About = () => {
    return (
        <>
            <div className='w-3/4 mx-auto mt-8'>
                <div className='text-xs'>
                    React Router makes navigation in React apps smooth and efficient, simplifying route management.
                </div>
                <div className='font-bold text-4xl'>
                    Discover the Power of React Router: Streamlining Navigation for Seamless User Experiences
                </div>

                <div className="grid grid-cols-2 gap-3 my-12 h-96">
                    <div className='h-96'>
                        <img className='relative rounded-lg w-full h-full' src="bgimg.png" alt="" />
                        <img className='relative rounded-lg w-full h-full bottom-[400px] left-4' src="img.png" alt="" />
                    </div>

                    <div className=' flex flex-col gap-y-28 px-8'>
                        <div>
                            React Router is a comprehensive solution for managing navigation in React applications. It allows developers to define routes, create dynamic links, and handle session history, enhancing user experience. By providing a simple API, React Router streamlines the process of building scalable, single-page applications, making navigation smooth and efficient for both developers and users.
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>React Router simplifies dynamic navigation within React applications.</div>
                            <div>It ensures seamless transitions between different app views and states.</div>
                            <div>   Build scalable, responsive apps with smooth routing and minimal effort.</div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mb-3'>Key Features of React Router</h2>
                    <div className="grid grid-cols-4 gap-10">
                        <div className='shadow-2xl p-4'>
                            <img className='' src="rocket.png" width={40} alt="img" />
                            <h2 className='font-bold'>Routing</h2>
                            <p className='text-xs'>React Router handles dynamic routing, mapping URLs to specific components for seamless app navigation.</p>
                        </div>
                        <div className='shadow-2xl p-4'>
                            <img className='' src="rocket.png" width={40} alt="img" />
                            <h2 className='font-bold'>Links</h2>
                            <p className='text-xs'>Use React Router’s Link component to create navigational links between different pages and components.</p>
                        </div>
                        <div className='shadow-2xl p-4'>
                            <img className='' src="rocket.png" width={40} alt="img" />
                            <h2 className='font-bold'>History</h2>
                            <p className='text-xs'>Manage navigation history with React Router to allow smooth transitions and user session tracking</p>
                        </div>
                        <div className='shadow-2xl p-4'>
                            <img className='' src="rocket.png" width={40} alt="img" />
                            <h2 className='font-bold'>Navigation</h2>
                            <p className='text-xs'>React Router enables efficient and flexible navigation, making single-page applications faster and more interactive</p>
                        </div>
                    </div>
                    <h2 className='text-2xl font-bold text-center mt-20'>Companies we've Collaborated with</h2>
                    <div className='flex'>
                        <div className='w-1/2 flex flex-col gap-8 pt-10'>
                            <p>
                            React Router offers powerful tools to manage navigation, ensuring a smooth user experience. It simplifies routing, history management, and dynamic page rendering, making your web applications more interactive and responsive. With flexible configurations, React Router adapts to various app structures, providing seamless transitions and enhancing overall performance
                            </p>
                            <p className='text-xs'>
                            React Router simplifies dynamic routing, allowing seamless navigation between components and pages in React applications
                            </p>
                            <button className='w-fit bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black'>Contact Now</button>
                        </div>
                        <div className='w-1/2'>
                            <img src="companies.png" alt="" />
                        </div>
                    </div>
                    <h2 className='text-2xl font-bold text-center mt-8 mb-4'>Read our Reviews</h2>
                    <div className="grid grid-cols-3 gap-8 mb-20">
                        <div className='flex flex-col gap-2'>
                            <img className='mx-auto' src="stars.png" width={60} alt="img" />
                            <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore assumenda adipisci ea a tenetur Lorem ipsum dolor sit amet.</p>
                            <h2 className='font-bold text-center'>-Amanda Reed</h2>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <img className='mx-auto' src="stars.png" width={60} alt="img" />
                            <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore assumenda adipisci ea a tenetur Lorem ipsum dolor sit amet.</p>
                            <h2 className='font-bold text-center'>-Dennis Barret</h2>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <img className='mx-auto' src="stars.png" width={60} alt="img" />
                            <p className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore assumenda adipisci ea a tenetur Lorem ipsum dolor sit amet.</p>
                            <h2 className='font-bold text-center'>-Samuel Bishop</h2>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default About
