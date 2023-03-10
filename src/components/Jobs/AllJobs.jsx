import React from 'react'
import JobCard from '../ui/JobCard'
import LeftArrow from '../../assets/left-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'
import PropTypes from 'prop-types';

const AllJobs = ({ jobs, setSelectedJobIndex, setTab }) => {
  return (
    <>
			<div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
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
        <img src={LeftArrow} alt="" />
        <span className='grid p-2 font-medium place-items-center'>1</span>
        <span className='grid p-2 font-medium place-items-center'>2</span>
        <span className='grid p-2 font-medium place-items-center'>3</span>
        <span className='grid p-2 font-medium place-items-center'>4</span>
        <img src={RightArrow} alt="" />
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