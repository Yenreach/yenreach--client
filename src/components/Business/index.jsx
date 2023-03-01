import React, { useState, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { apiGetApprovedBusinesses } from '../../services/CommonService'
import getData from '../../utils/getData'
import { paginate } from '../../utils/pagination'
import BusinessCard from '../ui/BusinessCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import LeftArrow from '../../assets/left-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'
import SearchBar from '../ui/SearchBar'
import Location from '../../assets/location.svg'

const index = ({ page: initialPage }) => {
  const [page, setPage] = useState(initialPage || 1)
  const businessCardsElement = useRef();
  const num_per_page = 40

  // console.log("location", location, "searchParams", searchParams.get('page'))
  
  const { data: aprrovedBusinesses, error: errorApprovedBusinesses } = useQuery({
    queryKey: ['aprrovedBusinesses'],
    queryFn: () => getData(apiGetApprovedBusinesses),
  })
  // console.log("aprrovedBusinesses", aprrovedBusinesses, "error", errorApprovedBusinesses)
  
  const handlePageChange = (page) => {
    setPage(page)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }

  if (aprrovedBusinesses) {
    console.log("pagination", paginate({page, num_per_page, data: aprrovedBusinesses}))
    // setSearchParams({page: 5})
  }

  return (
    <>
			<div ref={businessCardsElement} className='flex items-center justify-center w-full gap-10'>
				<p className='font-medium text-smm'>Currently Exploring businesses in</p>
				<div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-light">
					<img src={Location} alt="location" />
					<span className='font-medium text-smm'>Bayelsa, Yenegoa</span>
				</div>
			</div>
			<SearchBar variant='business' />
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {aprrovedBusinesses && paginate({page, num_per_page, data: aprrovedBusinesses})?.data?.slice(0,20).map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
      <div className="grid w-full py-6 text-xl font-extrabold text-white bg-center bg-cover bg-new-job-listing rounded-2xl place-items-center">
        New Job Listings available       
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {aprrovedBusinesses && paginate({page, num_per_page, data: aprrovedBusinesses})?.data?.slice(20,40).map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
      <div className="flex items-center flex-wrap mt-10 w-fit">
        <MdChevronLeft size={"1.5rem"} />
        {aprrovedBusinesses && [...Array(paginate({page, num_per_page, data: aprrovedBusinesses})?.pages).keys()]?.map((page_num) => 
          <span key={page_num+1} onClick={() => handlePageChange(page_num+1)} className={`${page===page_num+1 && "border-b"} mx-2 font-medium cursor-pointer`}>{page_num + 1}</span>
        )}
        <MdChevronRight size={"1.5rem"} />
      </div>
    </>
  )
}

export default index