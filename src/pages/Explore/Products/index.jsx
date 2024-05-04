import React, { useState, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import Header from '/src/components/Header'
import Footer from '/src/components/Footer'
// import Product from '/src/components/Product'
import ExploreNav from '/src/components/ExploreNav'
import ProductCard from '/src/components/ui/ProductCard'
import Loader from '/src/components/Loader'
import useFetch from '/src/hooks/useFetch'
import Location from '/src/assets/location.svg'
import Pagination from '/src/components/Pagination'
import { apiGetAllProducts, apiSortProducts, apiGetProductCategory } from '/src/services/ProductService'
import { paginate } from '/src/utils/pagination'
import Button from '/src/components/ui/Button'
import Input from '/src/components/ui/Input'
import Search from '/src/assets/search.svg'

const categories = [
  {id: 1, name: "Electronics"},
  {id: 2, name: "Fashion"},
  {id: 3, name: "Home"},
  {id: 4, name: "Beauty"},
  {id: 5, name: "Health"},
  {id: 6, name: "Sports"},
  {id: 7, name: "Automobile"},
  {id: 8, name: "Food"},
  {id: 9, name: "Toys"},
  {id: 10, name: "Books"},
  {id: 11, name: "Others"},
]

const ExploreProducts = () => {
  const [activeTab, setActiveTab] = useState('business');
//   const location = useLocation()
    const [location, setLocation] = useState("")

  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1)
  const num_per_page = 40

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("")
  const [useFilter, setUseFilter] = useState(false)
  // const [filteredProducts, setFilteredProducts] = useState([])
  const [filteredProductsLoading, setFilteredProductsLoading] = useState(false)
  const [filterBy, setFilterBy] = useState('')

  const handleFilterChange = (e) => {
    e.preventDefault()
    setUseFilter(false)
    setFilter(search)
  }

  // const handleFilter = (e) => {
  //   e.preventDefault()
  //   console.log("SEARCHING", search)
  //   setFilteredProductsLoading(true)
  //   const value = search
  //   const filtered = products?.data?.filter((item) => {
  //     return Object.keys(item).some((key) => {
  //       if (Array.isArray(item[key])) {
  //           const filtered = item[key]?.filter((item) => {
  //             return Object.keys(item).some((key) => {
  //               return item[key]?.toString().toLowerCase().includes(value?.toLowerCase());
  //             });
  //           });
  //       }
  //       return item[key]?.toString().toLowerCase().includes(value?.toLowerCase());
  //     });
  //   });
  //   setFilteredProductsLoading(false)
  //   setFilteredProducts(filtered);

  //   if (!useFilter) {
  //     setUseFilter(true)
  //   }
  // };


  const { data: products, error: errorProducts, isLoading }  = useFetch({
    api: apiGetAllProducts,
    param: { page, num_per_page, search: filter },
    select: (data) => data,
    key: ['products', page, filter],
  })

  const { data: sortedProducts, error: errorSortedProducts, isLoading: sortProductsLoading }  = useFetch({
    api: apiSortProducts,
    param: { page, num_per_page, sort: filterBy },
    select: (data) => data,
    key: ['products', page, filterBy],
  })

  const { data: category }  = useFetch({
    api: apiGetProductCategory,
    select: (data) => data,
    key: ['products', 'categoryapi'],
  })

  // console.log({ category })

  useEffect(() => {
    if (filterBy) {
      setUseFilter(true)
    } else {
      setUseFilter(false)
    }
  }, [filterBy])

  // console.log({ products })

  const handlePageChange = (page) => {
      setPage(page)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  }


  return (
    <div className='relative w-full'>
        <Header />
        <ExploreNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-col items-center justify-center gap-4 px-5 py-5 md:py-5 md:px-5 lg:py-20 lg:px-20">
        <>        
      {(isLoading || filteredProductsLoading || sortProductsLoading) && <Loader loader={4} />}
      <div className='flex items-center justify-center w-full gap-10'>
        <p className='text-xs font-medium text-black/70 md:text-sm'>Currently Exploring products in</p>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-light">
          <img src={Location} alt="location" />
          <span className='font-medium text-smm'>Bayelsa, Yenegoa</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 md:gap-4 md:flex-row">
        <form action="" onSubmit={handleFilterChange} method="post" className='flex'>
          <Input onChange={(e) => setSearch(e.target.value)} value={search} variant='product' type="text" name="product" id="product" placeholder='product' className='rounded-tl-md rounded-bl-md' />
          <Input onChange={(e) => setLocation(e.target.value)} value={location} variant='product' type="text" name="location" id="location" placeholder='location' className='border-l-0 border-r-0' />
          <Button type="submit" variant='product' className='px-4 py-4 rounded-tr-md rounded-br-md'>
            <img src={Search} alt="search icon" className='w-12' />
          </Button>
        </form>
        <select className='p-2 text-base border-2 rounded-md cursor-pointer font- border-orange text-black/50' value={filterBy} onChange={(e) => setFilterBy(e.target.value)} name="filter" id="">
            <option value="" className=''>Filter By</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>{category.name}</option>
            ))}
          </select>
      </div>
      {/* <div className="w-full bg-[url('assets/new-job-listing.svg')] text-white rounded-2xl font-semibold text-xl grid place-items-center bg-cover bg-center py-6">
        New Job Listings available       
      </div> */}
      {products?.data?.length ?
        <>        
          {(useFilter ? sortedProducts?.data?.length : products?.data?.length) ?
            <>        
              <div className="grid w-full grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
                {products && paginate({ page, num_per_page, data: useFilter ? sortedProducts?.data : products?.data })?.data?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <Pagination 
                page={page} 
                num_per_page={num_per_page} 
                data={(useFilter ? sortedProducts?.data : products?.data)} 
                handlePageChange={handlePageChange} 
                total={useFilter ? sortedProducts?.total : products?.total} 
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