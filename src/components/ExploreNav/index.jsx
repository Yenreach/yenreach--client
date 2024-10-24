import React from 'react'
import { useLocation } from 'react-router-dom'
import { BiBriefcase, BiMouseAlt } from 'react-icons/bi'
import { MdOutlineHome } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ExploreNav = ({ activeTab }) => {
    const { pathname, ...k } = useLocation()
  return (
    <div className="tab flex px-4 py-6 md:px-28 gap-3 md:gap-8 shadow-md border-t border-gray-light sticky z-20 top-[48px] md:top-[70px] bg-white">
              <Link to={'/explore'} className={`flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer ${pathname==='/explore' ? "border-b-2 border-green text-green" : "text-gray"} pb-2`}>
                <MdOutlineHome size="1.3rem" className={`${pathname==='/explore' ? "text-green" : "text-gray"}`} />
                <span className='text-xs md:text-sm font-medium'>Business</span>
              </Link> 
              <Link to={'/explore/jobs'} className={`flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer ${pathname==='/explore/jobs' ? "border-b-2 border-blue text-blue" : "text-gray"} pb-2`}>
                <BiBriefcase size="1.3rem" className={`${pathname==='/explore/jobs' ? "text-blue" : "text-gray"}`} />
                <span className={`text-xs md:text-sm font-medium`}>Jobs & Careers</span>
              </Link> 
             <Link to={'/explore/products'} className={`flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer ${pathname==='/explore/products' ? "border-b-2 border-orange text-orange" : "text-gray"} pb-2`}>
                <BiMouseAlt size="1.3rem" className={`${pathname==='/explore/products' ? "text-orange" : "text-gray"}`} />
                <span className={`text-xs md:text-sm font-medium`}>Marketplace</span>
              </Link> 
        </div>
  )
}

export default ExploreNav

// const ExploreNav = ({ activeTab, setActiveTab }) => {
//   return (
//     <div className="top tab flex px-4 py-6 md:px-28 gap-3 md:gap-8 shadow-md border-t border-gray-light sticky z-20 top-[48px] md:top-[88px] bg-white">
//               <div className={`flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer ${activeTab === "business" ? "border-b-2 border-green text-green" : "text-gray"} pb-2`} onClick={() => setActiveTab('business')}>
//                 <MdOutlineHome size="1.3rem" className={`${activeTab==="business" ? "text-green" : "text-gray"}`} />
//                 <span className='text-xs md:text-sm font-medium'>Business</span>
//               </div> 
//               <div className={`flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer ${activeTab === "jobs" ? "border-b-2 border-blue text-blue" : "text-gray"} pb-2`} onClick={() => setActiveTab('jobs')}>
//                 <BiBriefcase size="1.3rem" className={`${activeTab==="jobs" ? "text-blue" : "text-gray"}`} />
//                 <span className={`text-xs md:text-sm font-medium`}>Jobs & Careers</span>
//               </div> 
//              <div className={`flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer ${activeTab === "marketplace" ? "border-b-2 border-orange text-orange" : "text-gray"} pb-2`} onClick={() => setActiveTab('marketplace')}>
//                 <BiMouseAlt size="1.3rem" className={`${activeTab==="marketplace" ? "text-orange" : "text-gray"}`} />
//                 <span className={`text-xs md:text-sm font-medium`}>Marketplace</span>
//               </div> 
//         </div>
//   )
// }
