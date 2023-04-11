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

const staleTime = 1000 * 60 * 60 * 24

const index = ({ page, num_per_page }) => {
  const [tab, setTab] = useState(1)
  const [selectedJobIndex, setSelectedJobIndex] = useState(1)

    
  const { data: jobs, error: errorJobs, isLoading } = useFetch({
    api: apiGetAllJobs,
    key: ['jobs'],
    staleTime: staleTime,
  })
  
  // console.log("jobs", jobs)
  return (
    <>
      {isLoading && <Loader loader={4} />}
      <div className='flex items-center justify-center w-full gap-10'>
        <p className='font-medium text-black/70 text-xs md:text-sm'>Currently Exploring jobs in</p>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-light">
          <img src={Location} alt="location" />
          <span className='font-medium text-blue text-smm'>Bayelsa, Yenegoa</span>
        </div>
      </div>
      <SearchBar variant='job' />
      { tab === 1 
          ?  <AllJobs jobs={jobs} setTab={setTab} setSelectedJobIndex={setSelectedJobIndex} page={page} num_per_page={num_per_page} />
          : <div className="flex justify-around items-start gap-8 w-full sm:px-8">
              <JobSideBar jobs={jobs} selectedJobIndex={selectedJobIndex} setSelectedJobIndex={setSelectedJobIndex} />    
              <JobDescription job={jobs[selectedJobIndex]} />
            </div>
      }   
    </> 
  )
}

export default index