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


const index = () => {
  const { user } = useAuthContext()
  
    const { isLoading, error, data: businesses } = useFetch({
        api: apiGetAllBusinesses,
        key: ['userBusinesses', user?.verify_string],
        param: user?.verify_string,
      })

    //   console.log("businesses", businesses)

    return (
        <Dashboard>
            <div className='flex-1 overflow-hidden'>
                {isLoading && <Loader loader={4} />}
                <Head />
                <div className='px-7 py-4'>
                    {!businesses && <h1 className='text-green font-medium text-lg mb-2'>Business</h1>}
                    {businesses && 
                        <>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between md:items-center mb-6'>
                            <div>
                                <h1 className='text-green font-medium text-lg mb-2'>Business</h1>
                                <p className='text-[#476788] text-sm mb-7'>You have {businesses?.length} {businesses.length > 1 ? "businesses" : "business"} listed to your account.</p>
                            </div>
                            <Link to="/users/add-business">
                                <Button className='py-1.5 px-2 pr-3 rounded-sm flex items-center'>
                                    <MdAdd size="1.3rem" color="#fff" className='mr-2' />
                                    Add new Business
                                </Button>
                            </Link>
                        </div>
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16'>
                                {businesses?.map(business => (
                                    <Link to={`/users/business/${business.verify_string}`} key={business?.verify_string} className='bg-white rounded overflow-hidden flex text-sm w-full'>
                                            <div>
                                                <img src={Business} alt="" className="w-20 object-cover h-20" />
                                            </div>
                                            <div className='p-4 px-6 relative'>
                                                <p className='font-semibold mb-1'>{business.name}</p>
                                                <div className='flex gap-2 items-center text-[#777777] text-xsm'>
                                                    <span>20-10-2022</span>
                                                    <img src={Elipse} alt=""  />
                                                    <span className='text-green font-medium'>234 visits</span>
                                                </div>
                                                <div className='absolute bottom-0 right-0 px-1 py-0.5 pr-2.5 flex text-xsm bg-green text-white'>
                                                    <MdStar color="orange" className='mr-1' />
                                                    4.5
                                                </div>
                                            </div>
                                    </Link>)
                                )}
                            </div>
                        </>
                    }
                </div>
                {/* {businesses && 
                    <Link to="/users/add-business" className='flex justify-center items-center mb-8'>
                        <div className='flex flex-col justify-center items-center p-14 bg-[#F1F1F1] rounded-lg'>
                        <span className='w-14 h-14 mb-4 rounded-full bg-[#CCCCCC] flex items-center justify-center'>
                            <img src={Add} alt="" />
                        </span>
                        <span className='text-sm w-2/3 text-center'>
                            Click here to add a new business
                        </span>
                        </div>
                    </Link>
                } */}
                {!isLoading && !businesses  && 
                    <div className='flex flex-col justify-center items-center rounded-lg font-arialsans h-[550px] sm:h-auto'>
                        <img src={NoBusiness} alt="" className='mb-7' />
                            <span className='text-center text-[#476788] mb-9'>
                            You do not have any business listed yet
                            </span>
                        <Link to="/users/add-business">   
                            <span href=""className='text-green underline underline-offset-2'>Click here to add a new business</span>
                        </Link>
                    </div>
                }
            </div>
        </Dashboard>
    )
}

export default index



// old business card
//     <Link to={`/users/business/${business.verify_string}`} key={business?.verify_string} className='bg-[#F1F1F1] rounded-xl overflow-hidden'>
//         <div>
//             <img src={Business} alt="" className="w-full object-cover h-40" />
//             <div className='p-4 px-6'>
//                 <p className='font-semibold mb-1'>{business.name}</p>
//                 <div className='flex gap-2 items-center text-[#777777] text-xsm'>
//                     <span>20-10-2022</span>
//                     <img src={Elipse} alt=""  />
//                     <span>234 visits</span>
//                 </div>
//             </div>
//         </div>