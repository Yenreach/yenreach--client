import React, { useState } from 'react'
import ProductCard from '../ui/ProductCard'
import Loader from '../Loader'
import useFetch from '/src/hooks/useFetch'
import SearchBar from '../ui/SearchBar'
import Location from '../../assets/location.svg'
import Pagination from '../Pagination'
import { apiGetAllProducts } from '../../services/ProductService'
import { paginate } from '../../utils/pagination'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Search from '/src/assets/search.svg'
import SEO from '../SEO'


const Products = ({ page: initialPage, num_per_page }) => {
  const [page, setPage] = useState(initialPage || 1)
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")
  const [useFilter, setUseFilter] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filteredProductsLoading, setFilteredProductsLoading] = useState(false)

  const handleFilter = (e) => {
    e.preventDefault()
    console.log("SEARCHING", search)
    setFilteredProductsLoading(true)
    const value = search
    const filtered = products?.data?.filter((item) => {
      return Object.keys(item).some((key) => {
        if (Array.isArray(item[key])) {
            const filtered = item[key]?.filter((item) => {
              return Object.keys(item).some((key) => {
                return item[key]?.toString().toLowerCase().includes(value?.toLowerCase());
              });
            });
        }
        return item[key]?.toString().toLowerCase().includes(value?.toLowerCase());
      });
    });
    setFilteredProductsLoading(false)
    setFilteredProducts(filtered);

    if (!useFilter) {
      setUseFilter(true)
    }
  };


  const { data: products, error: errorProducts, isLoading }  = useFetch({
    api: apiGetAllProducts,
    param: { page, num_per_page },
    select: (data) => data,
    key: ['products', page],
  })


  console.log({ products })

  const handlePageChange = (page) => {
      setPage(page)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  }



  return (
    <>        
      {(isLoading || filteredProductsLoading) && <Loader loader={4} />}
      <SEO
          title="Explore Products - Yenreach"
          description="Explore a diverse range of products available on Yenreach. Search by category, brand, or location to find what you need."
          name="Yenreach"
          type="products"
      />
      <div className='flex items-center justify-center w-full gap-10'>
        <p className='font-medium text-black/70 text-xs md:text-sm'>Currently Exploring products in</p>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-light">
          <img src={Location} alt="location" />
          <span className='font-medium text-smm'>Bayelsa, Yenegoa</span>
        </div>
      </div>
      <form action="" onSubmit={handleFilter} method="post" className='flex'>
        <Input onChange={(e) => setSearch(e.target.value)} value={search} variant='product' type="text" name="product" id="product" placeholder='product' className='rounded-tl-md rounded-bl-md' />
        <Input onChange={(e) => setLocation(e.target.value)} value={location} variant='product' type="text" name="location" id="location" placeholder='location' className='border-l-0 border-r-0' />
        <Button type="submit" variant='product' className='px-4 py-4 rounded-tr-md rounded-br-md'>
          <img src={Search} alt="search icon" className='w-12' />
        </Button>
		  </form>
      {/* <div className="w-full bg-[url('assets/new-job-listing.svg')] text-white rounded-2xl font-semibold text-xl grid place-items-center bg-cover bg-center py-6">
        New Job Listings available       
      </div> */}
      {products?.data?.length ?
        <>        
          {(useFilter ? filteredProducts?.length : products?.data?.length) ?
            <>        
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products && paginate({ page, num_per_page, data: useFilter ? filteredProducts : products?.data })?.data?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <Pagination 
                page={page} 
                num_per_page={num_per_page} 
                data={(useFilter ? filteredProducts : products?.data)} 
                handlePageChange={handlePageChange} 
                total={useFilter ? filteredProducts?.length : products?.total} 

              />
            </>
          : 
            <div className='flex justify-center items-center h-24 text-black/70'>
              No products Available for this search
            </div>
          }
        </>
      : 
        <div className='flex justify-center items-center h-24 text-black/70'>
          No products Available yet
        </div>
      }
    </>
  )
}
export default Products