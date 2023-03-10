import React, { useState } from 'react'
import JobCard from '../ui/JobCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import LeftArrow from '../../assets/left-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'
import PropTypes from 'prop-types';
import { paginate } from '/src/utils/pagination'


const AllJobs = ({ jobs, setSelectedJobIndex, setTab, page: initialPage, num_per_page }) => {
  const [page, setPage] = useState(initialPage || 1)
  
  const handlePageChange = (page) => {
    setPage(page)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }

  return (
    <>
			<div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          jobs.slice(0, 10).map((job, index) => (
            <JobCard index={index} setSelectedIndex={setSelectedJobIndex} setTab={setTab} key={job?.id} job={job} />
          ))
        }
        {/* <JobCard /> */}
      </div>
      <div className="grid w-full py-6 text-xl font-extrabold text-white bg-center bg-cover bg-new-job-listing rounded-2xl place-items-center">
        New Job Listings available 
      </div>
      <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {
          jobs.slice(10, 21).map((job, index) => (
            <JobCard index={index} setSelectedIndex={setSelectedJobIndex} setTab={setTab} key={job?.id} job={job} />
          ))
        }
      </div>
      <div className="flex gap-2 mt-10 border border-gray w-fit">
        <MdChevronLeft size={"1.5rem"} />
        {jobs && [...Array(paginate({page, num_per_page, data: jobs})?.pages).keys()]?.map((page_num) => 
          <span key={page_num+1} onClick={() => handlePageChange(page_num+1)} className={`${page===page_num+1 && "border-b"} mx-2 font-medium cursor-pointer`}>{page_num + 1}</span>
        )}
        <MdChevronRight size={"1.5rem"} />
      </div>
    </>
  )
}

export default AllJobs

AllJobs.defaultProps = {
  jobs: [],
  setSelectedJobIndex: () => {},
  setTab: () => {},
};

AllJobs.propTypes = {
  jobs: PropTypes.array,
  setSelectedJobIndex: PropTypes.func,
  setTab: PropTypes.func,
};