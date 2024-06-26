import React, { useState, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import Header from '/src/components/Header'
import Footer from '/src/components/Footer'
import Product from '/src/components/Product'
import Business from '/src/components/Business'
import Jobs from '/src/components/Jobs'
import ExploreNav from '/src/components/ExploreNav'
import ReactGA from "react-ga4";



const index = () => {
  ReactGA.send({ hitType: "pageview", page: "/explore", title: "Explore Page View" });

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
        <ExploreNav activeTab={activeTab} setActiveTab={setActiveTab} />
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