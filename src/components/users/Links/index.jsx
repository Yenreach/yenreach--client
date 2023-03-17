import React from 'react'
import Logo from "/src/assets/logo.svg"
import { MdTrendingUp, MdPersonOutline } from 'react-icons/md'
import { RiBillLine, RiAdvertisementLine } from 'react-icons/ri'
import Logout from "/src/assets/dashboard/logout.svg"
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import { useAuthContext } from "/src/hooks/useAuthContext"

const Links = ({isOpen}) => {
    const { id } = useParams()
    const { dispatch } = useAuthContext()
    const { pathname, ...k } = useLocation()
  return (
    <div className={`md:hidden shadow fixed top-0 right-0 w-5/6 min-h-screen h-screen bg-white px-4  py-2 md:px-10 z-30 translate-x-full ${isOpen && "translate-x-0"} transition-all duration-300`}>
        <div className='flex flex-col justify-between bg-white h-screen pt-2 overflow-hidden'>
            <div>
                <Link to={"/"}>
                    <img src={Logo} alt="" className='h-8 md:h-8 mb-12' />
                </Link>
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
                    {
                        id && (
                        <Link className={`${pathname==="/users/subscription" ? "font-medium text-white bg-green" : "opacity-50"} py-2.5 pl-6 text-sm flex items-center gap-2`} to={`/users/subscription/${id}`}>
                            <RiBillLine color={`${pathname==="/users/subscription" ? "#ffffff" : ""}`} size={"1.3rem"} />
                            Subscription
                        </Link>
                        )
                    }
                    <Link className={`${pathname==="/users/billboard" ? "font-medium text-white bg-green" : "opacity-50"} py-2.5 pl-6 text-sm flex items-center gap-2`} to={"/users/billboard"}>
                        <RiAdvertisementLine color={`${pathname==="/users/billboard" ? "#ffffff" : ""}`} size={"1.3rem"} />
                        Yenreach Billboard
                    </Link>
                </div>
            </div>
            <div onClick={() => dispatch({type: "LOGOUT"})} className='py-2.5 pl-6 mb-8 flex items-center gap-2 text-[#EB4335] w-full cursor-pointer'>
                <img src={Logout} alt="" className='z-100' />
                Logout
            </div>
        </div>
    </div>
  )
}

export default Links