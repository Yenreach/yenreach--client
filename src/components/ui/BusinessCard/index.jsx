import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Button from '../Button'
import Computer from '../../../assets/computer.svg'
import clsx from 'clsx'
import Image from '../../Image';


const BusinessCard = ({ className, business }) => {
  const styles = (className) => clsx(
    className,
    ['py-2.5 px-2 border-2 border-[#D3DAE6] rounded-2xl h-fit flex flex-col justify-between']
  )
  // console.log(className)
  return (
    <Link to={`/business/${business.verify_string}`}>
      <div className={styles(className)}>
          <div className='flex flex-col'>       
              {/* <img src={Computer} alt="" className='object-cover object-center rounded-xl h-28' /> */}
              <Image
                name={business?.filename}
                alt={business?.name}
                className='object-cover object-center rounded-xl h-28'
                business={business}
               />
              <h6 className='text-sm font-medium h-11 my-2 overflow-hidden'>{business?.name || "Blossom boutique flower tsfdsfddfsdtfdl"}</h6>
              <ul className='flex items-center flex-wrap text-xsm list-disc pl-4 gap-4 h-9 overflow-hidden pb-12'>
                  {business?.categories?.map((category) => ( 
                      <li key={category.id}><span className='relative -left-1.5'>{category.category}</span></li>
                  ))}
              </ul>
          </div>
          <Button className='mt-6 w-full text-xs rounded-xl py-2 px-4 font-semibold text-white object-green text-center'>
              view business
          </Button>
      </div>
    </Link>
  )
}

export default BusinessCard



BusinessCard.defaultProps = {
  className: '',
};

BusinessCard.propTypes = {
  className: PropTypes.string,
};
