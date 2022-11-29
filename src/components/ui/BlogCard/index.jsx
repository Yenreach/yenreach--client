import React from 'react'
import Clock from '../../../assets/clock.svg'
import Arrow from '../../../assets/arrow.svg'
import BlogBg from '../../../assets/blog/blog-bg.svg'

const index = () => {
  return (
    <div className='flex flex-col'>
      <img className='object-cover object-center' src={BlogBg} alt="" />
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="text-xl">
            Business start engaging automation software for daily transactions
          </h2>
          <div className="flex gap-1 text-smm text-[#98A2B3] justify-center items-center">
            <img src={Clock} alt="clock" />
            <span>4 mins read</span>
          </div>
        </div>
        <p className="text-left">
          There has been a rapid uprising of automation software in the business wordas many companies now start switching to technology to help.....
        </p>
        <div className="flex gap-2 justify-center items-center">
          <span className="text-green">Read More</span>
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default index