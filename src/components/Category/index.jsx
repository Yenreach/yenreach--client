import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '/src/hooks/useFetch'
import { apiGetApprovedBusinesses } from '../../services/CommonService'
import { apiGetAllProducts } from '/src/services/ProductService'
import { apiGetAllJobs } from '/src/services/JobService'
import { BiBriefcase, BiMouseAlt } from 'react-icons/bi'
import { MdOutlineHome } from 'react-icons/md'
import Button from '../ui/Button'
import BusinessCard, { BusinessCardLoading } from '../ui/BusinessCard'
import ProductCard from '../ui/ProductCard'
import JobCard from '../ui/JobCard'

const staleTime = 1000 * 60 * 60 * 24

const index = () => {
    const [activeTab, setActiveTab] = useState('business');
    
    const { data: aprrovedBusinesses, error: errorApprovedBusinesses, isLoading: approvedBusinessLoading } = useFetch({
        key: ['aprrovedBusinesses', 0],
        api: apiGetApprovedBusinesses,
        param: { page: 1, num_per_page: 4 },
        staleTime: staleTime,
    })

    const { data: products, error: errorProducts } = useFetch({
        key: ['products', 1],
        api: apiGetAllProducts,
        staleTime: staleTime,
    })

        
    const { data: jobs, error: errorJobs, isLoading } = useFetch({
        api: apiGetAllJobs,
        key: ['jobs', 1],
        staleTime: staleTime,
    })
  
          // console.log("aprrovedBusinesses", aprrovedBusinesses, "error", errorApprovedBusinesses)


  return (
    <section className='flex flex-col gap-8 px-4 py-8 md:px-10 lg:px-24 md:gap-20'>
        <div className='flex flex-col xs:items-center gap-4'>
            <h2 className='font-medium text-center text-lg text-green'>Browse by our recomended category</h2>
            <div className='bg-[#E9E9E9] py-2.5 px-2 rounded-md xs:px-2 sm:px-6 xs:rounded-full flex flex-col xs:flex-row xs:items-center justify-between gap-1 sm:gap-4 lg:gap-12 text-sm'>
                <Button onClickFunc={() => setActiveTab("business")} inverse={activeTab!=="business"}  className={`text-center rounded-full flex justify-center items-center gap-0.5 py-2 px-2 pr-6 md:px-10 md:pr-14 font-semibold ${activeTab==="business" && ""}`}>
                    <MdOutlineHome size="1.3rem" />
                    Business  
                </Button>
                <Button onClickFunc={() => setActiveTab("jobs")} variant='job' inverse={activeTab!=="jobs"} className={`text-center rounded-full flex justify-center items-center gap-0.5 py-2 px-2 pr-6 md:px-10 md:pr-14 font-semibold ${activeTab==="jobs" && ""}`}>
                    <BiBriefcase size="1.3rem" />
                    Jobs & Careers
                </Button>
                <Button onClickFunc={() => setActiveTab("marketplace")} variant='product' inverse={activeTab!=="marketplace"} className={`text-center rounded-full flex justify-center items-center gap-0.5 py-2 px-2 pr-6 md:px-10 md:pr-14 font-semibold ${activeTab==="marketplace" && ""}`}>
                    <BiMouseAlt size="1.3rem" />
                    Products Marketplace
                </Button>
            </div>
        </div>
        <div className='w-full'>
            <h2 className={`mb-2 font-medium text-center text-lg ${activeTab==="business"? "text-green" : activeTab==="jobs" ? "text-blue" : "text-orange"}`}>Recommended for you</h2>
            {/* flex items-center gap-6 flex-wrap  */}
            <div className='grid gap-6 grid-cols-bus1 sm:grid-cols-bus2 md:grid-cols-3 xl:grid-cols-bus4'>
                {activeTab === 'business' && (
                    (!approvedBusinessLoading && !errorApprovedBusinesses) ?  (
                        aprrovedBusinesses?.slice(0,4).map((business) => ( 
                            <BusinessCard key={business.id} business={business} />
                        ))
                    ) :
                    (
                        [0,1,2,3].map((business) => (
                            <BusinessCardLoading key={business} />
                        ))
                    )
                )}
                {activeTab === 'marketplace' && products &&  (
                    products?.slice(0,4).map((product) => <ProductCard key={product.id} product={product} />)
                )}
                {activeTab === 'jobs' && (
                     jobs?.slice(0,4).map((job) =>  <JobCard key={job.id} job={job} /> )
                )}
            </div>
            <Link to={activeTab === 'jobs' ? '/explore/jobs' : activeTab === 'marketplace' ? '/explore/products' : '/explore'} state={activeTab === 'marketplace' ? { data: "marketplace" } : activeTab === 'jobs' ? { data: "jobs" } : {}} >
                <Button override={true} className='w-full py-4 mt-6 text-black bg-gray-light'>
                    See More
                </Button>
            </Link>
        </div>
    </section>
  )
}

export default index