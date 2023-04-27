import React from 'react'
import ErrorImg from '/src/assets/error-page.png'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-12 h-screen p-12 text-center -mt'>
        <img src={ErrorImg} alt="" className='w-full max-w-xl' />
        <p>The page you're requesting for does not exist</p>
        <Link to="/" className='underline text-green'> Go back Home</Link>
    </div>
  )
}

export default index