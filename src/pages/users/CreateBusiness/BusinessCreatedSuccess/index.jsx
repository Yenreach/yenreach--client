import React from 'react'
import { Link } from 'react-router-dom'
import Check from '/src/assets/check.svg'


const index = () => {
  return (
      <div className='flex justify-center items-center pt-20 overflow-hidden'>
        <div className='flex flex-col justify-center items-center rounded-2xl font-arialsans p-20 bg-white'>
          <span className='px-3 p-4 rounded-full border-4 mb-10 border-green'>
            <img src={Check} alt="" className='' />
          </span>
          <p className='text-center text-lg mb-6'>
            Congratulations you've just created a new business 
          </p>
          <Link to={"/users"} className='text-green underline underline-offset-2'>Check the <span href="" className='underline text-green text-sm'>business page</span> to view your businesses</Link>
        </div>
      </div>
  )
}

export default index