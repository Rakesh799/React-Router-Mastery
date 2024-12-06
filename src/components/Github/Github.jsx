import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/rakesh799")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='w-3/4 mx-auto my-4 h-[63vh] '>
            <img className='w-80 h-80 mx-auto rounded-xl' src={data.avatar_url} alt="Git Profile-Picture" />
            <h1 className='md:w-80 w-full mx-auto my-2 rounded-xl font-bold text-center p-2 bg-purple-300'>Github Repos: {data.public_repos} </h1>
        </div>
    )
}
export default Github

export const githubInfoLoader = async() => {
  const response =  await fetch("https://api.github.com/users/rakesh799")
  return response.json()
}
