import React from 'react'
import { BiBriefcase, BiMouseAlt } from 'react-icons/bi'
import { MdOutlineHome } from 'react-icons/md'

const ExploreNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="top tab flex px-4 py-6 md:px-28 gap-3 md:gap-8 shadow-md border-t border-gray-light sticky z-20 top-[48px] md:top-[88px] bg-white">
              <div className={`flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer ${activeTab === "business" ? "border-b-2 border-green text-green" : "text-gray"} pb-2`} onClick={() => setActiveTab('business')}>
                <MdOutlineHome size="1.3rem" className={`${activeTab==="business" ? "text-green" : "text-gray"}`} />
                <span className='text-xs md:text-sm font-medium'>Business</span>
              </div> 
              <div className={`flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer ${activeTab === "jobs" ? "border-b-2 border-blue text-blue" : "text-gray"} pb-2`} onClick={() => setActiveTab('jobs')}>
                <BiBriefcase size="1.3rem" className={`${activeTab==="jobs" ? "text-blue" : "text-gray"}`} />
                <span className={`text-xs md:text-sm font-medium`}>Jobs & Careers</span>
              </div> 
             <div className={`flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer ${activeTab === "marketplace" ? "border-b-2 border-orange text-orange" : "text-gray"} pb-2`} onClick={() => setActiveTab('marketplace')}>
                <BiMouseAlt size="1.3rem" className={`${activeTab==="marketplace" ? "text-orange" : "text-gray"}`} />
                <span className={`text-xs md:text-sm font-medium`}>Marketplace</span>
              </div> 
        </div>
  )
}

export default ExploreNav