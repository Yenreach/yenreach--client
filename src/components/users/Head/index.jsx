import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import Links from '../Links'
import ArrowDown from '/src/assets/arrow-down.svg'
import DP from '/src/assets/dashboard/img.svg'

const index = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className='p-4 px-3 bg-white flex gap-4 justify-between items-center'>
        <h1 className='text-xl text-[#69707D] font-medium'>
            Dashboard
        </h1>
        <div className='flex items-center gap-1'>
            <img src={DP} alt="" />
            <img src={ArrowDown} alt="" />
        </div>
        { isOpen ? 
          <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden relative z-50 text-gray-dark`} /> 
          : <BiMenu onClick={() => setIsOpen(true)} className='cursor-pointer text-3xl md:hidden relative z-50 text-gray-dark' />
        }
          <Links isOpen={isOpen} />
    </div>
  )
}

export default index