import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '/src/components/Header'
import Footer from '/src/components/Footer'
import ExploreNav from '/src/components/ExploreNav'
import ProductCard from '/src/components/ui/ProductCard'
import Loader from '/src/components/Loader'
import useFetch from '/src/hooks/useFetch'
import Location from '/src/assets/location.svg'
import Pagination from '/src/components/Pagination'
import { apiGetAllProducts, apiGetProductCategories } from '/src/services/ProductService'
import Button from '/src/components/ui/Button'
import Input from '/src/components/ui/Input'
import Search from '/src/assets/search.svg'
import ReactGA from "react-ga4";
import SEO from '../../../components/SEO'
import useCreateQueryString from '../../../hooks/useCreateQueryString'


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

const ExploreProducts = () => {
  ReactGA.send({ hitType: "pageview", page: "/explore/products", title: "Explore Products View" });
  
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
    api: apiGetAllProducts,
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
    <div className='relative w-full'>
        <SEO
          title="Explore Products - Yenreach"
          description="Explore a diverse range of products available on Yenreach. Search by category, brand, or location to find what you need."
          name="Yenreach"
          type="products"
        />
        <Header />
        <ExploreNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-col items-center justify-center gap-4 px-5 py-5 md:py-5 md:px-5 lg:py-20 lg:px-20 mt-12 md:mt-20 lg:mt-4">
        <>        
          {(isLoading || (isPreviousData && isFetching)) && <Loader loader={4} />}
          <div className='flex items-center justify-center w-full gap-10'>
            <p className='text-xs font-medium text-black/70 md:text-sm'>Currently Exploring products in</p>
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-light">
              <img src={Location} alt="location" />
              <span className='font-medium text-smm'>Bayelsa, Yenegoa</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 md:gap-4 md:flex-row">
            <form action="" onSubmit={() => ''} method="post" className='flex'>
              <Input onChange={(e) => setSearch(e.target.value)} value={search} variant='product' type="text" name="product" id="product" placeholder='product' className='rounded-tl-md rounded-bl-md' />
              <Input onChange={(e) => setLocation(e.target.value)} value={location} variant='product' type="text" name="location" id="location" placeholder='location' className='border-l-0 border-r-0' />
              <Button type="submit" variant='product' className='px-4 py-4 rounded-tr-md rounded-br-md'>
                <img src={Search} alt="search icon" className='w-12' />
              </Button>
            </form>
            <select className='p-2 text-base border-2 rounded-md cursor-pointer font- border-orange text-black/50' value={filterBy} onChange={(e) => setFilterBy(e.target.value)} name="filter" id="">
                <option value="" className=''>Filter By</option>
                {categories?.data?.map((category, idx) => (
                  <option key={idx} value={category.id}>{category.category}</option>
                ))}
            </select>
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
                      <ProductCard key={product.id} product={product} />
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
                  No products Available for this search
                </div>
              }
            </>
          : 
            <div className='flex items-center justify-center h-24 text-black/70'>
              No products Available yet
            </div>
          }
        </>
        </div>
        <Footer />
    </div>
  )
}   

export default ExploreProducts