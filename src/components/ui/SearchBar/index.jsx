import React from 'react'
import Search from '../../../assets/search.svg'
import Input from '../Input'
import Button from '../Button'
import PropTypes from 'prop-types';


function SearchBar({variant}){
	return variant === 'business' ? (
		<form action="" method="post" className='flex'>
			<Input type="text" name="business" id="business" placeholder='business' className='rounded-tl-md rounded-bl-md' />
			<Input type="text" name="location" id="location" placeholder='location' className='border-l-0 border-r-0' />
			<Button variant='business' className='px-4 py-4 rounded-tr-md rounded-br-md'>
				<img src={Search} alt="search icon" className='w-12' />
			</Button>
		</form>
	) :
	variant === 'job' ? (
		<form action="" method="post" className='flex'>
			<Input variant='job' type="text" name="business" id="business" placeholder='job' className='rounded-tl-md rounded-bl-md' />
			<Input variant='job' type="text" name="location" id="location" placeholder='location' className='border-l-0 border-r-0' />
			<Button variant='job' className='px-4 py-4 rounded-tr-md rounded-br-md'>
				<img src={Search} alt="search icon" className='w-12' />
			</Button>
		</form>
	) :
	variant === 'product' ? (
		<form action="" method="post" className='flex'>
			<Input variant='product' type="text" name="business" id="business" placeholder='product' className='rounded-tl-md rounded-bl-md' />
			<Input variant='product' type="text" name="location" id="location" placeholder='location' className='border-l-0 border-r-0' />
			<Button variant='product' className='px-4 py-4 rounded-tr-md rounded-br-md'>
				<img src={Search} alt="search icon" className='w-12' />
			</Button>
		</form>
	) : (
		<form action="" method="post" className='flex'>
			<Input type="text" name="business" id="business" placeholder='business' className='rounded-tl-md rounded-bl-md' />
			<Input type="text" name="location" id="location" placeholder='location' className='border-l-0 border-r-0' />
			<Button className='px-4 py-4 rounded-tr-md rounded-br-md'>
				<img src={Search} alt="search icon" className='w-12' />
			</Button>
		</form>
	)
		
}

SearchBar.defaultProps = {
	variant: ''
}

SearchBar.propTypes = {
	variant: PropTypes.string
}

export default SearchBar;