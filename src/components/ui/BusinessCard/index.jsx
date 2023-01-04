import React from 'react'
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