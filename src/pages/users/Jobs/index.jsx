import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import { apiGetOneBusiness } from '/src/services/UserService'
import Header from "/src/components/users/Header"
import { AiOutlinePlus } from 'react-icons/ai'
import JobData from '/src/data/job-data.json'
import JobCard from '/src/components/ui/JobCard'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"


const Jobs = () => {
  const { id } = useParams()
  
  const { isLoading, error, data: jobs } = useQuery({
    queryKey: ['userJobs'],
    queryFn: () => getData(apiGetOneBusiness, id),
  })
  console.log("jobs", JobData)


  return (
    <Dashboard>
        <div className='flex-1'>
        <Header business_string={id} type="job" />
          <main className='p-8 px-4 sm:px-8'>
            <div className='flex items-center justify-between mb-3'>
                <h2 className='text-base font-medium'>Jobs Listed</h2>
                <Link to={`/users/jobs/${id}/add-job`}>
                  <Button variant='job' className='px-4 py-2 text-xs flex items-center'>
                        <AiOutlinePlus className='mr-2' />
                        Add new job
                  </Button>
                </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {JobData.slice(0, 4)?.map((job) => (
                  <JobCard key={job.jobId} job={job} />
                ))}
            </div>
          </main>        
        </div>
    </Dashboard>
  )
}

export default Jobs