import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import { useMutation } from "@tanstack/react-query";
import { apiUpdateJobStatus, apiDeleteJob } from '/src/services/JobService'
import Button from '../../../ui/Button'
import PropTypes from 'prop-types';
import { BiBriefcase, BiEdit } from 'react-icons/bi'
import { MdBusiness, MdOutlinePeopleOutline } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Loader from '/src/components/Loader'
import useFetch from '../../../../hooks/useFetch';
import { apiGetApplicationsByJob } from '../../../../services/JobService';


const index = ({ job, refetchJobs, removeJobsCache, businessId }) => {
  const statusRef = useRef(null)

  const updateJobStatus = useMutation({
    mutationFn: (data) => {
      console.log("data", data)
      return apiUpdateJobStatus(data)
    },
    onSuccess: (data, variables, context) => {
        console.log("success updating job status", data)
        refetchJobs()
        // statusRef.current.checked = !statusRef.current.checked
    },
    onError: (error, variables, context) => {
      console.log("error updating job status", error)
    },
  })

  const deleteJobMutation = useMutation({
    mutationFn: (data) => {
      console.log("data", data)
      return apiDeleteJob(data)
    },
    onSuccess: (data, variables, context) => {
        console.log("success deleting job", data)
        removeJobsCache()
        refetchJobs()
        // statusRef.current.checked = !statusRef.current.checked
    },
    onError: (error, variables, context) => {
      console.log("error deleting job", error)
    },
  })
   
  const handleSubmit = (e) => {
    e.preventDefault()
      console.log(e.target.checked, statusRef.current.checked, job?.status!=="open")
      updateJobStatus.mutate({ 
        "id": job?.id,
        "businessId": job?.businessId,
        "status": job?.status!=="open"
      })
  }

  const deleteJob = (e) => {
    e.preventDefault()
      deleteJobMutation.mutate({ 
        "id": job?.id,
        "businessId": job?.businessId
      })
  }

  const { isLoading, error, data: applicants } = useFetch({
    key: ['userJobApplicants', job?.id],
    api: apiGetApplicationsByJob,
    param: { id: job?.id },
  })

  
  return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow text-xs">
      {(deleteJobMutation?.isLoading || updateJobStatus?.isLoading) && <Loader loader={4} />}
      <div className="flex justify-between items-center w-full">
        <label htmlFor={`status${job?.id}`} className="flex cursor-pointer select-none items-center">
          <div className="relative">
            <input ref={statusRef} id={`status${job?.id}`} type="checkbox" className="sr-only peer" onChange={handleSubmit} checked={job?.status==="open"} />
            <div
              className="dot shadow-switch-1 absolute left-0.5 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full shadow-lg bg-white transition peer-checked:translate-x-4"
            ></div>
            <div className={`h-5 w-9 rounded-full  ${job?.status==="open" ? "bg-blue" : "bg-blue/40"} shadow-inner`}></div>
          </div>
        </label>
        <div className='flex items-center gap-2'>
            <Link to={`/users/jobs/${job?.businessId}/edit-job/${job?.id}`}>
              <BiEdit size="1.3rem" className='cursor-pointer opacity-80' />
            </Link>
            <RiDeleteBin6Line size="1.3rem" className='cursor-pointer opacity-60' color='red' onClick={deleteJob} />
        </div>
      </div>
      <div className="flex flex-col gap-2 opacity-60">
        <div className="flex gap-2 justify-start items-center">
          <MdBusiness size="1.3rem" />
          <p className='text-xs text-grey'>{job?.company_name}</p>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <BiBriefcase size="1.3rem" />
          <p className='text-xs text-grey'>{job?.job_title}</p>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <MdOutlinePeopleOutline size="1.3rem" />
          <p className='text-xs text-grey'>{applicants?.length || 0} Appliacants</p>
        </div>
      </div>
      <span className='w-fit bg-green-light rounded-full px-3 py-1 text-green text-xs'>{ job?.status === "open" ? "Active" : "Inactive" }</span>
      <Link to={`/users/jobs/${businessId}/applicants/${job?.id}`} className="w-full">
        <Button variant='job'  className='w-full py-1 text-xs' onClickFunc={ () => ""}>View Applicants</Button>
      </Link>
    </div>
  )
}

export default index

index.defaultProps = {
  job: {},
};

index.propTypes = {
  job: PropTypes.object,
};