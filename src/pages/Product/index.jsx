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
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BsTelephone, BsWhatsapp } from 'react-icons/bs'



const Product = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [image, setImage] = useState('')
  const nameRef = useRef()
  const { id } = useParams()

  const focus = () => {
    console.log(nameRef.current)
    nameRef?.current?.focus()
  }

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

  // console.log({ relatedProducts })
  
  const { data: business, error: errorBusiness, isLoading: businessLoading } = useFetch({
    api: apiGetOneBusiness,
    param: product?.business_string,
    key: ['business', product?.business_string],
    enabled: !!product?.business_string,
  })
  // console.log("relatedProducts", relatedProducts)
  // console.log("pro", business)

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
            <section className='px-4 py-4 mb-8 md:pt-8 sm:py-6 md:px-10 lg:px-20'>
                <h1 className='mb-2 text-2xl font-medium'>{product?.product_name}</h1>
                <p className='mb-6 text-xl font-light text-black/80'>₦{product?.product_price}</p>
                {/* <div className='flex items-center gap-1'>
                  <span >******</span>
                    <span>stars</span>
                    <span>(3.5 stars) • 10 reviews</span>
                </div> */}
            </section>
            <section className='py-4 sm:py-6 px-4 md:px-10 lg:px-20 mb-8 flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 h-[400px] overflow-hidden'>
                <div className='relative flex-1 w-full h-full overflow-hidden bg-gray-light'>
                    <img onClick={() => handleImageClick(product?.photos[0]?.filename)} src={product?.photos[0]?.filename} alt="" className='object-cover w-full h-full cursor-pointer' />
                    {`click to view image`}
                    <span
                      onClick={() => handleImageClick(product?.photos[0]?.filename)}
                      className='absolute bottom-0 left-0 flex items-center justify-center w-full h-12 text-sm text-white cursor-pointer bg-black/50'
                     >
                      View Full Image
                    </span>
                </div>
                <div className='flex flex-col justify-between flex-1 w-full h-full'>
                  <div>
                      <h2 className='mb-3 text-base font-medium'>Product Description</h2>
                      <p className='mb-12 text-sm'>
                      {product?.product_description}
                      </p>
                  </div>
                  <div className='flex flex-col mb-12 text-xs'>
                      <span className='font-medium'>Listed By</span>
                      <span className='text-sm text-gray'>{business?.name}</span>
                  </div>
                    <Button variant='product' className='w-full py-2 text-xs px-28' onClickFunc={focus}>
                      Seller Details
                    </Button>
                </div>
            </section>
            <section id='contact' className='px-4 py-4 mb-8 overflow-hidden sm:py-6 md:px-10 lg:px-20'>
              <h2 className='mb-3 text-base font-semibold text-orange'>Contact Details</h2>
              <div className='flex flex-col flex-wrap gap-4 md:flex-row md:gap-x-12'>
                <div ref={nameRef} tabIndex="0">
                    <p className='text-xs text-black/60'>Name</p>
                    <p className='text-sm font-semibold'>{business?.name}</p>
                </div>
                <div>
                    <p className='text-xs text-black/60'>Email</p>
                    <p className='text-sm font-semibold'>
                      <a target='_blank' className='flex items-center gap-2' href={`mailto:${business?.email}`}>
                        <AiOutlineMail />
                        {business?.email}
                      </a>
                    </p>
                </div>
                <div>
                    <p className='text-xs text-black/60'>Phone Number</p>
                    <p className='text-sm font-semibold'>
                      <a target='_blank' className='flex items-center gap-2' href={`tel:${business?.phonenumber}`}>
                        <BsTelephone className='text-xs' />
                        {business?.phonenumber}
                      </a>
                    </p>
                </div>
                <div>
                    <p className='text-xs text-black/60'>Whatsapp</p>
                    <p className='text-sm font-semibold'>
                      <a target='_blank' className='flex items-center gap-2' href={`https://wa.me/${business?.phonenumber?.slice(1, -1)}`}>
                        <BsWhatsapp />
                        +234{business?.phonenumber?.slice(1, -1)}
                      </a>
                    </p>
                </div>
                <div>
                    <p className='text-xs text-black/60'>Address</p>
                    <p className='text-sm font-semibold'>{business?.address} {business?.state}</p>
                </div>
              </div>
            </section>
            {product?.photos?.length > 1 && 
              <section className='px-4 py-4 mb-8 overflow-hidden sm:py-6 md:px-10 lg:px-20'>
                  <h2 className='mb-3 text-base font-medium text-orange'>More Photos</h2>
                  <div className='flex flex-wrap gap-4 md:flex-row md:gap-8 lg:gap-12'>
                  {product?.photos.slice(1)?.map((photo) => (
                      <div key={photo?.filename} className='relative overflow-hidden rounded-lg bg-gray w-36 h-36'>
                          <img src={photo?.filename} alt="" className='object-cover w-full h-full' />
                          <span
                            onClick={() => handleImageClick(photo?.filename)}
                            className='absolute bottom-0 left-0 flex items-center justify-center w-full h-8 text-xs text-white cursor-pointer bg-black/50'
                          >
                            View Full Image
                          </span>
                      </div>
                    ))}
                  </div>
              </section>
            }
            {relatedProducts?.length > 0 &&  
              <section className='px-4 py-4 mb-32 sm:py-6 md:px-10 lg:px-20'>
                <h2 className='mb-2 text-xl font-semibold text-orange'>Other Related Products</h2>
                <div className='grid gap-6 grid-cols-bus1 sm:grid-cols-bus2 md:grid-cols-3 xl:grid-cols-bus4'>
                  {relatedProducts?.slice(0,4)?.map((product, index) => 
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