import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types';
import { BiBriefcase, BiEdit } from 'react-icons/bi'
import { MdBusiness, MdOutlinePeopleOutline } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'


const index = ({ job, setSelectedIndex, index, setTab }) => {
  return (
    <div className="flex flex-col gap-4 py-2.5 px-2 border-2 border-[#D3DAE6]">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xsm font-semibold text-blue">Posted 3 days ago</h2>
        <div className='bg-green-light rounded-full px-3 py-1 text-green text-xs'>{ job?.status==="1" ? "Active" : "Inactive" }</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-start items-center">
          <MdBusiness size="1.3rem" className='opacity-60' />
          <p className='text-xs text-grey'>{ job?.company_name }</p>
        </div>
        <div className="flex gap-2 justify-start items-center">
        <BiBriefcase size="1.3rem" className='opacity-60' color='' />
          <p className='text-xs text-grey'>{ job?.job_title }</p>
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

    // <div className='relative flex items-center overflow-hidden justify-centder'>
    //   <img className='object-cover w-40 h-full overflow-hidden' src={JobImage} alt="" />
    //   <div className="flex w-2/3 flex-col gap-2 bg-[#F5F7FA] rounded-r-2xl border-y border-r border-gray px-3 pt-5 pb-2">
    //     <h3 className="text-smm">Google</h3>
    //     <h2 className='font-bold'>The Front desk officer</h2>
    //     <div className="flex gap-2">
    //       <span className="p-1 text-xsm bg-[#E0E5EE] text-[#69707D]">Lagos</span>
    //       <span className="p-1 text-xsm bg-[#E0E5EE] text-[#69707D]">Contract</span>
    //       <span className="p-1 text-xsm bg-[#E0E5EE] text-[#69707D]">NGN Confidential</span>
    //     </div>
    //     <div className=" w-full flex font-bold justify-end pr-5 text-xs text-[#69707D] text-end">14h</div>
    //   </div>
    // </div>
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