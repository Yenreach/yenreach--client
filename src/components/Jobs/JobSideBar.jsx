import React from 'react'
import PropTypes from 'prop-types'
import JobCardVariation from '../ui/JobCard/JobCardVariation'
import { useState } from 'react'
import Pagination from '../Pagination'
import { paginate } from '/src/utils/pagination'
import useFetch from '/src/hooks/useFetch'
import { apiGetAllJobs } from '../../services/JobService'


const JobSideBar = ({ jobs, setSelectedJobIndex, selectedJobIndex, total }) => {
  const num_per_page = 4
  const [page, setPage] = useState(Math.ceil((selectedJobIndex+1)/num_per_page))

      
  // const { data: jobs, error: errorJobs, isLoading } = useFetch({
  //   api: apiGetAllJobs,
  //   param: { page, num_per_page },
  //   select: (data) => data,
  //   key: ['jobs', page],
  // })

  const handlePageChange = (page) => {
    setPage(page)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }

  // console.log({page})

  return (
    <div className='hidden md:flex flex-col h-full flex-1 max-w-sm'>
			<div className="flex justify-start flex-col gap-3">
				{
					 paginate({ page, num_per_page, data: jobs, total })?.data?.slice((num_per_page*page)-num_per_page, num_per_page*page).map((job, index) => (
						<JobCardVariation key={job.id} job={job} index={index + (page-1)*num_per_page} selectedJobIndex={selectedJobIndex} setSelectedJobIndex={setSelectedJobIndex} />
					))
				}
			</div>
      <Pagination page={page} num_per_page={num_per_page} data={jobs} total={jobs?.length} handlePageChange={handlePageChange} />
    </div>
  )
}

export default JobSideBar

JobSideBar.defaultProps = {
	jobs: [],
  setSelectedJobIndex: () => {},
  selectedJobIndex: 0,
};

JobSideBar.propTypes = {
	jobs: PropTypes.array,
  setSelectedJobIndex: PropTypes.func,
  selectedJobIndex: PropTypes.number,
}