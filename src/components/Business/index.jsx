import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { apiGetApprovedBusinesses, apiGetFilledCategories, apiGetBusinessStates, apiBusinessSearch } from '../../services/CommonService'
import useFetch from '/src/hooks/useFetch'
import getData from '../../utils/getData'
import { paginate } from '../../utils/pagination'
import Loader from '../Loader'
import Input from '/src/components/ui/Input'
import Button from '/src/components/ui/Button'
import Search from '/src/assets/search.svg'
import BusinessCard from '../ui/BusinessCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Location from '../../assets/location.svg'

const staleTime = 1000 * 60 * 60 * 24

const index = ({ page: initialPage, num_per_page }) => {
  const [page, setPage] = useState(initialPage || 1)
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [searchQuery, setSearchQuery] = useState({ search: '', location: '' })
  const [enabled, setEnabled] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const searchString = searchParams.get('search')
  const searchLocation = searchParams.get('location')

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchQuery({ search, location })
    if (!enabled) {
      setEnabled(true)
      refetch()
    } else {    
      refetch()
    }
    setSearch('')
    setLocation('')
  }

  useEffect(() => {
    if (searchString) {
      setSearchQuery({ search: searchString, location: searchLocation })
      setEnabled(true)
    }
  }, [])


  
  const { data: aprrovedBusinesses, error: errorApprovedBusinesses, isLoading: aprrovedBusinessesLoading  } = useQuery({
    queryKey: ['aprrovedBusinesses'],
    queryFn: () => getData(apiGetApprovedBusinesses),
    staleTime: staleTime,
  })

  const { data: filteredBusiness, error: errorFilteredBusinesses, refetch, isLoading: filteredBusinessesLoading } = useQuery({
    queryKey: ['filteredBusiness', searchQuery],
    queryFn: () => getData(apiBusinessSearch, searchQuery),
    // staleTime: staleTime,
    enabled
  })

  
  const { data: filledCategories, error: errorFilledCategories } = useFetch({
    api: apiGetFilledCategories,
    key: 'filledCategories',
    staleTime: staleTime,
  })
  
  const { data: businessStates, error: errorBusinessStates } = useFetch({
    api: apiGetBusinessStates,
    key: 'businessStates',
    staleTime: staleTime,
  })

  
  const handlePageChange = (page) => {
    setPage(page)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }

  console.log("aprrovedBusinesses", aprrovedBusinesses)

  return (
    <>
        {!filteredBusinessesLoading && aprrovedBusinessesLoading && <Loader loader={4} />}
        {enabled && filteredBusinessesLoading && <Loader loader={4} />}
			<div className='flex items-center justify-center w-full gap-10'>
				<p className='font-medium text-smm'>Currently Exploring businesses in</p>
				<div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-light">
					<img src={Location} alt="location" />
					<span className='font-medium text-smm'>Bayelsa, Yenegoa</span>
				</div>
			</div>
      <form action="" method="post" className='flex' onSubmit={handleSearch}>
        <Input onChange={(e) => setSearch(e.target.value)} value={search} list="categories" name="category" id="category" placeholder='business' className='rounded-tl-md rounded-bl-md' />
      <datalist className='' name="categories" id="categories" placeholder='Enter state'>
          {filledCategories?.map((category) => (
              <option key={category.id} value={category.name}>{category.name}</option>
          ))}
      </datalist>
			<Input onChange={(e) => setLocation(e.target.value)} value={location} list="location" name="locate" id="locate" placeholder='location' className='border-l-0 border-r-0' />
      <datalist className='' name="location" id="location" placeholder='Enter Loac'>
          {businessStates?.map((state) => (
              <option key={state.id} value={state.name}>{state.name}</option>
          ))}
      </datalist>
			<Button type="submit" variant='business' className='px-4 py-4 rounded-tr-md rounded-br-md'>
				<img src={Search} alt="search icon" className='w-12' />
			</Button>
		</form>
			{/* <SearchBar variant='business' /> */}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {(aprrovedBusinesses || filteredBusiness) && paginate({page, num_per_page, data: enabled && filteredBusiness || aprrovedBusinesses})?.data?.slice(0,20).map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
      <div className="grid w-full py-6 text-xl font-extrabold text-white bg-center bg-cover bg-new-job-listing rounded-2xl place-items-center">
        New Job Listings available       
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {(aprrovedBusinesses || filteredBusiness) && paginate({page, num_per_page, data: enabled && filteredBusiness || aprrovedBusinesses})?.data?.slice(20,40).map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
      <div className="flex items-center flex-wrap mt-10 w-fit">
        <MdChevronLeft size={"1.5rem"} />
        {(aprrovedBusinesses || filteredBusiness) && [...Array(paginate({page, num_per_page, data: enabled && filteredBusiness || aprrovedBusinesses})?.pages).keys()]?.map((page_num) => 
          <span key={page_num+1} onClick={() => handlePageChange(page_num+1)} className={`${page===page_num+1 && "border-b"} mx-2 font-medium cursor-pointer`}>{page_num + 1}</span>
        )}
        <MdChevronRight size={"1.5rem"} />
      </div>
    </>
  )
}

export default index