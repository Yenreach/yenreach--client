import React from 'react'
import { Link } from 'react-router-dom'
import Button from '/src/components/ui/Button';
import { useAuthContext } from "/src/hooks/useAuthContext"
import Logo from "../../../assets/logo.svg"
import Trend from "../../../assets/dashboard/trend.svg"
import Billboard from "../../../assets/dashboard/billboard.svg"
import Profile from "../../../assets/dashboard/profile.svg"
import Subscription from "../../../assets/dashboard/subscription.svg"
import Logout from "../../../assets/dashboard/logout.svg"


const index = () => {
    const { dispatch } = useAuthContext()

  return (
    <div className='hidden sm:flex flex-col justify-between bg-white h-screen w-52 border-r border-[#ABB4C4] pt-4'>
        <div>
            <img src={Logo} alt="" className='h-16 md:h-12 mb-12 mx-auto' />
            <div className='flex flex-col text-dark-light gap-3'>
                <Link className='py-2.5 pl-6 text-sm flex items-center gap-2 font-medium text-white bg-green' to="/users">
                    <img src={Trend} alt="" className='z-100' /> 
                    Business
                </Link>
                <Link className='py-2.5 pl-6 text-sm flex items-center gap-2 opacity-50' to={"/users/profile"}>
                    <img src={Profile} alt="" className='z-100' />
                    Profile
                </Link>
                <Link className='py-2.5 pl-6 text-sm flex items-center gap-2 opacity-50' to="">
                    <img src={Subscription} alt="" className='z-100' />
                    Subscription
                </Link>
                <Link className='py-2.5 pl-6 text-sm flex items-center gap-2 opacity-50' to="">
                    <img src={Billboard} alt="" className='z-100' />
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