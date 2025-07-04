import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
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
import useCreateQueryString from '../../hooks/useCreateQueryString'

const staleTime = 1000 * 60 * 60 * 24

const ExploreBusiness = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState("")
  const [useFilter, setUseFilter] = useState(false)
  const [filterBy, setFilterBy] = useState('')
  const [location, setLocation] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [enabled, setEnabled] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1)
  const num_per_page = 40
  // const searchString = searchParams.get('search')
  // const searchLocation = searchParams.get('location')
  const { createQueryString } = useCreateQueryString()

  useEffect(() => {
    const page = parseInt(searchParams.get('page'), 10) || 1; // Default to page 1
    setPage(page);
  }, [searchParams])

  const searchRef = useRef()

  useEffect(() => {
    // debounce search
    if (searchRef.current) {
      clearTimeout(searchRef?.current)
    }
    const timer = setTimeout(() => {
      setSearchQuery(search)
    }, 500)

    searchRef.current = timer
  }, [search])

  useEffect(() => {
    // debounce search
    if (searchRef.current) {
      clearTimeout(searchRef?.current)
    }
    const timer = setTimeout(() => {
      setSearchQuery(filterBy)
    }, 500)

    searchRef.current = timer
  }, [filterBy])

  // useEffect(() => {
  //   const params = new URLSearchParams(locate.search);
  //   const page = parseInt(params.get('page'), 10) || 1; // Default to page 1
  //   setPage(page);
  // }, [locate]);


  const handleSearch = (e) => {
    e.preventDefault()
    // setSearchParams({ page: 1 })
    // setUseFilter(false)
    // setSearchQuery({ search, location })
    // if (!enabled) {
    //   setEnabled(true)
    //   refetch()
    // } else {    
    //   if (!search) {
    //     setEnabled(false)
    //   } else {
    //     refetch()
    //   }
    // }
    // setSearch('')
    // setLocation('')
  }

  // useEffect(() => {
  //   if (!!searchString) {
  //     setSearchQuery({ search: searchString, location: searchLocation })
  //     setEnabled(true)
  //   }
  // }, [])

  const { data: aprrovedBusinesses, isLoading: aprrovedBusinessesLoading, error: errorApprovedBusinesses, isPreviousData, isFetching: aprrovedBusinessesFetching  } = useFetch({
    api: apiGetApprovedBusinesses,
    key: ['aprrovedBusinesses', page, searchQuery],
    param: { page, num_per_page, search: searchQuery },
    // select: (data) => paginate(data?.data, page, num_per_page),
    staleTime: staleTime,
  })


  const { data: categories } = useFetch({
    api: apiGetAllCategories,
    key: ['categories'],
  })
  
  // const { data: filledCategories, error: errorFilledCategories } = useFetch({
  //   api: apiGetFilledCategories,
  //   key: 'filledCategories',
  //   staleTime: staleTime,
  // })

  // console.log({ filledCategories })
  
  const { data: businessStates, error: errorBusinessStates } = useFetch({
    api: apiGetBusinessStates,
    key: 'businessStates',
    staleTime: staleTime,
  })
  
  const handlePageChange = (page) => {
    createQueryString({ page })
      // setPage(page)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  }

  
  // useEffect(() => {
  //   if (filterBy) {
  //     setUseFilter(true)
  //   } else {
  //     setUseFilter(false)
  //   }
  // }, [filterBy])


  return (
    <>
    <SEO
        title="Explore Businesses - Yenreach"
        description="Browse and discover a wide range of businesses across various categories on Yenreach. Find local services, shops, and more."
        name="Yenreach"
        type="businesses"
    />
      {(aprrovedBusinessesFetching && isPreviousData) && <Loader loader={4} />}


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
          {/* <datalist className='' name="categories" id="categories" placeholder='Enter state'>
              {filledCategories?.data?.map((category) => (
                  <option key={category.id} value={category.name}>{category.name}</option>
              ))}
          </datalist> */}
          <Input onChange={(e) => setLocation(e.target.value)} value={location} list="location" name="locate" id="locate" placeholder='location' className='border-l-0 border-r-0' />
          <datalist className='' name="location" id="location" placeholder='Enter Loac'>
              {businessStates?.data?.map((state) => (
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
      {aprrovedBusinessesLoading ? 
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
            [...Array(40)].map((_, index) => (
                  <BusinessCardLoading key={index} />
              ))
            }
          </div>
        :
         aprrovedBusinesses?.data?.length ?
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {aprrovedBusinesses?.data.map((business) => (
                  <BusinessCard key={business.id} business={business} />
                ))
              }
          </div>
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
        data={aprrovedBusinesses?.data} 
        handlePageChange={handlePageChange} 
        total={aprrovedBusinesses?.total} 
        totalPages={aprrovedBusinesses?.totalPages}
      />
    </>
  )
}

export default ExploreBusiness