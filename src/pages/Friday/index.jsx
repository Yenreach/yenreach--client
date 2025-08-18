import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '/src/components/Header'
import Footer from '/src/components/Footer'
import ExploreNav from '/src/components/ExploreNav'
import SalesProductCard from '/src/components/ui/SalesProductCard'
import Loader from '/src/components/Loader'
import useFetch from '/src/hooks/useFetch'
import Location from '/src/assets/location.svg'
import Pagination from '/src/components/Pagination'
import { apiGetBlackFridayProducts, apiGetProductCategories } from '/src/services/ProductService'
import Button from '/src/components/ui/Button'
import Input from '/src/components/ui/Input'
import Search from '/src/assets/search.svg'
import ReactGA from "react-ga4";
import SEO from '../../components/SEO'
import useCreateQueryString from '../../hooks/useCreateQueryString'
import Countdown from 'react-countdown'; 

// const categories = [
//   {id: 1, name: "Electronics"},
//   {id: 2, name: "Fashion"},
//   {id: 3, name: "Home"},
//   {id: 4, name: "Beauty"},
//   {id: 5, name: "Health"},
//   {id: 6, name: "Sports"},
//   {id: 7, name: "Automobile"},
//   {id: 8, name: "Food"},
//   {id: 9, name: "Toys"},
//   {id: 10, name: "Books"},
//   {id: 11, name: "Others"},
// ]

const BlackFriday = () => {
  ReactGA.send({ hitType: "pageview", page: "/deals", title: "Explore Discounted Products" });
  
  const [activeTab, setActiveTab] = useState('business');
//   const location = useLocation()
    const [location, setLocation] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1)
  const num_per_page = 40
  const { createQueryString } = useCreateQueryString()

  useEffect(() => {
    const page = parseInt(searchParams.get('page'), 10) || 1; // Default to page 1
    setPage(page);
  }, [searchParams])

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("")
  const [filterBy, setFilterBy] = useState('')

  const timerRef = React.useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    const timer = setTimeout(() => {
      setFilter(search)
    }, 500);

    timerRef.current = timer;
  }, [search, location])

  const { data: products, error: errorProducts, isLoading, isFetching, isPreviousData }  = useFetch({
    api: apiGetBlackFridayProducts,
    param: { page, num_per_page, search: filter, category: filterBy },
    key: ['products', page, filter, filterBy],
  })

  const { data: categories }  = useFetch({
    api: apiGetProductCategories,
    select: (data) => data,
    key: ['products', 'categoryapi'],
  })

  const handlePageChange = (page) => {
      // setPage(page)
      createQueryString({ page })

      window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  }


  return (
    <div className='relative w-full pt-8'>
        <SEO
          title="Discounted Products - Yenreach"
          description="Explore a diverse range of products available on Yenreach. Search by category, brand, or location to find what you need."
          name="Yenreach"
          type="products"
        />
        <Header />
        <div className="flex flex-col items-center justify-center gap-4 px-5 py-5 md:py-5 md:px-5 lg:py-20 lg:px-20 mt-12 md:mt-20 lg:mt-4">
        <>        
          {(isLoading || (isPreviousData && isFetching)) && <Loader loader={4} />}
           {/* Hero Section */}
            <div className="relative w-full text-center py-6 bg-gradient-to-r from-orange-500 to-red-600">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">🔥 Yenreach Mega Deals 🔥</h1>
                <p className="text-lg">Up to 70% OFF - Limited Time Only</p>
                {/* <div className="inline-block bg-black/10 px-6 py-3 rounded-lg text-2xl font-bold">
                  <Countdown date={Date.now() + 1000 * 60 * 60 * 24 * 2} /> 2 days from now
                </div> */}
            </div>

          {/* <h2 className='text-2xl font-medium text-orange mb-4'>Learn about the yenreach marketplace</h2> */}
          {/* <div className='flex items-center justify-center w-full gap-10'>
            <p className='text-xs font-medium text-black/70 md:text-sm'>Currently Exploring products in</p>
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-light">
              <img src={Location} alt="location" />
              <span className='font-medium text-smm'>Bayelsa, Yenegoa</span>
            </div>
          </div> */}
          <Input onChange={(e) => setSearch(e.target.value)} value={search} variant='product' type="text" name="search" id="search" placeholder='search products' className='w-full flex max-w-md rounded-lg' />
          <div className="flex flex-col gap-1 md:gap-4 md:flex-row">
            {/* <form action="" onSubmit={() => ''} method="post" className='flex'> */}
              {/* <Input onChange={(e) => setLocation(e.target.value)} value={location} variant='product' type="text" name="location" id="location" placeholder='location' className='border-l-0 border-r-0' /> */}
              {/* <Button type="submit" variant='product' className='px-3 py-3 rounded-tr-md rounded-br-md'>
                <img src={Search} alt="search icon" className='w-6 h-6' />
              </Button> */}
            {/* </form> */}
            {/* <select className='p-2 text-base border-2 rounded-md cursor-pointer font- border-orange text-black/50' value={filterBy} onChange={(e) => setFilterBy(e.target.value)} name="filter" id="">
                <option value="" className=''>Filter By</option>
                {categories?.data?.map((category, idx) => (
                  <option key={idx} value={category.id}>{category.category}</option>
                ))}
            </select> */}
          </div>
          {/* <div className="w-full bg-[url('assets/new-job-listing.svg')] text-white rounded-2xl font-semibold text-xl grid place-items-center bg-cover bg-center py-6">
            New Job Listings available       
          </div> */}
          {products?.data?.length ?
            <>        
              {products?.data?.length ?
                <>        
                  <div className="grid w-full grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
                    {products?.data && products?.data?.map((product) => (
                      <SalesProductCard key={product.id} product={product} />
                    ))}
                  </div>
                  <Pagination 
                    page={page} 
                    num_per_page={num_per_page} 
                    data={products?.data} 
                    handlePageChange={handlePageChange} 
                    total={products?.total} 
                    totalPages={products?.totalPages}
                  />
                </>
              : 
                <div className='flex items-center justify-center h-24 text-black/70'>
                  No deals Available for this search
                </div>
              }
            </>
          : 
            <div className='flex items-center justify-center h-24 text-black/70'>
              No deals Available yet
            </div>
          }
        </>
        </div>
        <Footer />
    </div>
  )
}   

export default BlackFriday