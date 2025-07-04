import React from 'react'
import { Link } from 'react-router-dom'
import Clock from '../../../assets/clock.svg'
import Arrow from '../../../assets/arrow.svg'
import BlogBg from '../../../assets/blog/blog-bg.svg'

const index = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog?.id}`}>
      <div className='flex flex-col shadow hover:shadow-lg'>
        <img className='object-cover object-center h-32 bg-graybg' src={blog?.mediaUrl?.replace("mediatoken", "media&token") || BlogBg} alt="" />
        <div className="flex flex-col p-4">
          <div className="flex flex-col h-24">
            <h2 className="text-base font-medium max-h-[70px] overflow-hidden">
              {blog?.title}
            </h2>
            <div className="flex w-full justify-start gap-1 text-xs text-[#98A2B3] items-center">
              <img src={Clock} alt="clock" />
              <span>4 mins read</span>
            </div>
          </div>
          <p className="text-left h-24 overflow-hidden text-sm">
            {blog?.preview}
          </p>
          <div className="flex gap-2 justify-start items-center mt-7 text-sm">
            <span className="text-green">Read More</span>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
  </Link>
  )
}

export default index