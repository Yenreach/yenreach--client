import React from 'react'
import Business from '../../assets/business.svg'
import Job from '../../assets/job.svg'
import Product from '../../assets/product.svg'
import Computer from '../../assets/computer.svg'

const index = () => {
  return (
    <section className='py-8 px-14 flex flex-col items-center gap-36'>
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
            <h2 className='text-25 text-color1 font-medium'>Recommended for you</h2>
            <div>
                <div>
                    <div>     
                        <div>    
                            <img src={Computer} alt="" />
                            <h6 className='text-sm font-medium'>Blossom boutique flower tsfdsfddfsdtfd</h6>
                        </div>
                        <ul className='flex items-center flex-wrap text-xsm list-disc pl-4 gap-4'>
                            <li>Unknown</li>
                            <li>Unknown</li>
                            <li>Unknown</li>
                            <li>Unknown</li>
                            <li>Unknown</li>
                            <li>Unknown</li>
                        </ul>
                    </div>
                    <button className='bg-color1 text-xs text-white rounded-xl flex items-center gap-0.5 py-2 px-10 font-semibold'>
                        view business
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default index