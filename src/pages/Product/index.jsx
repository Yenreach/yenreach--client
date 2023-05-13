import React, { useRef, useState } from 'react'
import useFetch from '/src/hooks/useFetch'
import { useParams } from 'react-router-dom'
import { apiGetProduct, apiGetRelatedProducts } from '/src/services/ProductService'
import { apiGetOneBusiness } from '/src/services/CommonService' 
import Button from '/src/components/ui/Button'
import Header from '/src/components/Header'
import Footer from '/src/components/Footer'
import Loader from '/src/components/Loader'
import ProductCard from '/src/components/ui/ProductCard'
import SellerDetailsModal from './SellerDetailsModal'
import FullImage from '../../components/FullImage'



const Product = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [image, setImage] = useState('')
  
  const { id } = useParams()

  const { data: product, error: errorProduct, isLoading } = useFetch({
    api: apiGetProduct,
    param: id,
    key: ['product', id],
  })

  const { data: relatedProducts, error: errorRelatedProducts } = useFetch({
    api: apiGetRelatedProducts,
    param: id,
    key: ['relatedProduct', id],
  })
  
  const { data: business, error: errorBusiness, isLoading: businessLoading } = useFetch({
    api: apiGetOneBusiness,
    param: product?.business_string,
    key: ['business', product?.business_string],
    enabled: !!product?.business_string,
  })
  // console.log("relatedProducts", relatedProducts)
  // console.log("pro", product)

  const handleImageClick = (image) => {
    setImage(image)
    setImageModalOpen(true)
  }
  return (
      <>
        <Header />
        {isLoading && <Loader loader={4} />}
        {imageModalOpen && (
         <FullImage  setImageModalOpen={setImageModalOpen} image={image} />
          )}
        <div className='mt-24 mb-10'>
            <section className='py-4 md:pt-8 sm:py-6 px-4 md:px-10 lg:px-20 mb-8'>
                <h1 className='text-2xl font-medium mb-2'>{product?.product_name}</h1>
                <p className='text-xl text-black/80 font-light mb-6'>₦{product?.product_price}</p>
                {/* <div className='flex items-center gap-1'>
                  <span >******</span>
                    <span>stars</span>
                    <span>(3.5 stars) • 10 reviews</span>
                </div> */}
            </section>
            <section className='py-4 sm:py-6 px-4 md:px-10 lg:px-20 mb-8 flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 h-[400px] overflow-hidden'>
                <div className='flex-1 w-full h-full bg-gray-light overflow-hidden relative'>
                    <img onClick={() => handleImageClick(product?.photos[0]?.filename)} src={product?.photos[0]?.filename} alt="" className='w-full h-full object-cover cursor-pointer' />
                    {`click to view image`}
                    <span
                      onClick={() => handleImageClick(product?.photos[0]?.filename)}
                      className='absolute bottom-0 left-0 w-full h-12 bg-black/50 flex justify-center items-center text-white text-sm cursor-pointer'
                     >
                      View Full Image
                    </span>
                </div>
                <div className='flex-1 w-full h-full flex flex-col justify-between'>
                  <div>
                      <h2 className='font-medium mb-3 text-base'>Product Description</h2>
                      <p className='text-sm mb-12'>
                      {product?.product_description}
                      </p>
                  </div>
                  <div className='flex flex-col text-xs mb-12'>
                      <span className='font-medium'>Listed By</span>
                      <span className='text-sm text-gray'>{business?.name}</span>
                  </div>
                    <Button variant='product' className='py-2 px-28 w-full text-xs ' onClickFunc={() => setModalOpen(true)}>
                        Contact Seller
                    </Button>
                </div>
            </section>
            {product?.photos?.length > 1 && 
              <section className='py-4 sm:py-6 px-4 md:px-10 lg:px-20 mb-8 overflow-hidden'>
                  <h2 className='font-medium mb-3 text-base text-orange'>More Photos</h2>
                  <div className='flex flex-wrap md:flex-row gap-4 md:gap-8 lg:gap-12'>
                  {product?.photos.slice(1)?.map((photo) => (
                      <div key={photo?.filename} className='bg-gray rounded-lg w-36 h-36 overflow-hidden relative'>
                          <img src={photo?.filename} alt="" className='object-cover w-full h-full' />
                          <span
                            onClick={() => handleImageClick(photo?.filename)}
                            className='absolute bottom-0 left-0 w-full h-8 bg-black/50 flex justify-center items-center text-white text-xs cursor-pointer'
                          >
                            View Full Image
                          </span>
                      </div>
                    ))}
                  </div>
              </section>
            }
            {relatedProducts?.length > 0 &&  
              <section className='py-4 sm:py-6 px-4 md:px-10 lg:px-20 mb-32'>
                <h2 className='text-xl text-orange font-semibold mb-2'>Other Related Products</h2>
                <div className='grid grid-cols-bus1 sm:grid-cols-bus2 md:grid-cols-3 xl:grid-cols-bus4 gap-6'>
                  {relatedProducts?.map((product, index) => 
                    <ProductCard key={product.id} product={product} />
                  )}
                  </div>
              </section>
            }
        </div>
        <Footer />
        {modalOpen && <SellerDetailsModal data={business} modalOpen={modalOpen} setModalOpen={setModalOpen} />}
      </>
  )
}

export default Product