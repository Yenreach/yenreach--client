import React from 'react'
import Business from '../../assets/business.svg'
import Job from '../../assets/job.svg'
import Product from '../../assets/product.svg'
import Computer from '../../assets/computer.svg'

const index = () => {
  return (
    <section className='py-8 px-36 flex flex-col items-center gap-36'>
        <div className='flex flex-col gap-3'>
            <h2 className='text-25 text-center text-color1 font-medium'>Browse by our recomended category</h2>
            <div className='bg-[#E9E9E9] px-6 rounded-full py-2.5 flex items-center gap-12 text-sm'>
                <button className='bg-color1 text-white rounded-full flex items-center gap-0.5 py-2 px-10 font-semibold'>
                    <img src={Business} alt="" />
                    Businesses
                </button>
                <button className='text-color2 rounded-full flex items-center gap-0.5 py-2 px-10 font-semibold'>
                    <img src={Job} alt="" />
                    Jobs & Careers
                </button>
                <button className='text-color3 rounded-full flex items-center gap-0.5 py-2 px-10 font-semibold'>
                    <img src={Product} alt="" />
                    Products Marketplace
                </button>
            </div>
        </div>
        <div className='w-full'>
            <h2 className='text-25 text-color1 font-medium mb-2'>Recommended for you</h2>
            <div className='flex items-center gap-6 flex-wrap'>
                <div className='card w-68 py-2.5 px-2 h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2' />
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
                    <button className='w-full bg-color1 text-xs text-white rounded-xl flex justify-center items-center gap-0.5 py-2 px-10 font-semibold'>
                        view business
                    </button>
                </div>
                <div className='card w-68 py-2.5 px-2 h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2' />
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
                    <button className='w-full bg-color1 text-xs text-white rounded-xl flex justify-center items-center gap-0.5 py-2 px-10 font-semibold'>
                        view business
                    </button>
                </div>
                <div className='card w-68 py-2.5 px-2 h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2' />
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
                    <button className='w-full bg-color1 text-xs text-white rounded-xl flex justify-center items-center gap-0.5 py-2 px-10 font-semibold'>
                        view business
                    </button>
                </div>
                <div className='card w-68 py-2.5 px-2 h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2' />
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
                    <button className='w-full bg-color1 text-xs text-white rounded-xl flex justify-center items-center gap-0.5 py-2 px-10 font-semibold'>
                        view business
                    </button>
                </div>
            </div>
            <button className='w-full bg-[#F5F7FA] py-4 mt-2'>See More</button>
        </div>
    </section>
  )
}

export default index