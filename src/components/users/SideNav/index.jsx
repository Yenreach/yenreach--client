import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuthContext } from "/src/hooks/useAuthContext"
import { MdTrendingUp, MdPersonOutline } from 'react-icons/md'
import { RiBillLine, RiAdvertisementLine } from 'react-icons/ri'
import Button from '/src/components/ui/Button';
// import Logo from "../../../assets/logo.svg"
// import Logo2 from "../../../assets/yenreach.png"
import Logo3 from "../../../assets/yen-logo.png"
import Logout from "../../../assets/dashboard/logout.svg"


const SideNav = ({ id }) => {
    const { dispatch } = useAuthContext()
    const { pathname, ...k } = useLocation()
    // console.log("path", pathname, k)

  return (
    <div className='hidden sm:flex flex-col justify-between bg-white h-screen min-w-[200px] w-52 border-r border-[#ABB4C4] pt-4 pb-6 overflow-hidden'>
        <div>
             <Link to={"/"}>
                {/* <img src={Logo} alt="" className='h-16 mx-auto mb-12 md:h-12' /> */}
                {/* <img src={Logo2} alt="" className='h-4 mx-auto my-3 mb-16 w-28 md:w-36 md:h-4.5' /> */}
                <img src={Logo3} alt="" className='h-5 mx-auto md:w-32 w-24 md:h-9 mb-16' />
            </Link>
            <div className='flex flex-col gap-3 text-dark-light'>
                <Link className={`${pathname!=="/users/profile" && !pathname.includes("/users/subscription") && pathname!=="/users/billboard" ? "font-medium text-white bg-green" : "opacity-50"} py-2.5 pl-6 text-sm flex items-center gap-2`} to="/users">
                    {/* <img src={Trend} alt="" className='z-100' />  */}
                    <span className='flex items-center justify-center w-4 h-4 bg-white border rounded'>
                        <MdTrendingUp color='#000000' size={"0.6rem"} />
                    </span> 
                    Business
                </Link>
                <Link className={`${pathname==="/users/profile" ? "font-medium text-white bg-green" : "opacity-50"} py-2.5 pl-6 text-sm flex items-center gap-2`} to={"/users/profile"}>
                    <span className='flex items-center justify-center w-4 h-4 bg-white border rounded'>
                        <MdPersonOutline color={`${pathname==="/users/profile" ? "#000000" : ""}`} size={"0.8rem"} />
                    </span> 
                    Profile
                </Link>
                {id && 
                    <Link className={`${pathname.includes("/users/subscription") ? "font-medium text-white bg-green" : "opacity-50"} py-2.5 pl-6 text-sm flex items-center gap-2`} to={`/users/subscription/${id}`}>
                    <RiBillLine color={`${pathname.includes("/users/subscription") ? "#ffffff" : ""}`} size={"1.3rem"} />
                    Subscription
                </Link>}
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

export default SideNav