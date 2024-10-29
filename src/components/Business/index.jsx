import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { apiGetApprovedBusinesses, apiGetFilledCategories, apiGetBusinessStates, apiBusinessSearch, apiSortBusinesses, apiGetAllCategories } from '../../services/CommonService'
import useFetch from '/src/hooks/useFetch'
import usePost from '/src/hooks/usePost'
import { paginate } from '../../utils/pagination'
import Loader from '../Loader'
import Input from '/src/components/ui/Input'
import Button from '/src/components/ui/Button'
import Search from '/src/assets/search.svg'
import BusinessCard, { BusinessCardLoading } from '../ui/BusinessCard'
import Location from '../../assets/location.svg'
import Pagination from '../Pagination'
import SEO from '../SEO'

const staleTime = 1000 * 60 * 60 * 24

const index = ({ page: initialPage, num_per_page }) => {
  const [page, setPage] = useState(initialPage || 1)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState("")
  const [useFilter, setUseFilter] = useState(false)
  const [filterBy, setFilterBy] = useState('')
  const [location, setLocation] = useState('')
  const [searchQuery, setSearchQuery] = useState({ search: '', location: '' })
  const [enabled, setEnabled] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const searchString = searchParams.get('search')
  const searchLocation = searchParams.get('location')

  const handleSearch = (e) => {
    e.preventDefault()
    setUseFilter(false)
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
    if (!!searchString) {
      setSearchQuery({ search: searchString, location: searchLocation })
      setEnabled(true)
    }
  }, [])

  const { data: aprrovedBusinesses, error: errorApprovedBusinesses, isLoading: aprrovedBusinessesLoading  } = useFetch({
    api: apiGetApprovedBusinesses,
    key: ['aprrovedBusinesses', page],
    param: { page, num_per_page },
    // select: (data) => paginate(data?.data, page, num_per_page),
    select: (data) => data,
    staleTime: staleTime,
  })
  
  
  const { data: sortedBusinesses, error: errorSortedBusinesses, isLoading: sortBusinessesLoading }  = useFetch({
    api: apiSortBusinesses,
    param: { page, num_per_page, sort: filterBy },
    select: (data) => data,
    key: ['sortedBusinesses', page, filterBy],
    enabled: !!filterBy,
  })

  const { data: filteredBusiness, error: errorFilteredBusinesses, refetch, isLoading: filteredBusinessesLoading } = useFetch({
    api: apiBusinessSearch,
    param: searchQuery,
    key: ['filteredBusiness', searchQuery],
    select: (data) => data,
    enabled: enabled,
  })

  console.log({ filteredBusinessesLoading, filteredBusiness, aprrovedBusinesses, aprrovedBusinessesLoading, useFilter, sortBusinessesLoading, sortedBusinesses })

  const { isLoading, error, data: categories } = useFetch({
    api: apiGetAllCategories,
    key: ['categories'],
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

  
  useEffect(() => {
    if (filterBy) {
      setUseFilter(true)
    } else {
      setUseFilter(false)
    }
  }, [filterBy])


  return (
    <>
    <SEO
        title="Explore Businesses - Yenreach"
        description="Browse and discover a wide range of businesses across various categories on Yenreach. Find local services, shops, and more."
        name="Yenreach"
        type="businesses"
    />
      {((enabled && filteredBusinessesLoading) || (useFilter && sortBusinessesLoading)) && <Loader loader={4} />}


			<div className='flex items-center justify-center w-full gap-10'>
				<p className='font-medium text-black/70 text-xs md:text-sm'>Currently Exploring businesses in</p>
				<div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-light">
					<img src={Location} alt="location" />
					<span className='font-medium text-smm'>Bayelsa, Yenegoa</span>
				</div>
			</div>
      <div className="flex flex-col gap-1 md:gap-4 md:flex-row">
        <form action="" method="post" onSubmit={handleSearch} className="text-xs sm:text-sm md:text-base flex">
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
        <select className='p-2 text-base border-2 rounded-md cursor-pointer border-green hover:border-green focus:border-green focus:border-green text-black w-full md:w-32 text-black/50 active:border-green ' value={filterBy} onChange={(e) => setFilterBy(e.target.value)} name="filter" id="">
            <option value="" className=''>Filter By</option>
            {categories?.map((category) => (
                <option key={category.id} value={category.category}>{category.category}</option>
            ))}
        </select>
      </div>
			{/* <SearchBar variant='business' /> */}
      {(useFilter ? sortedBusinesses?.data?.length : enabled ? filteredBusiness?.data.length : aprrovedBusinesses?.data?.length) ?
          <>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {((aprrovedBusinesses || filteredBusiness)) ? paginate({ page, num_per_page, data: useFilter ? sortedBusinesses?.data : enabled ? filteredBusiness?.data?.slice((page-1) * num_per_page, page * num_per_page) : aprrovedBusinesses?.data })?.data?.map((business) => (
                  <BusinessCard key={business.id} business={business} />
                ))
                :
                (
                  [...Array(40)].map((business, index) => (
                      <BusinessCardLoading key={index} />
                  ))
                )
              }
          </div>
          </>
          :
          <div className='flex w-full items-center justify-center h-24 text-black/70'>
            {search ? 'No Business Available for this search' : 'No business was fetched'}
          </div>
          }
      {/* <div className="grid w-full py-6 text-xl font-extrabold text-white bg-center bg-cover bg-new-job-listing rounded-2xl place-items-center">
        New Job Listings available       
      </div> */}
      {/* <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4">
        {(aprrovedBusinesses || filteredBusiness) && paginate({page, num_per_page, data: enabled && filteredBusiness || aprrovedBusinesses})?.data?.slice(20,40).map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div> */}
      <Pagination 
        page={page} 
        num_per_page={num_per_page} 
        data={useFilter ? sortedBusinesses?.data : enabled ? filteredBusiness?.data : aprrovedBusinesses?.data} 
        handlePageChange={handlePageChange} 
        total={useFilter ? sortedBusinesses?.data : enabled ? filteredBusiness?.data?.length : aprrovedBusinesses?.total} 
      />
    </>
  )
}

export default index