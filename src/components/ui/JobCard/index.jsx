import React from 'react'
import JobImage from '../../../assets/craig-marolf-z33FLebN9G0-unsplash.jpg'
// import JobImage from '../../../assets/image-job.png'

const index = () => {
  return (
    <div className='flex justify-center items-center relative overflow-hidden'>
      <img className='overflow-hidden h-full w-40 object-cover' src={JobImage} alt="" />
      <div className="flex w-2/3 flex-col gap-2 bg-[#F5F7FA] rounded-r-2xl border-y border-r border-gray px-3 pt-5 pb-2">
        <h3 className="text-smm">Google</h3>
        <h2 className='font-bold'>The Front desk officer</h2>
        <div className="flex gap-2">
          <span className="p-1 text-xsm bg-[#E0E5EE] text-[#69707D]">Lagos</span>
          <span className="p-1 text-xsm bg-[#E0E5EE] text-[#69707D]">Contract</span>
          <span className="p-1 text-xsm bg-[#E0E5EE] text-[#69707D]">NGN Confidential</span>
        </div>
        <div className=" w-full flex font-bold justify-end pr-5 text-xs text-[#69707D] text-end">14h</div>
      </div>
    </div>
  )
}

export default index