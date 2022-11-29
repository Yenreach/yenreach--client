import React from 'react'
import Image from '../../../assets/image.svg'
import Button from '../Button'

const index = () => {
  return (
    <div className='flex flex-col rounded-t-3xl overflow-hidden'>
      <img src={Image} className='bg-cover bg-center ' alt="" />
      <div className="flex flex-col rounded-b-3xl border-x border-b border-[#777777] justify-center items-start gap-3 py-4 px-3 ">
        <div className="flex flex-col justify-center items-start gap-1">
          <h2 className="font-bold text-xs">
            2013 turbo engine (V5)
          </h2>
          <p className="text-xsm w-2/3">
            Second hand Toyota camry engine still intact cash and carry
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className='font-bold'>
            #100,000
          </span>
          <Button variant='product' className='py-2 px-8 md:px-4 lg:px-8 rounded-md'>
            View More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default index