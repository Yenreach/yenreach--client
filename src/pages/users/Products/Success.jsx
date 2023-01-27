import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"


const index = () => {
  return (
    <Dashboard> 
        <div className='flex-1 overflow-hidden'>
            <Head />
            <section className='p-8 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-80'>
                <div className='flex justify-center items-center pt-20'>
                    <div className='flex flex-col justify-center items-center rounded-2xl font-arialsans p-20 bg-white'>
                    <span className='p-4 rounded-full border-4 mb-10 border-orange'>
                        <AiOutlineCheck size='40px' color='orange'  />
                    </span>
                    <p className='text-center text-lg mb-6'>
                    You have successfully added a new product to the marketplace under <span className='text-orange'>BUSINESS NAME</span> 
                    </p>
                    <a href=""className=''>Check the <a href="" className='text-orange text-sm underline underline-offset-2'>business page</a> to view your businesses</a>
                    </div>
                </div>
            </section>
        </div>
    </Dashboard>
    
  )
}

export default index