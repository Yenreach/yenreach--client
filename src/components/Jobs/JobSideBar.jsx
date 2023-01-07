import React from 'react'
import PropTypes from 'prop-types'
import LeftArrow from '../../assets/left-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'
import JobCardVariation from '../ui/JobCard/JobCardVariation'
import { useState } from 'react'

const JobSideBar = ({ jobs, setSelectedJobIndex }) => {
  
  return (
    <div className='flex flex-col h-full'>
			<div className="flex justify-start flex-col gap-3">
				{
					jobs.slice(0, 4).map((job, index) => (
						<JobCardVariation key={job.jobId} job={job} index={index} setSelectedIndex={setSelectedJobIndex} />
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
    </div>
  )
}

export default JobSideBar

JobSideBar.defaultProps = {
	jobs: []
};

JobSideBar.propTypes = {
	jobs: PropTypes.array
}