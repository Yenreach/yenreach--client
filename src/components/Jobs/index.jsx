import React, { useState } from 'react'
import useFetch from '/src/hooks/useFetch'
import { apiGetAllJobs } from '../../services/JobService'
import SearchBar from '../ui/SearchBar'
import Location from '../../assets/location.svg'
import JobData from '../../data/job-data.json'
import AllJobs from './AllJobs'
import JobDescription from './JobDescription'
import JobSideBar from './JobSideBar'
import { paginate } from '../../utils/pagination'

const staleTime = 1000 * 60 * 60 * 24

const index = ({ page: initialPage, num_per_page }) => {
  const [page, setPage] = useState(initialPage || 1)
  const [tab, setTab] = useState(1)
  const [selectedJobIndex, setSelectedJobIndex] = useState(1)

    
  const { data: jobs, error: errorJobs, isLoading } = useFetch({
    api: apiGetAllJobs,
    key: ['jobs'],
    staleTime: staleTime,
  })
  
  const handlePageChange = (page) => {
    setPage(page)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }

  console.log("jobs", jobs)
  return (
    <>
      <div className='flex items-center justify-center w-full gap-10'>
        <p className='font-medium text-smm'>Currently Exploring businesses in</p>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-light">
          <img src={Location} alt="location" />
          <span className='font-medium text-blue text-smm'>Bayelsa, Yenegoa</span>
        </div>
      </div>
      <SearchBar variant='job' />
      { tab === 1 
          ?  <AllJobs jobs={jobs} setTab={setTab} setSelectedJobIndex={setSelectedJobIndex}/>
          : <div className="flex justify-around items-start gap-8">
              <JobSideBar jobs={jobs} selectedJobIndex={selectedJobIndex} setSelectedJobIndex={setSelectedJobIndex} />    
              <JobDescription job={jobs[selectedJobIndex]} />
            </div>
      }   
    </> 
  )
}

export default index