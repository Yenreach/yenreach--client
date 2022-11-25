import React from 'react'
import Button from '../ui/Button'
import Business from '../../assets/business.svg'
import Job from '../../assets/job.svg'
import Product from '../../assets/product.svg'
import Computer from '../../assets/computer.svg'

const index = () => {
  return (
    <section className='py-8 px-4 md:px-10 lg:px-24 flex flex-col gap-16 md:gap-36'>
        <div className='flex flex-col gap-4 items-center'>
            <h2 className='text-25 text-center text-green font-medium'>Browse by our recomended category</h2>
            <div className='bg-[#E9E9E9] py-2.5 px-2 sm:px-6 rounded-full flex items-center justify-between gap-1 sm:gap-4 lg:gap-12 text-sm'>
                <Button className='rounded-full flex items-center gap-0.5 py-2 px-2 pr-6 md:px-10 md:pr-14 font-semibold'>
                    <img src={Business} alt="" />
                    Business  
                </Button>
                <Button variant='job' outlined={true} className=''>
                    <img src={Job} alt="" />
                    Jobs & Careers
                </Button>
                <Button variant='product' outlined={true} className=''>
                    <img src={Product} alt="" />
                    Products Marketplace
                </Button>
            </div>
        </div>
        <div className='w-full'>
            <h2 className='text-25 text-green font-medium mb-2 text-center'>Recommended for you</h2>
            {/* flex items-center gap-6 flex-wrap  */}
            <div className='grid grid-cols-bus1 sm:grid-cols-bus2 md:grid-cols-3 lg:grid-cols-bus3'>
                <div className='card w-full py-2.5 px-2 h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2 w-full object-cover rounded-xl' />
                        <h6 className='text-sm font-medium h-11 mb-2 overflow-hidden'>Blossom boutique flower tsfdsfddfsdtfdl</h6>
                        <ul className='flex items-center flex-wrap text-xsm list-disc pl-4 gap-4 h-9 overflow-hidden pb-12'>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                        </ul>
                    </div>
                    <Button className='w-full text-xs rounded-xl py-2 px-4 font-semibold'>
                        view business
                    </Button>
                </div>
                <div className='card w-full py-2.5 px-2 h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2 w-full object-cover rounded-xl' />
                        <h6 className='text-sm font-medium h-11 mb-2 overflow-hidden'>Blossom boutique flower tsfdsfddfsdtfdl</h6>
                        <ul className='flex items-center flex-wrap text-xsm list-disc pl-4 gap-4 h-9 overflow-hidden pb-12'>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                        </ul>
                    </div>
                    <Button className='w-full text-xs rounded-xl py-2 px-4 font-semibold'>
                        view business
                    </Button>
                </div>
                <div className='card w-full py-2.5 px-2 h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2 w-full object-cover rounded-xl' />
                        <h6 className='text-sm font-medium h-11 mb-2 overflow-hidden'>Blossom boutique flower tsfdsfddfsdtfdl</h6>
                        <ul className='flex items-center flex-wrap text-xsm list-disc pl-4 gap-4 h-9 overflow-hidden pb-12'>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                        </ul>
                    </div>
                    <Button className='w-full text-xs rounded-xl py-2 px-4 font-semibold'>
                        view business
                    </Button>
                </div>
                <div className='card w-full py-2.5 px-2 h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2 w-full object-cover rounded-xl' />
                        <h6 className='text-sm font-medium h-11 mb-2 overflow-hidden'>Blossom boutique flower tsfdsfddfsdtfdl</h6>
                        <ul className='flex items-center flex-wrap text-xsm list-disc pl-4 gap-4 h-9 overflow-hidden pb-12'>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                        </ul>
                    </div>
                    <Button className='w-full text-xs rounded-xl py-2 px-4 font-semibold'>
                        view business
                    </Button>
                </div>
            </div>
            <Button override={true} className='w-full bg-gray-light py-4 mt-2 text-black'>
                See More
            </Button>
        </div>
    </section>
  )
}

export default index