import React from 'react'
import PropTypes from 'prop-types';
import Button from '../Button'
import Computer from '../../../assets/computer.svg'
import clsx from 'clsx'


const BusinessCard = ({ className }) => {
  const styles = (className) => clsx(
    className,
    ['card py-2.5 px-2 border-2 border-[#D3DAE6] rounded-2xl h-fit flex flex-col items-center justify-between']
  )
  console.log(className)
  return (
    <div className={styles(className)}>
        <div className='flex flex-col'>       
            <img src={Computer} alt="" className='bg-cover bg-center rounded-xl' />
            <h6 className='text-sm font-medium h-11 mb-2 overflow-hidden'>Blossom boutique flower tsfdsfddfsdtfdl</h6>
            <ul className='flex items-center flex-wrap text-xsm list-disc pl-4 gap-4 h-9 overflow-hidden pb-12'>
                <li><span className='relative -left-1.5'>Unknown</span></li>
                <li><span className='relative -left-1.5'>Unknown</span></li>
                <li><span className='relative -left-1.5'>Unknown</span></li>
                <li><span className='relative -left-1.5'>Unknown</span></li>
                <li><span className='relative -left-1.5'>Unknown</span></li>
                <li><span className='relative -left-1.5'>Unknown</span></li>
                <li><span className='relative -left-1.5'>Unknown</span></li>
                <li><span className='relative -left-1.5'>Unknown</span></li>
                <li><span className='relative -left-1.5'>Unknown</span></li>
                <li><span className='relative -left-1.5'>Unknown</span></li>
            </ul>
        </div>
        <Button className='mt-6 w-full text-xs rounded-xl py-2 px-4 font-semibold' to='business'>
            view business
        </Button>
    </div>
  )
}

export default BusinessCard



BusinessCard.defaultProps = {
  className: '',
};

BusinessCard.propTypes = {
  className: PropTypes.string,
};
