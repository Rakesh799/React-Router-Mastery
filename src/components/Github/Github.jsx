import React, { useEffect, useState } from 'react'

const Github = () => {

    const [profile, setProfile] = useState()
    const [followers, setFollowers] = useState()

    useEffect(() => {
        fetch("https://api.github.com/users/rakesh799")
            .then((res) => res.json())
            .then((res) => {
                setProfile(res.avatar_url)
                setFollowers(res.followers)
            })
    }, [])

    return (
        <div className='w-3/4 mx-auto my-4 h-[63vh] '>
            <img className='w-80 h-80 mx-auto rounded-xl' src={profile} alt="" />
            <h1 className='w-80 mx-auto my-2 rounded-xl font-bold text-center p-2 bg-purple-300'>Github Followers: {followers} </h1>
        </div>
    )
}

export default Github
