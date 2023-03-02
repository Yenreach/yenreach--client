import React, { useState } from 'react'
import { MdOutlineHome } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { apiGetApprovedBusinesses } from '../../services/CommonService'
import getData from '../../utils/getData'
import { BiBriefcase, BiMouseAlt } from 'react-icons/bi'
// import JobData from '../../data/job-data.json'
import Button from '../ui/Button'
import Business from '../../assets/business.svg'
import Job from '../../assets/job.svg'
import Product from '../../assets/product.svg'
import BusinessCard from '../ui/BusinessCard'
import ProductCard from '../ui/ProductCard'
import JobCard from '../ui/JobCard'

const index = () => {
    const [activeTab, setActiveTab] = useState('business');
    // console.log(activeTab)
    const { data: aprrovedBusinesses, error: errorApprovedBusinesses } = useQuery({
        queryKey: ['aprrovedBusinesses'],
        queryFn: () => getData(apiGetApprovedBusinesses),
        })
          // console.log("aprrovedBusinesses", aprrovedBusinesses, "error", errorApprovedBusinesses)


  return (
    <section className='flex flex-col gap-8 px-4 py-8 md:px-10 lg:px-24 md:gap-20'>
        <div className='flex flex-col items-center gap-4'>
            <h2 className='font-medium text-center text-25 text-green'>Browse by our recomended category</h2>
            <div className='bg-[#E9E9E9] py-2.5 px-2 sm:px-6 rounded-full flex items-center justify-between gap-1 sm:gap-4 lg:gap-12 text-sm'>
                <Button onClickFunc={() => setActiveTab("business")} inverse={activeTab!=="business"}  className={`rounded-full flex items-center gap-0.5 py-2 px-2 pr-6 md:px-10 md:pr-14 font-semibold ${activeTab==="business" && ""}`}>
                    <MdOutlineHome size="1.3rem" />
                    Business  
                </Button>
                <Button onClickFunc={() => setActiveTab("jobs")} variant='job' inverse={activeTab!=="jobs"} className={`rounded-full flex items-center gap-0.5 py-2 px-2 pr-6 md:px-10 md:pr-14 font-semibold ${activeTab==="jobs" && ""}`}>
                    <BiBriefcase size="1.3rem" />
                    Jobs & Careers
                </Button>
                <Button onClickFunc={() => setActiveTab("marketplace")} variant='product' inverse={activeTab!=="marketplace"} className={`rounded-full flex items-center gap-0.5 py-2 px-2 pr-6 md:px-10 md:pr-14 font-semibold ${activeTab==="marketplace" && ""}`}>
                    <BiMouseAlt size="1.3rem" />
                    Products Marketplace
                </Button>
            </div>
        </div>
        <div className='w-full'>
            <h2 className={`mb-2 font-medium text-center text-25 ${activeTab==="business"? "text-green" : activeTab==="jobs" ? "text-blue" : "text-orange"}`}>Recommended for you</h2>
            {/* flex items-center gap-6 flex-wrap  */}
            <div className='grid gap-6 grid-cols-bus1 sm:grid-cols-bus2 md:grid-cols-3 xl:grid-cols-bus4'>
                {activeTab === 'business' && aprrovedBusinesses &&  (
                    aprrovedBusinesses?.slice(0,4).map((business) => ( <BusinessCard key={business.id} business={business} />
                    ))
                )}
                {activeTab === 'marketplace' && (
                <>       
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </>)}
                {activeTab === 'jobs' && (
                <>       
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </>)}
            </div>
            <Link to="/explore" state={activeTab === 'marketplace' ? { data: "marketplace" } : activeTab === 'jobs' ? { data: "jobs" } : {}} >
                <Button override={true} className='w-full py-4 mt-6 text-black bg-gray-light'>
                    See More
                </Button>
            </Link>
        </div>
    </section>
  )
}

export default index