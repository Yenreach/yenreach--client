import React from 'react'
import { Link } from 'react-router-dom'
import ArrowDown from '/src/assets/arrow-down.svg'
import DP from '/src/assets/dashboard/img.svg'


const index = ({ business_string, type }) => {
  return (
    <div className='p-3 px-3 lg:pr-20 xl:pr-36 bg-white flex items-center justify-between'>
        <div className='text-[#69707D]'>
            Business {'>'} Hard rock cafe
        </div>
        <div className='flex items-center gap-4 text-sm'>
            <Link to={`/users/business/${business_string}`} className={`py-1.5 px-4 ${type==="business" ? "bg-green text-white font-medium": "bg-[#F1F1F1]"}`}>Overview</Link>
            <Link to={`/users/products/${business_string}`} className={`py-1.5 px-4 ${type==="product" ? "bg-orange text-white font-medium": "bg-[#F1F1F1]"}`}>Marketplace</Link>
            <Link to={`/users/jobs/${business_string}`} className={`py-1.5 px-4 ${type==="job" ? "bg-blue text-white font-medium": "bg-[#F1F1F1]"}`}>Jobs</Link>
        </div>
        <div className='flex items-center gap-1'>
            <img src={DP} alt="" />
            <img src={ArrowDown} alt="" />
        </div>
    </div>
  )
}

export default index