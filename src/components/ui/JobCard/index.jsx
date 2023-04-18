import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import PropTypes from 'prop-types';
import { BiBriefcase, BiEdit } from 'react-icons/bi'
import { MdBusiness, MdOutlinePeopleOutline } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'


const index = ({ job, setSelectedIndex, index, setTab }) => {
  return (
    <>
{job?.admin_job==="1" ?
    <a href={`${job?.job_link}`} target="_blank" className="flex flex-col gap-4 py-2.5 px-2 border-2 border-[#D3DAE6]">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xsm font-semibold text-blue">Posted 3 days ago</h2>
        <div className='bg-green-light rounded-full px-3 py-1 text-green text-xs'>{ job?.status==="1" ? "Active" : "Inactive" }</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-start items-center">
          <MdBusiness size="1.3rem" className='opacity-60' />
          <p className='text-sm text-gray font-semibold'>{ job?.company_name }</p>
        </div>
        <div className="flex gap-2 justify-start items-center">
        <BiBriefcase size="1.3rem" className='opacity-60' color='' />
          <p className='text-sm text-gray font-semibold'>{ job?.job_title }</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 flex-wrap h-14 items-start">
          {
            job?.job_tags?.map((tag, index) => (
              <div key={tag.id} className="px-2 text-xs py-1 bg-blue-light text-blue">{ tag.tag }</div>
            ))
          }
        </div>
        <div className="grid px-2 py-1 text-sm bg-blue-light text-blue w-fit">NGN { job?.salary }</div>
      </div>
      <Button variant='job'  className='py-2 mx-2' onClickFunc={ () => { setSelectedIndex(index); console.log('selected: ', index); setTab(2) }}>Apply</Button>
  </a>
    :
    <div className="flex flex-col gap-4 py-2.5 px-2 border-2 border-[#D3DAE6]">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xsm font-semibold text-blue">Posted 3 days ago</h2>
        <div className='bg-green-light rounded-full px-3 py-1 text-green text-xs'>{ job?.status==="1" ? "Active" : "Inactive" }</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-start items-center">
          <MdBusiness size="1.3rem" className='opacity-60' />
          <p className='text-sm text-gray font-semibold'>{ job?.company_name }</p>
        </div>
        <div className="flex gap-2 justify-start items-center">
        <BiBriefcase size="1.3rem" className='opacity-60' color='' />
          <p className='text-sm text-gray font-semibold'>{ job?.job_title }</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 flex-wrap h-14 items-start">
          {
            job?.job_tags?.map((tag, index) => (
              <div key={tag.id} className="px-2 text-xs py-1 bg-blue-light text-blue">{ tag.tag }</div>
            ))
          }
        </div>
        <div className="grid px-2 py-1 text-sm bg-blue-light text-blue w-fit">NGN { job?.salary }</div>
      </div>
      <Button variant='job'  className='py-2 mx-2' onClickFunc={ () => { setSelectedIndex(index); console.log('selected: ', index); setTab(2) }}>Apply</Button>
    </div>
  }
    </>
  )
}

export default index

index.defaultProps = {
  job: {},
  setSelectedIndex: () => {},
  index: 0,
};

index.propTypes = {
  job: PropTypes.object,
  setSelectedIndex: PropTypes.func,
  index: PropTypes.number,
};