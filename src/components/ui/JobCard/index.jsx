import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types';

const index = ({ job, setSelectedIndex, index, setTab }) => {
  return (
    <div className="flex flex-col gap-4 p-4 border-2 border-[#D3DAE6]">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xsm font-semibold text-blue">Posted 3 days ago</h2>
        <div className='bg-green-light rounded-full px-3 py-1 text-green text-xs'>{ job?.jobStatus }</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-start items-center">
          <svg className='scale-[0.85]' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#c2c2c2"/>
          </svg>
          <p className='text-xs text-grey'>{ job?.companyName }</p>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <svg className='scale-[0.85]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99983 22H15.9998C20.0198 22 20.7398 20.39 20.9498 18.43L21.6998 10.43C21.9698 7.99 21.2698 6 16.9998 6H6.99983C2.72983 6 2.02983 7.99 2.29983 10.43L3.04983 18.43C3.25983 20.39 3.97983 22 7.99983 22Z" stroke="#c2c2c2" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6" stroke="#c2c2c2" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z" stroke="#c2c2c2" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02" stroke="#c2c2c2" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.62012 11.2695C4.87012 12.8095 7.41012 13.7395 10.0001 14.0295" stroke="#c2c2c2" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className='text-xs text-grey'>{ job?.jobPosition }</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 flex-col md:flex-row">
          {
            job?.jobTags?.map((tag, index) => (
              <div key={index} className="grid px-2 text-sm md:text-base py-1 place-items-center bg-blue-light text-blue">{ tag }</div>
            ))
          }
        </div>
        <div className="grid px-2 py-1 text-sm md:text-base place-items-center bg-blue-light text-blue w-fit">{ job?.jobAmount }</div>
      </div>
      <Button variant='job'  className='py-2' onClickFunc={ () => { setSelectedIndex(index); console.log('selected: ', index); setTab(2) }}>Apply</Button>
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