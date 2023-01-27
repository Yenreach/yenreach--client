import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from "../../../components/layout/Dashboard"
import Business from '../../../assets/bus_of_the_week.svg'
import Elipse from '../../../assets/dashboard/elipse.svg'
import Add from '../../../assets/add.svg'
import NoBusiness from '../../../assets/dashboard/no-business.svg'

const index = () => {
    const [business, setBusiness] = React.useState(false)
    return (
        <Dashboard>
            <div className='flex-1'>
                <div className='p-4 px-3 bg-white'>
                    <h1 className='text-2xl text-[#69707D] font-medium'>
                        Dashboard
                    </h1>
                </div>
                <div className='px-7 py-4'>
                    <h1 className='text-green font-medium text-xl mb-2'>Businesses</h1>
                    {business && 
                        <>
                            <p className='text-[#476788] text-sm mb-7'>You have 3 businesses listed to your account.</p>
                            <div className='grid grid-container--fit gap-4 mb-16 justify-evenly'>
                                <div className='bg-[#F1F1F1] rounded-xl overflow-hidden'>
                                    <img src={Business} alt="" className="w-full object-cover h-40" />
                                    <div className='p-4 px-6'>
                                        <p className='font-semibold mb-1'>Pizzeria</p>
                                        <div className='flex gap-2 items-center text-[#777777] text-xsm'>
                                            <span>20-10-2022</span>
                                            <img src={Elipse} alt=""  />
                                            <span>234 visits</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#F1F1F1] rounded-xl overflow-hidden'>
                                    <img src={Business} alt="" className="w-full object-cover h-40" />
                                    <div className='p-4 px-6'>
                                        <p className='font-semibold mb-1'>Pizzeria</p>
                                        <div className='flex gap-2 items-center text-[#777777] text-xsm'>
                                        <span>20-10-2022</span>
                                        <img src={Elipse} alt=""  />
                                        <span>234 visits</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#F1F1F1] rounded-xl overflow-hidden'>
                                    <img src={Business} alt="" className="w-full object-cover h-40" />
                                    <div className='p-4 px-6'>
                                        <p className='font-semibold mb-1'>Pizzeria</p>
                                        <div className='flex gap-2 items-center text-[#777777] text-xsm'>
                                            <span>20-10-2022</span>
                                            <img src={Elipse} alt=""  />
                                            <span>234 visits</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
                {business && 
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
                }
                {!business  && 
                    <div className='flex flex-col justify-center items-center rounded-lg font-arialsans h-[550px] sm:h-auto'>
                        <img src={NoBusiness} alt="" className='mb-7' />
                        <span className='text-center text-[#476788] mb-9'>
                        You do not have any business listed yet
                        </span>
                        <span onClick={() => setBusiness(true)} href=""className='text-green underline underline-offset-2'>Click here to add a new business</span>
                    </div>
                }
            </div>
        </Dashboard>
    )
}

export default index