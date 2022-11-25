import React from 'react'
import Image from '../../../assets/image.svg'
import Button from '../Button'

const index = () => {
  return (
    <div className='flex flex-col rounded-t-md gap-2'>
      <img src={Image} alt="" />
      <h2 className="font-bold text-xs">
        2013 turbo engine (V5)
      </h2>
      <p className="text-xsm w-2/3">
        Second hand Toyota camry engine still intact cash and carry 
      </p>
      <div className="flex justify-between items-center">
        <span className='font-bold'>
          #100,000
        </span>
        <Button>
          View More
        </Button>
      </div>
    </div>
  )
}

export default index