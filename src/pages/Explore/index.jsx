import React, { useState, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Product from '../../components/Product'
import Business from '../../components/Business'
import Jobs from '../../components/Jobs'
import BusinessIcon from '../../assets/businesses/business.svg'
import JobIcon from '../../assets/jobs/job.svg'
import ProductIcon from '../../assets/products/product.svg'
import BusinessActive from '../../assets/businesses/business-active.svg'
import JobActive from '../../assets/jobs/job-active.svg'
import ProductActive from '../../assets/products/product-active.svg'



const index = () => {
  const [activeTab, setActiveTab] = useState('business');
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || 1
  const num_per_page = 40

  
  useEffect(() => {
    if (location.state?.data === 'jobs') {
      setActiveTab('jobs')
    } else if (location.state?.data === 'marketplace') {
      setActiveTab('marketplace')
    } else {
      setActiveTab('business')
    }
  }, [location])

  return (
    <div className='relative w-full'>
        <Header />
        <div className="top tab flex px-4 py-6 md:px-28 gap-3 md:gap-8 shadow-md border-t border-gray-light sticky z-20 top-[48px] md:top-[88px] bg-white">
            { activeTab == 'business' ?
              <div className="flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer after:content-[''] after:bg-green after:absolute after:h-[0.15rem] after:w-full after:-bottom-2" onClick={() => setActiveTab('business')}>
                <img className='h-3 xs:h-4 md:h-5' src={BusinessActive} alt="" />
                <span className='text-xs md:text-sm font-medium text-green'>Business</span>
              </div> :
              <div className="flex items-center justify-start gap-1 business md:marker:gap-3 hover:cursor-pointer" onClick={() => setActiveTab('business')}>
                <img className='h-3 xs:h-4 md:h-5' src={BusinessIcon} alt="" />
                <span className='text-xs md:text-sm font-medium text-gray'>Business</span>
              </div>
            }
            { activeTab == 'jobs' ?
              <div className="flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer after:content-[''] after:bg-blue after:absolute after:h-[0.15rem] after:w-full after:-bottom-2" onClick={() => setActiveTab('jobs')}>
                <img className='h-3 xs:h-4 md:h-5' src={JobActive} alt="" />
                <span className='text-xs md:text-sm font-medium text-blue'>Jobs & Careers</span>
              </div> :
              <div className="flex items-center justify-start gap-1 business md:marker:gap-3 hover:cursor-pointer" onClick={() => setActiveTab('jobs')}>
                <img className='h-3 xs:h-4 md:h-5' src={JobIcon} alt="" />
                <span className='text-xs md:text-sm font-medium text-gray'>Jobs & Careers</span>
              </div>
            }
            {
              activeTab == 'marketplace' ?
              <div className="flex items-center justify-start gap-1 business md:marker:gap-3 relative hover:cursor-pointer after:content-[''] after:bg-orange after:absolute after:h-[0.15rem] after:w-full after:-bottom-2" onClick={() => setActiveTab('marketplace')}>
                <img className='w-full' src={ProductActive} alt="" />
                <span className='text-xs md:text-sm font-medium text-orange'>Marketplace</span>
              </div> :
              <div className="flex items-center justify-start gap-1 business md:marker:gap-3 hover:cursor-pointer" onClick={() => setActiveTab('marketplace')}>
                <img className='h-3 xs:h-4 md:h-5' src={ProductIcon} alt="" />
                <span className='text-xs md:text-sm font-medium text-gray'>Marketplace</span>
              </div>
            }
        </div>

        <div className="flex flex-col items-center justify-center gap-4 px-5 py-5 md:py-5 md:px-5 lg:py-20 lg:px-20">
          { activeTab == 'business' ? <Business page={page} num_per_page={num_per_page} /> 
          : activeTab == 'jobs' ? <Jobs page={page} num_per_page={num_per_page} />
          : activeTab == 'marketplace' ? <Product page={page} num_per_page={num_per_page} /> 
          : null}
          {/* { activeTab == 'marketplace' && <Product /> }
          { activeTab == 'jobs' && <Jobs /> } */}
        </div>
        <Footer />
    </div>
  )
}   

export default index