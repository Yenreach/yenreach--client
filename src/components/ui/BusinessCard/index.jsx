import React from 'react'
<<<<<<< HEAD
import Computer from '../../../assets/computer.svg'
import Button from '../Button'



const index = () => {
	return (
		<div className='card w-full py-2.5 px-2 border-2 border-[#D3DAE6] rounded-2xl h-80 flex flex-col items-center justify-between'>
			<div>
				<img src={Computer} alt="" className='object-cover w-full h-32 mb-2 rounded-xl' />
				<h6 className='mb-2 overflow-hidden text-sm font-medium h-11'>Blossom boutique flower tsfdsfddfsdtfdl</h6>
				<ul className='flex flex-wrap items-center gap-4 pb-12 pl-4 overflow-hidden list-disc text-xsm h-9'>
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
			<Button className='w-full px-4 py-2 text-xs font-semibold rounded-xl'>
				view business
			</Button>
		</div>
	)
}

export default index
=======
import PropTypes from 'prop-types';
import Button from '../Button'
import Computer from '../../../assets/computer.svg'
import clsx from 'clsx'


const BusinessCard = ({ className }) => {
  const styles = (className) => clsx(
    className,
    ['card py-2.5 px-2 border-2 border-[#D3DAE6] rounded-2xl h-80 flex flex-col items-center justify-between min-w-[250px]']
  )
  console.log(className)
  return (
    <div className={styles(className)}>
        <div>       
            <img src={Computer} alt="" className='h-32 mb-2 w-full object-cover rounded-xl' />
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
        <Button className='w-full text-xs rounded-xl py-2 px-4 font-semibold'>
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
>>>>>>> 0991e47e0a7cc4d21f7cb988c0add648bb1de1fd
