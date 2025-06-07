import React, { useState } from 'react'
import JobCard from '../ui/JobCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import PropTypes from 'prop-types';
import Pagination from '../Pagination'
import { paginate } from '/src/utils/pagination'


const AllJobs = ({ jobs, setSelectedJobIndex, setTab, page, setPage, num_per_page, total }) => {
  // const [page, setPa] = useState(initialPage || 1)
  
  const handlePageChange = (page) => {
    setPage(page)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  
  return (
    <>
			{jobs?.length ? 
        <>
        <div className="grid w-full gap-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            jobs?.map((job, index) => (
              <JobCard index={index} setSelectedIndex={setSelectedJobIndex} setTab={setTab} key={job?.id} job={job} />
            ))
          }
          {/* <JobCard /> */}
        </div>
        {/* <div className="grid w-full py-6 my-4 text-xl font-semibold text-white bg-center bg-cover bg-new-job-listing rounded-2xl place-items-center">
          New Job Listings available 
        </div> */}
          <Pagination 
            page={page} 
            num_per_page={num_per_page} 
            data={jobs} 
            handlePageChange={handlePageChange} 
            total={total} 
          />
        </>
      : 
      <div className='flex items-center justify-center h-24 text-black/70'>
        No jobs Available
      </div>
    }
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