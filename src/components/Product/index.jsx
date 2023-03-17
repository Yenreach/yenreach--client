import React, { useState } from 'react'
import ProductCard from '../ui/ProductCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import SearchBar from '../ui/SearchBar'
import Location from '../../assets/location.svg'
import Pagination from '../Pagination'
import { useQuery } from '@tanstack/react-query'
import { apiGetAllProducts } from '../../services/ProductService'
import getData from '../../utils/getData'
import { paginate } from '../../utils/pagination'

const Products = ({ page: initialPage, num_per_page }) => {
  const [page, setPage] = useState(initialPage || 1)

  const { data: products, error: errorProducts } = useQuery({
    queryKey: ['products'],
    queryFn: () => getData(apiGetAllProducts),
  })

  // console.log("products", products, "error", errorProducts) 

  const handlePageChange = (page) => {
    setPage(page)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }

  return (
    <>
      <div className='flex items-center justify-center w-full gap-10'>
        <p className='font-medium text-black/70 text-xs md:text-sm'>Currently Exploring products in</p>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-light">
          <img src={Location} alt="location" />
          <span className='font-medium text-smm'>Bayelsa, Yenegoa</span>
        </div>
      </div>
      <SearchBar variant='product' />
      <div className="w-full bg-[url('assets/new-job-listing.svg')] text-white rounded-2xl font-semibold text-xl grid place-items-center bg-cover bg-center py-6">
        New Job Listings available       
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products && paginate({page, num_per_page, data: products})?.data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination page={page} num_per_page={num_per_page} data={products} handlePageChange={handlePageChange} />
    </>
  )
}

export default Products