import React from 'react'

import SearchBar from '../ui/SearchBar'
import Location from '../../assets/location.svg'
import JobData from '../../data/job-data.json'
import AllJobs from './AllJobs'
import JobDescription from './JobDescription'
import JobSideBar from './JobSideBar'
import { useState } from 'react'

const index = () => {
  const [tab, setTab] = useState(1)
  const [selectedJobIndex, setSelectedJobIndex] = useState(1)
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
      { tab === 1 ? <AllJobs jobs={JobData} setTab={setTab} setSelectedJobIndex={setSelectedJobIndex}/>
      : <div className="flex justify-around items-start">
          <JobSideBar jobs={JobData} selectedJobIndex={selectedJobIndex} setSelectedJobIndex={setSelectedJobIndex} />    
          <JobDescription job={JobData[selectedJobIndex]} />
        </div>
      }   
    </> 
  )
}

export default index