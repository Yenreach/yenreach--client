import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import Head from '../../../components/users/Head'
import DP from '../../../assets/dashboard/img.svg'
import ArrowDown from '../../../assets/arrow-down.svg'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"
const Jobs = () => {
  return (
    <Dashboard>
        <main className='flex-1'>
        <div className='p-3 px-3 lg:pr-20 xl:pr-36 bg-white flex items-center justify-between'>
            <div className='text-[#69707D]'>
                Business {'>'} Hard rock cafe
            </div>
            <div className='flex items-center gap-4 text-sm'>
              <Link to="/users/business" className='py-1.5 px-4 bg-green text-white font-medium'>Overview</Link>
              <Link to="/users/products" className='py-1.5 px-4 bg-[#F1F1F1]'>Marketplace</Link>
              <Link to="/users/jobs" className='py-1.5 px-4 bg-[#F1F1F1]'>Jobs</Link>
            </div>
            <div className='flex items-center gap-1'>
              <img src={DP} alt="" />
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <section className='p-8 px-4 sm:px-8'>
            <div className='flex items-center justify-between mb-3'>
                <h2 className='text-base font-medium'>Jobs Listed</h2>
                <Button variant='job' className='px-4 py-2 text-xs flex items-center'>
                    <AiOutlinePlus className='mr-2' />
                    Add new job
                </Button>
            </div>
          </section>

        </main>
    </Dashboard>
  )
}

export default Jobs