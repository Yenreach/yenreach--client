import React, { useState } from 'react'
import useFetch from '/src/hooks/useFetch'
import { apiGetAllJobs } from '../../services/JobService'
import SearchBar from '../ui/SearchBar'
import Location from '../../assets/location.svg'
import JobData from '../../data/job-data.json'
import AllJobs from './AllJobs'
import JobDescription from './JobDescription'
import JobSideBar from './JobSideBar'
import Loader from '../Loader'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Search from '/src/assets/search.svg'


const index = ({ page, num_per_page }) => {
  const [tab, setTab] = useState(1)
  const [selectedJobIndex, setSelectedJobIndex] = useState(1)
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")
  const [useFilter, setUseFilter] = useState(false)
  const [filteredJobs, setFilteredJobs] = useState([])
  const [filteredJobsLoading, setFilteredJobsLoading] = useState(false)

  const handleFilter = (e) => {
    e.preventDefault()
    // console.log("SEARCHING", search)
    setFilteredJobsLoading(true)
    const value = search
    const filtered = jobs?.filter((item) => {
      return Object.keys(item).some((key) => {
        if (Array.isArray(item[key])) {
            const filtered = item[key]?.filter((item) => {
              return Object.keys(item).some((key) => {
                return item[key]?.toString().toLowerCase().includes(value?.toLowerCase());
              });
            });
        }
        return item[key]?.toString().toLowerCase().includes(value?.toLowerCase());
      });
    });
    setFilteredJobsLoading(false)
    setFilteredJobs(filtered);
    
    if (tab !== 1) {
      setTab(1)
    }

    if (!useFilter) {
      setUseFilter(true)
    }
  };


    
  const { data: jobs, error: errorJobs, isLoading } = useFetch({
    api: apiGetAllJobs,
    key: ['jobs'],
  })
  
  console.log("jobs", jobs)
  return (
    <>
      {(isLoading || filteredJobsLoading) && <Loader loader={4} />}
      <div className='flex items-center justify-center w-full gap-10'>
        <p className='font-medium text-black/70 text-xs md:text-sm'>Currently Exploring jobs in</p>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-light">
          <img src={Location} alt="location" />
          <span className='font-medium text-blue text-smm'>Bayelsa, Yenegoa</span>
        </div>
      </div>
      <form action="" onSubmit={handleFilter} method="post" className='flex'>
        <Input onChange={(e) => setSearch(e.target.value)} value={search} variant='job' type="text" name="job" id="job" placeholder='job' className='rounded-tl-md rounded-bl-md' />
        <Input onChange={(e) => setLocation(e.target.value)} value={location} variant='job' type="text" name="location" id="location" placeholder='location' className='border-l-0 border-r-0' />
        <Button type="submit" variant='job' className='px-4 py-4 rounded-tr-md rounded-br-md'>
          <img src={Search} alt="search icon" className='w-12' />
        </Button>
		  </form>
      { tab === 1 
          ?  <AllJobs jobs={useFilter ? filteredJobs : jobs} setTab={setTab} setSelectedJobIndex={setSelectedJobIndex} page={page} num_per_page={num_per_page} />
          : <div className="flex justify-around items-start gap-8 w-full sm:px-8">
              <JobSideBar jobs={useFilter ? filteredJobs : jobs} selectedJobIndex={selectedJobIndex} setSelectedJobIndex={setSelectedJobIndex} />    
              <JobDescription job={(useFilter ? filteredJobs : jobs)[selectedJobIndex]} />
            </div>
      }   
    </> 
  )
}

export default index