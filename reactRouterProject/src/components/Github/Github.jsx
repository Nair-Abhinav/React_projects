import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    //api call
    // const [data ,setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Nair-Abhinav')
    //     .then(data => data.json())
    //     .then((data) => {setData(data)})
    // },[])

  return (
    <div className='bg-gray-700  p-5 '>
      <h1 className='flex justify-center text-3xl py-2 text-white'>Followers : {data.followers}</h1>
      <img className="m-auto" src={data.avatar_url}/>
    </div>
  )
}

export default Github


export const getGithubData = () => {
  return fetch('https://api.github.com/users/Nair-Abhinav')
  .then(data => data.json())
  .then((data) => {return data})
}
