import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import PropTypes from 'prop-types';
import { BiBriefcase, BiEdit } from 'react-icons/bi'
import { MdBusiness, MdOutlinePeopleOutline } from 'react-icons/md'
import { daysAgo, formatDate } from '/src/utils/dateFunc'
import { RiDeleteBin6Line } from 'react-icons/ri'
import useTimeOutMessage from "/src/hooks/useTimeOutMessage"
import { toast } from 'react-toastify';



const index = ({ job, setSelectedIndex, index, setTab }) => {
  const status = job?.status==="1" ? Date.parse(job?.expiry_date) < Date.now() ? "Expired" : "Active" : "Inactive"
  //timeout message 
  const { messageState, setMessageState } = useTimeOutMessage()


  const handleClick = (index) => {
    if (status === "Active") {
      setSelectedIndex(index)
      setTab(2)
    } else {
      toast.info("Job is not active")
    }
  }

  return (
    <>
{
    <div onClick={() => handleClick(index)} className="flex flex-col gap-4 py-2.5 px-2 border-2 border-[#D3DAE6] cursor-pointer">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xsm font-semibold text-blue">Posted {!!daysAgo(job?.created_at) ? daysAgo(job?.created_at)=== 1 ? "yesterday" : `${daysAgo(job?.created_at)} days ago` : "today"}</h2>
        <div className={`rounded-full px-3 py-1  text-xs ${ (job?.status==="1" && !(Date.parse(job?.expiry_date) < (Date.now() - 1000*60*60*24))) ? "text-green bg-green-light" : "text-red-400 bg-red-100" }`}>{ job?.status==="1" ? Date.parse(job?.expiry_date) < (Date.now() - 1000*60*60*24) ? "Expired" : "Active" : "Inactive" }</div>
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
      <Button variant='job'  className='py-2 mx-2' onClickFunc={() => handleClick(index)}>Apply</Button>
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



// job?.admin_job==="1" ?
//     <a href={`${job?.job_link}`} target="_blank" className="flex flex-col gap-4 py-2.5 px-2 border-2 border-[#D3DAE6]">
//       <div className="flex justify-between items-center w-full">
//         <h2 className="text-xsm font-semibold text-blue">Posted 3 days ago</h2>
//         <div className='bg-green-light rounded-full px-3 py-1 text-green text-xs'>{ job?.status==="1" ? "Active" : "Inactive" }</div>
//       </div>
//       <div className="flex flex-col gap-2">
//         <div className="flex gap-2 justify-start items-center">
//           <MdBusiness size="1.3rem" className='opacity-60' />
//           <p className='text-sm text-gray font-semibold'>{ job?.company_name }</p>
//         </div>
//         <div className="flex gap-2 justify-start items-center">
//         <BiBriefcase size="1.3rem" className='opacity-60' color='' />
//           <p className='text-sm text-gray font-semibold'>{ job?.job_title }</p>
//         </div>
//       </div>
//       <div className="flex flex-col gap-2">
//         <div className="flex gap-2 flex-wrap h-14 items-start">
//           {
//             job?.job_tags?.map((tag, index) => (
//               <div key={tag.id} className="px-2 text-xs py-1 bg-blue-light text-blue">{ tag.tag }</div>
//             ))
//           }
//         </div>
//         <div className="grid px-2 py-1 text-sm bg-blue-light text-blue w-fit">NGN { job?.salary }</div>
//       </div>
//       <Button variant='job'  className='py-2 mx-2'>Apply</Button>
//   </a>
//     :