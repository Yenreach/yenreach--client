import React from 'react'
import ProductCard from '../ui/ProductCard'

const index = () => {
  return (
    <>
      <div className="w-full bg-[url('assets/new-job-listing.svg')] text-white rounded-2xl font-extrabold text-xl grid place-items-center bg-cover bg-center py-6">
        New Job Listings available       
      </div>
      <ProductCard />
    </>
  )
}

export default index