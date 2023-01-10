import React from 'react'
import JobImage from '../../../assets/craig-marolf-z33FLebN9G0-unsplash.jpg'
import PropTypes from 'prop-types';
import Computer from '../../../assets/computer.svg'
import Image from '../../../assets/image.svg'
import { useState } from 'react'
import clsx from 'clsx'


const JobCardVariation = ({ job, className, setSelectedJobIndex, index, selectedJobIndex }) => {
  const [selected, setSelected] = useState(true)

  const styles = (className) => clsx(
    className,
    selectedJobIndex === index ? 'border-2 border-blue rounded-2xl' : '',
    ['relative h-36 flex items-center overflow-hidden cursor-pointer']
  )
  return (
    <div className={styles(className)} onClick={ () => { setSelectedJobIndex(index) }}>
      {/* { selectedJobIndex === index && <div className='absolute top-0 left-0 w-full h-full bg-[#F5F7FA] opacity-50'></div>} */}
      <div className='w-1/3 h-full rounded-l-2xl overflow-hidden'>
        <img className='h-full object-cover' src={Image} alt="" />
      </div>
      <div className="flex w-[80%] h-full flex-col gap-2 bg-[#F5F7FA] rounded-r-2xl border-y border-r border-gray px-3 pt-5 pb-2">
        <h3 className="text-smm">{ job.companyName }</h3>
        <h2 className='font-bold'>{ job.jobPosition }</h2>
        <div className="flex gap-2">
          {
            job.jobTags.map((tag, index) => (
              <span className="p-1 text-xsm bg-[#E0E5EE] text-[#69707D]">{ tag }</span>
            ))
          }
          <span className="p-1 text-xsm bg-[#E0E5EE] text-[#69707D]">{ job.jobAmount }</span>
        </div>
        <div className=" w-full flex font-bold justify-end pr-5 text-xs text-[#69707D] text-end">14h</div>
      </div>
    </div>
  )
}

export default JobCardVariation

JobCardVariation.defaultProps = {
  job: [],
  className: '',
  setSelectedJobIndex: () => {},
  selectedJobIndex: 0,
  index: 0,
};

JobCardVariation.propTypes = {
  job: PropTypes.array,
  className: PropTypes.string,
  setSelectedJobIndex: PropTypes.func,
  selectedJobIndex: PropTypes.number,
  index: PropTypes.number,
};