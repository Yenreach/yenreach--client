import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '/src/hooks/useFetch'
import { apiGetAllBusinesses } from '/src/services/UserService'
import Button from '/src/components/ui/Button'
import { MdAdd, MdStar } from 'react-icons/md'
import Dashboard from "../../../components/layout/Dashboard"
import Head from "/src/components/users/Head"
import Loader from '../../../components/Loader'
import Business from '../../../assets/bus_of_the_week.svg'
import Elipse from '../../../assets/dashboard/elipse.svg'
import NoBusiness from '../../../assets/dashboard/no-business.svg'
import { useAuthContext } from '/src/hooks/useAuthContext'
import Image from '../../../components/Image'
import { expired, formatDate2 } from '/src/utils/dateFunc'
import ReactGA from "react-ga4";



const index = () => {
  ReactGA.send({ hitType: "pageview", page: "/users", title: "User Page" });

  const { user } = useAuthContext()
  
    const { isLoading, error, data: businesses } = useFetch({
        api: apiGetAllBusinesses,
        key: ['userBusinesses', user?.id],
        param: { id: user?.id }
      })

    //   console.log("businesses", businesses)

    return (
        <Dashboard>
            {isLoading && <Loader loader={4} />}
            <div className='flex-1 overflow-hidden overflow-y-auto min-h-[calc(100vh-400px)]'>
                <Head />
                <div className='py-4 px-7 h-full flex flex-col'>
                    {!businesses?.data?.length ? 
                    <>
                        <h1 className='mb-2 text-lg font-medium text-green'>Business</h1>
                        {!isLoading && !businesses?.data?.length  && 
                            <div className='flex flex-col justify-center items-center rounded-lg font-arialsans min-h-[550px] sm:h-auto flex-1'>
                                <img src={NoBusiness} alt="" className='mb-7' />
                                    <span className='text-center text-[#476788] mb-9'>
                                    You do not have any business listed yet
                                    </span>
                                <Link to="/users/add-business">   
                                    <span href=""className='underline text-green underline-offset-2'>Click here to add a new business</span>
                                </Link>
                            </div>
                        }
                    </>
                        :
                        <>
                            <div className='flex flex-col justify-between gap-2 mb-6 md:flex-row md:gap-4 md:items-center'>
                                <div>
                                    <h1 className='mb-2 text-lg font-medium text-green'>Business</h1>
                                    <p className='text-[#476788] text-sm mb-7'>You have {businesses?.data?.length} {businesses.length > 1 ? "businesses" : "business"} listed to your account.</p>
                                </div>
                                <Link to="/users/add-business">
                                    <Button className='py-1.5 px-2 pr-3 rounded-sm flex items-center'>
                                        <MdAdd size="1.3rem" color="#fff" className='mr-2' />
                                        Add new Business
                                    </Button>
                                </Link>
                            </div>
                            <div className='grid gap-4 mb-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {businesses?.data?.map(business => (
                                    <Link to={business?.registrationStatus == 'approved' ? `/users/business/${business.id}`
                                    : `/users/edit-business/${business.id}`} key={business?.id} className='flex w-full p-2 overflow-hidden text-sm bg-white rounded shadow'>
                                            <div>
                                                <Image url={business?.profileImg} name={business?.name} className="object-cover w-20 h-20" />
                                            </div>
                                            <div className='relative w-full p-4 px-6'>
                                                <p className='mb-1 font-semibold'>{business.name}</p>
                                                <div className='flex gap-2 items-center text-[#777777] text-xsm'>
                                                    <span>{formatDate2(business?.createdAt)}</span>
                                                    <img src={Elipse} alt=""  />
                                                    <span className='font-medium text-green'>{business?.pagevisits || 0} visits</span>
                                                </div>
                                                <div className='absolute bottom-0 right-0 px-1 py-0.5 pt-1 flex text-xsm bg-green text-white'>
                                                    {business?.registrationStatus}
                                                </div>
                                            </div>
                                    </Link>)
                                )}
                            </div>
                        </>
                    }
                </div>
           
            </div>
        </Dashboard>
    )
}

export default index



// old business card
//     <Link to={`/users/business/${business.id}`} key={business?.id} className='bg-[#F1F1F1] rounded-xl overflow-hidden'>
//         <div>
//             <img src={Business} alt="" className="object-cover w-full h-40" />
//             <div className='p-4 px-6'>
//                 <p className='mb-1 font-semibold'>{business.name}</p>
//                 <div className='flex gap-2 items-center text-[#777777] text-xsm'>
//                     <span>20-10-2025</span>
//                     <img src={Elipse} alt=""  />
//                     <span>234 visits</span>
//                 </div>
//             </div>
//         </div>