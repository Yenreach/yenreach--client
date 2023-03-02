import React from 'react'
import Button from '../../../ui/Button'
import PropTypes from 'prop-types';
import { BiBriefcase, BiEdit } from 'react-icons/bi'
import { MdBusiness, MdOutlinePeopleOutline } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'


const index = ({ job }) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow text-xs">
      <div className="flex justify-between items-center w-full">
        <label htmlFor="status" className="flex cursor-pointer select-none items-center">
          <div className="relative">
            <input id="status" type="checkbox" className="sr-only peer" onChange={(job) => !true} checked={job?.jobStatus==="Active"} />
            <div
              className="dot shadow-switch-1 absolute left-0.5 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full shadow-lg bg-white transition peer-checked:translate-x-4"
            ></div>
            <div className="h-5 w-9 rounded-full bg-blue shadow-inner"></div>
          </div>
        </label>
        <div className='flex items-center gap-2'>
          <BiEdit size="1.3rem" className='cursor-pointer opacity-80' />
          <RiDeleteBin6Line size="1.3rem" className='cursor-pointer opacity-60' color='red' />
        </div>
      </div>
      <div className="flex flex-col gap-2 opacity-60">
        <div className="flex gap-2 justify-start items-center">
          <MdBusiness size="1.3rem" />
          <p className='text-xs text-grey'>Yenreach</p>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <BiBriefcase size="1.3rem" />
          <p className='text-xs text-grey'>Receptionist</p>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <MdOutlinePeopleOutline size="1.3rem" />
          <p className='text-xs text-grey'>23 Appliacants</p>
        </div>
      </div>
      <span className='w-fit bg-green-light rounded-full px-3 py-1 text-green text-xs'>{ job?.jobStatus }</span>
      <Button variant='job'  className='py-1 text-xs' onClickFunc={ () => ""}>View Applicants</Button>
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