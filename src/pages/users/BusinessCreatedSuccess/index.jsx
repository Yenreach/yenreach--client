import React from 'react'
import NoBusiness from '../../../assets/dashboard/no-business.svg'
import Check from '../../../assets/check.svg'


const index = () => {
  return (
    <div className='flex-1 bg-graybg'>
      <div className='p-4 px-3 bg-white'>
        <h1 className='text-2xl text-[#69707D] font-medium'>
          Dashboard
        </h1>
      </div>
      <div className='flex justify-center items-center pt-20'>
        <div className='flex flex-col justify-center items-center rounded-2xl font-arialsans p-20 bg-white'>
          <span className='px-3 p-4 rounded-full border-4 mb-10 border-green'>
            <img src={Check} alt="" className='' />
          </span>
          <p className='text-center text-lg mb-6'>
            Congratulations you've just created a new business 
          </p>
          <a href=""className='text-green underline underline-offset-2'>Check the <a href="" className='underline text-green text-sm'>business page</a> to view your businesses</a>
        </div>
      </div>
    </div>
  )
}

export default index