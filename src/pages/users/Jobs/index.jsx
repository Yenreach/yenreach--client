import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '/src/hooks/useFetch'
import { apiGetAllBusinessJobs } from '/src/services/JobService'
import Header from "/src/components/users/Header"
import { AiOutlinePlus } from 'react-icons/ai'
import JobCard from '/src/components/users/jobs/JobCard'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"
import NoBusiness from '../../../assets/dashboard/no-business.svg'
import Loader from '../../../components/Loader'



const Jobs = () => {
  const { id } = useParams()
  
  const { isLoading, error, data: jobs, refetch: refetchJobs, remove: removeJobsCache } = useFetch({
    key: ['userJobs', id],
    api: apiGetAllBusinessJobs,
    param: id,
  })
  
  console.log("jobs", jobs)

  return (
    <Dashboard>
        <div className='flex-1'>
        <Header business_string={id} type="job" />
          <main className='p-8 px-4 sm:px-8'>
            {isLoading && <Loader loader={4} />}
           { jobs &&
            <>
              <div className='flex items-center justify-between mb-3'>
                    <h2 className='text-base font-medium'>Jobs Listed</h2>
                    <Link to={`/users/jobs/${id}/add-job`}>
                      <Button variant='job' className='px-4 py-2 text-xs flex items-center'>
                            <AiOutlinePlus className='mr-2' />
                            Add new job
                      </Button>
                    </Link>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {jobs?.map((job) => (
                      <JobCard key={job.id} job={job} refetchJobs={refetchJobs} removeJobsCache={removeJobsCache} />
                    ))}
                </div>
              </>
            }
            {!isLoading &
              !jobs && 
                <div className='flex flex-col justify-center items-center rounded-lg font-arialsans h-[550px] sm:h-auto md:mt-14'>
                    <img src={NoBusiness} alt="" className='mb-7' />
                    <span className='text-center text-[#476788] mb-9'>
                      You have not added any job under this business
                    </span>                        
                    <Link to={`/users/jobs/${id}/add-job`}> 
                    <span href=""className='text-blue underline underline-offset-2'>Click here to add a new job</span>
                    </Link>
                </div>
            }
          </main>        
        </div>
    </Dashboard>
  )
}

export default Jobs