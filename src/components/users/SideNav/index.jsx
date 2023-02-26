import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdTrendingUp, MdPersonOutline } from 'react-icons/md'
import { RiBillLine, RiAdvertisementLine } from 'react-icons/ri'
import Button from '/src/components/ui/Button';
import { useAuthContext } from "/src/hooks/useAuthContext"
import Logo from "../../../assets/logo.svg"
import Logout from "../../../assets/dashboard/logout.svg"


const index = () => {
    const { dispatch } = useAuthContext()
    const { pathname, ...k } = useLocation()
    console.log("path", pathname, k)

  return (
    <div className='hidden sm:flex flex-col justify-between bg-white h-screen w-52 border-r border-[#ABB4C4] pt-4 overflow-hidden'>
        <div>
            <img src={Logo} alt="" className='h-16 md:h-12 mb-12 mx-auto' />
            <div className='flex flex-col text-dark-light gap-3'>
                <Link className={`${pathname!=="/users/profile" && pathname!=="/users/subscription" && pathname!=="/users/billboard" ? "font-medium text-white bg-green" : "opacity-50"} py-2.5 pl-6 text-sm flex items-center gap-2`} to="/users">
                    {/* <img src={Trend} alt="" className='z-100' />  */}
                    <span className='w-4 h-4 bg-white flex justify-center items-center rounded border'>
                        <MdTrendingUp color='#000000' size={"0.6rem"} />
                    </span> 
                    Business
                </Link>
                <Link className={`${pathname==="/users/profile" ? "font-medium text-white bg-green" : "opacity-50"} py-2.5 pl-6 text-sm flex items-center gap-2`} to={"/users/profile"}>
                    <span className='w-4 h-4 bg-white flex justify-center items-center rounded border'>
                        <MdPersonOutline color={`${pathname==="/users/profile" ? "#000000" : ""}`} size={"0.8rem"} />
                    </span> 
                    Profile
                </Link>
                <Link className={`${pathname==="/users/subscription" ? "font-medium text-white bg-green" : "opacity-50"} py-2.5 pl-6 text-sm flex items-center gap-2`} to={"/users/subscription"}>
                    <RiBillLine color={`${pathname==="/users/subscription" ? "#ffffff" : ""}`} size={"1.3rem"} />
                    Subscription
                </Link>
                <Link className={`${pathname==="/users/billboard" ? "font-medium text-white bg-green" : "opacity-50"} py-2.5 pl-6 text-sm flex items-center gap-2`} to={"/users/billboard"}>
                    <RiAdvertisementLine color={`${pathname==="/users/billboard" ? "#ffffff" : ""}`} size={"1.3rem"} />
                    Yenreach Billboard
                </Link>
            </div>
        </div>
        <div onClick={() => dispatch({type: "LOGOUT"})} className='py-2.5 pl-6 flex items-center gap-2 text-[#EB4335] w-full cursor-pointer'>
            <img src={Logout} alt="" className='z-100' />
            Logout
        </div>
    </div>
  )
}

export default index