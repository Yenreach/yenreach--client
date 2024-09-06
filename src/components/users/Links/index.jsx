import React from 'react'
// import Logo from "/src/assets/logo.svg"
// import Logo2 from "../../../assets/yenreach.png"
import Logo3 from "../../../assets/yen-logo.png"
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
        <div className='flex flex-col justify-between h-screen pt-2 overflow-hidden bg-white'>
            <div>
                <Link to={"/"}>
                    {/* <img src={Logo} alt="" className='h-8 mb-12 md:h-8' /> */}
                    {/* <img src={Logo2} alt="" className='h-4 mx-auto my-2.5 mb-16 w-32 md:w-36 md:h-4.5' /> */}
                    <img src={Logo3} alt="" className='h-8 mx-auto md:my-3 md:w-40 w-36 md:h-9 mb-16' />

                </Link>
                <div className='flex flex-col gap-3 text-dark-light'>
                    <Link className={`${pathname!=="/users/profile" && pathname!=="/users/subscription" && pathname!=="/users/billboard" ? "font-medium text-white bg-green" : "opacity-50"} py-2.5 pl-6 text-sm flex items-center gap-2`} to="/users">
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