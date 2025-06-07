import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '/src/components/Header'
import Footer from '/src/components/Footer'
import ExploreNav from '/src/components/ExploreNav'
import useFetch from '/src/hooks/useFetch'
import { apiGetAllJobs } from '/src/services/JobService'
import Location from '/src/assets/location.svg'
import AllJobs from '/src/components/Jobs/AllJobs'
import JobDescription from '/src/components/Jobs/JobDescription'
import JobSideBar from '/src/components/Jobs/JobSideBar'
import Loader from '/src/components/Loader'
import Button from '/src/components/ui/Button'
import Input from '/src/components/ui/Input'
import Search from '/src/assets/search.svg'
import ReactGA from "react-ga4";
import SEO from '../../../components/SEO'


const ExploreJobs = () => {
  ReactGA.send({ hitType: "pageview", page: "/explore/jobs", title: "Explore Jobs View" });

  const [activeTab, setActiveTab] = useState('business');
//   const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const num_per_page = 40

  const [page, setPage] = useState(searchParams.get('page') || 1)
  const [tab, setTab] = useState(1)
  const [selectedJobIndex, setSelectedJobIndex] = useState(1)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("")
  const [location, setLocation] = useState("")
  const [exploring, setExploring] = useState('')
  const [useFilter, setUseFilter] = useState(false)

  // const handleFilter = (e) => {
  //   e.preventDefault()
  //   // console.log("SEARCHING", search)
  //   setFilteredJobsLoading(true)
  //   const value = search
  //   const filtered = jobs?.filter((item) => {
  //     if (!item?.location?.toLowerCase()?.includes(location?.toLowerCase())) {
  //       return false;
  //     }
  //     return Object.keys(item).some((key) => {
  //       if (Array.isArray(item[key])) {
  //           const filtered = item[key]?.filter((item) => {
  //             return Object.keys(item).some((key) => {
  //               return item[key]?.toString().toLowerCase().includes(value?.toLowerCase());
  //             });
  //           });
  //       }
  //       return item[key]?.toString().toLowerCase().includes(value?.toLowerCase());
  //     });
  //   });
  //   setFilteredJobsLoading(false)
  //   setFilteredJobs(filtered);
    
  //   if (tab !== 1) {
  //     setTab(1)
  //   }

  //   if (!useFilter) {
  //     setUseFilter(true)
  //   }
  //   setExploring(location)
  // };


    
  const { data: jobs, error: errorJobs, isLoading, isFetching, isPreviousData } = useFetch({
    api: apiGetAllJobs,
    param: { page, num_per_page, search: filter },
    key: ['jobs', page, filter],
  })

  // console.log({ jobs })

  const handleFilterChange = (e) => {
    e.preventDefault()
    setFilter(search)
  }


  
//   useEffect(() => {
//     if (location.state?.data === 'jobs') {
//       setActiveTab('jobs')
//     } else if (location.state?.data === 'marketplace') {
//       setActiveTab('marketplace')
//     } else {
//       setActiveTab('business')
//     }
//   }, [location])

  return (
    <div className='relative w-full'>
        <SEO
          title="Explore Jobs - Yenreach"
          description="Find job opportunities across various industries and locations on Yenreach. Browse listings, filter by category, and apply for your next job."
          name="Yenreach"
          type="jobs"
        />
        <Header />
        <ExploreNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-col items-center justify-center gap-4 px-5 py-5 md:py-5 md:px-5 lg:py-20 lg:px-20 mt-12 md:mt-20 lg:mt-4">
        <>
        {(isLoading || (isPreviousData && isFetching)) && <Loader loader={4} />}
          <div className='flex items-center justify-center w-full gap-10'>
            <p className='text-xs font-medium text-black/70 md:text-sm'>Currently Exploring jobs in</p>
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-light">
              <img src={Location} alt="location" />
              <span className='font-medium text-blue text-smm'>{exploring || 'Bayelsa, Yenegoa'}</span>
            </div>
          </div>
          <form action="" onSubmit={handleFilterChange} method="post" className='flex'>
            <Input onChange={(e) => setSearch(e.target.value)} value={search} variant='job' type="text" name="job" id="job" placeholder='job' className='rounded-tl-md rounded-bl-md' />
            <Input onChange={(e) => setLocation(e.target.value)} value={location} variant='job' type="text" name="location" id="location" placeholder='location' className='border-l-0 border-r-0' />
            <Button type="submit" variant='job' className='px-4 py-4 rounded-tr-md rounded-br-md'>
              <img src={Search} alt="search icon" className='w-12' />
            </Button>
          </form>
          { tab === 1 
              ?  <AllJobs jobs={jobs?.data} setTab={setTab} setSelectedJobIndex={setSelectedJobIndex} page={page} setPage={setPage} num_per_page={num_per_page} total={jobs?.total} />
              : <div className="flex items-start justify-around w-full gap-8 sm:px-8">
                  <JobSideBar jobs={jobs?.data} selectedJobIndex={selectedJobIndex} setSelectedJobIndex={setSelectedJobIndex} page={page} setPage={setPage} total={jobs?.total} />    
                  <JobDescription job={(useFilter ? filteredJobs : jobs?.data)[selectedJobIndex]} page={page} setPage={setPage} />
                </div>
          }   
        </> 
        </div>
        <Footer />
    </div>
  )
}   

export default ExploreJobs