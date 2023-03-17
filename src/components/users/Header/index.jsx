import React from 'react'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import { useAuthContext } from "/src/hooks/useAuthContext"
import ArrowDown from '/src/assets/arrow-down.svg'
import DP from '/src/assets/dashboard/img.svg'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import Links from '../Links'





const index = ({ business_string, type }) => {
  const [val, setVal] = React.useState("business")
  const [isOpen, setIsOpen] = React.useState(false)
  const navigate = useNavigate()


  const handleSwitch = (route) => {
    setVal(route)
    if (route === "business") {
      navigate(`/users/business/${business_string}`)
    } else {
      navigate(`/users/${route}s/${business_string}`)
    }
  }
  return (
    <div className='p-3 px-3 lg:pr-20 xl:pr-36 bg-white flex gap-6 items-center justify-between w-full'>
        <div className='text-[#69707D] text-xs xs:text-sm lg:text-base'>
            Business {'>'} Hard rock cafe
        </div>
        <div className='hidden md:flex items-center gap-4 text-sm'>
            <Link to={`/users/business/${business_string}`} className={`py-1.5 px-4 ${type==="business" ? "bg-green text-white font-medium": "bg-[#F1F1F1]"}`}>Overview</Link>
            <Link to={`/users/products/${business_string}`} className={`py-1.5 px-4 ${type==="product" ? "bg-orange text-white font-medium": "bg-[#F1F1F1]"}`}>Marketplace</Link>
            <Link to={`/users/jobs/${business_string}`} className={`py-1.5 px-4 ${type==="job" ? "bg-blue text-white font-medium": "bg-[#F1F1F1]"}`}>Jobs</Link>
        </div>
        <select
          onChange={(e) => handleSwitch(e.target.value)}
          defaultValue={type}
            className='md:hidden placeholder:lg:block bg-[#F1F1F1] text-[#69707D] text-xs xs:text-sm lg:text-base py-1.5 px-4 rounded-sm border cursor-pointer outline-none'
            name="" id=""
          >
            <option className={`py-1.5 px-4  hover:bg-green hover:text-white cursor-pointer ${type==="business" ? "bg-green text-white font-medium": "bg-[#F1F1F1]"}`} value="business">Overview</option>
            <option  className={`py-1.5 px-4 ${type==="product" ? "bg-orange text-white font-medium": "bg-[#F1F1F1]"}`} value="product">Marketplace</option>
            <option className={`py-1.5 px-4 ${type==="job" ? "bg-blue text-white font-medium": "bg-[#F1F1F1]"}`} value="job">Jobs</option>
        </select>
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