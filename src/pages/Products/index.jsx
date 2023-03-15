import React, { useRef } from 'react'
import useFetch from '/src/hooks/useFetch'
import { useParams } from 'react-router-dom'
import { apiGetProduct } from '/src/services/ProductService'
import Button from '/src/components/ui/Button'
import Header from '/src/components/Header'
import Footer from '/src/components/Footer'
import Loader from '/src/components/Loader'


const Product = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const { id } = useParams()

  // const { data: product, error: errorProduct, isLoading } = useFetch({
  //   api: apiGetProduct,
  //   param: id,
  //   key: ['product', id],
  // })
  
  // console.log("product", product, "error", errorProduct, "isLoading", isLoading)

  return (
      <>
        <Header />
        {/* {isLoading && <Loader loader={4} />} */}

        <div className='mt-24 mb-10'>
            <section className='py-4 md:pt-8 sm:py-6 px-4 md:px-10 lg:px-20 mb-8'>
                <h1 className='text-2xl font-medium mb-2'>Toyota V8 Engine</h1>
                <p className='text-2xl text-black/90 mb-6'>N100,000</p>
                <div className='flex items-center gap-1'>
                  <span >******</span>
                    <span>stars</span>
                    <span>(3.5 stars) • 10 reviews</span>
                </div>
            </section>
            <section className='py-4 sm:py-6 px-4 md:px-10 lg:px-20 mb-8 flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12'>
                <div className='flex-1 w-full bg-gray min-h-[160px]'>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className='flex-1 w-full'>
                    <h2 className='font-medium mb-3 text-base'>Product Description</h2>
                    <p className='text-sm mb-12'>
                    Lorem ipsum dolor sit amet consectetur. Elementum amet egestas nulla nisl et lectus tellus amet. Eget tincidunt et ut non. Viverra dui hendrerit viverra turpis. Imperdiet fringilla malesuada id id nibh purus sed mauris et. Donec duis.
                    </p>
                    <div className='flex flex-col text-xs mb-12'>
                        <span className='font-medium'>Listed By</span>
                        <span className='text-sm text-gray'>David Mechanic Shop</span>
                    </div>
                    <Button variant='product' className='py-2 px-28 w-full text-xs'>
                        Contact Seller
                    </Button>
                </div>
            </section>
            <section className='py-4 sm:py-6 px-4 md:px-10 lg:px-20 mb-32'>
            <h2 className='text-xl text-orange font-semibold mb-2'>Other Related Products</h2>
            <div className='grid grid-cols-bus1 sm:grid-cols-bus2 md:grid-cols-3 xl:grid-cols-bus4 gap-6'>
              {/* {relatedBusinesses?.map((business, index) => 
                // <BusinessCard key={business.id} business={business} />
              )} */}
              </div>
          </section>
        
        </div>
        <Footer />
      </>
  )
}

export default Product