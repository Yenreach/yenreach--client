import React, { useRef } from 'react'
import useFetch from '/src/hooks/useFetch'
import usePost from '/src/hooks/usePost'
import { useParams, Link, useLocation } from 'react-router-dom'
import { apiGetOneBusiness, apiGetBusinessCategories, apiGetBusinessWorkingHours, apiGetBusinessBranches, apiGetRelatedBusinesses, apiGetBusinessSubscription, apiGetBusinessSubscriptionByString, apiGetBusinessReviews, apiGetBusinessReviewsStats, apiAddPageVisit, apiGetCookie } from '/src/services/CommonService'
import { apiGetAllBusinessProducts } from '/src/services/ProductService'
import BusinessCard from '/src/components/ui/BusinessCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
import Button from '../../components/ui/Button'
import BusinessReviewModal from '../../components/ui/BusinessReviewModal'
import StarFilled from '../../assets/businesses/starfilled.svg'
import Product3 from '../../assets/businesses/product-3.svg'
import Star from '/src/assets/star.svg'
import Mail from '../../assets/mail.svg'
import Map from '../../assets/map.svg'
import Image from '/src/components/Image';
import { useAuthContext } from '/src/hooks/useAuthContext'
import { getCookie, setCookie } from '../../utils/cookie'
import { expired, formatDate } from '/src/utils/dateFunc'



const index = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const { id } = useParams()
  const reviewsContainerRef = useRef(null)
  const { user } = useAuthContext()
  const location = useLocation()

  const addPageVisitMutation = usePost({ 
    api: apiAddPageVisit, 
    showSuccessMessage: false,
    showErrorMessage: false,
  })



  const { data: business, error: errorBusiness, isLoading } = useFetch({
    api: apiGetOneBusiness,
    param: id,
    key: ['business', id],
  })
// console.log("business", business, formatDate(business?.created))
  const { data: cookie } = useFetch({
    api: apiGetCookie,
    key: ['cookie'],
    enabled: !user?.verify_string,
  })

  const {  error: errorProducts, data: products, refetch: refetchProducts, remove: removeProductsCache } = useFetch({
    key: ['userProducts', id],
    api: apiGetAllBusinessProducts,
    param: id,
  })

  const { data: categories, error: errorCategories } = useFetch({
    api: apiGetBusinessCategories,
    param: id,
    key: ['categories', id],
  })

  
  const { data: reviews, error: errorReviews } = useFetch({
    api: apiGetBusinessReviews,
    param: id,
    key: ['reviews', id],
  })
  
  const { data: reviewsStats, error: errorReviewsStats } = useFetch({
    api: apiGetBusinessReviewsStats,
    param: id,
    key:['reviewsStats', id],
  })


  const { data: workingHours, error: errorWorkingHours } = useFetch({
    api: apiGetBusinessWorkingHours,
    param: id,
    key: ['workingHours', id],
  })
  const { data: branches, error: errorBranches } = useFetch({
    api: apiGetBusinessBranches,
    param: id,
    key: ['branches', id],
  })
  const { data: relatedBusinesses, error: errorRelatedBusinesses } = useFetch({
    api: apiGetRelatedBusinesses,
    param: id,
    key: ['relatedBusinesses', id],
  })
  const { data: businessSubscription, error: errorBusinessSubscription} = useFetch({
    api: apiGetBusinessSubscription,
    param: id,
    key: ['businessSubscription', id],
  })
  
  const { data: businessSubscriptionDetails, error: errorBusinessSubscriptionDetails,} = useFetch({
    api: apiGetBusinessSubscriptionByString,
    param: businessSubscription?.subscription_string,
    key: ['businessSubscriptionDetails', businessSubscription?.subscription_string],
    enabled: !!businessSubscription?.subscription_string,
  })


  const nextReview = () => {
    if(reviewsContainerRef.current?.children?.length > 0){
      reviewsContainerRef.current.scrollLeft += reviewsContainerRef.current?.children[0]?.clientWidth
    }
  }
  const prevReview = () => {
    if(reviewsContainerRef.current?.children?.length > 0){
      reviewsContainerRef.current.scrollLeft -= reviewsContainerRef.current?.children[0]?.clientWidth
    }
  }

  React.useEffect(() => {
    const addPageVisit = (user_string) => {
      addPageVisitMutation.mutate({
        business_string: id,
        user_string: user_string
      })
    }
    if (user) {
      addPageVisit(user?.verify_string)
    } else {
      const saved_cookie = getCookie('yenreach')
      if (saved_cookie) {
        const cookieData = JSON.parse(saved_cookie)
        addPageVisit(cookieData?.user_string)
      } else if (cookie) {
        addPageVisit(cookie?.cookie)
        setCookie('yenreach', JSON.stringify({ user_string: cookie?.cookie }), 1)
      }
    }
  }, [cookie, user, id])

  // console.log("business", cookie, user)
  return (
      <>
        <Header />
        {isLoading && <Loader loader={4} />}
        {business && 
        <>
          <div className={`top mb-10 py-16 sm:py-12 px-4 md:px-10 lg:px-20 relative ${business?.cover_img ? "" : 'bg-[url("assets/businesses/business-hero.svg")]'} bg-cover bg-center text-white flex items-center gap-5`}>
             {business?.cover_img && <img src={business?.profile_img.replace("mediatoken", "media&token")} alt="" className='absolute left-0 top-0 w-full h-full -z-10' />}
            <Image
                url={business?.profile_img}
                name={business?.name}
                alt={business?.name}
                className='w-16 h-16 md:w-24 md:h-24 object-cover rounded-full'
                data={business}
               />
            <div className=''>
              <h2 className='text-lg sm:text-xl font-medium mb-2 sm:mb-1'>{business.name}</h2>
              <div className='flex items-center gap-0.5'>
                <img src={StarFilled} alt="" className='w-3 xs:w-4 md:w-5' />
                <img src={StarFilled} alt="" className='w-3 xs:w-4 md:w-5' />
                <img src={StarFilled} alt="" className='w-3 xs:w-4 md:w-5' />
                <img src={StarFilled} alt="" className='w-3 xs:w-4 md:w-5' />
                <img src={StarFilled} alt="" className='w-3 xs:w-4 md:w-5' />
                <span className='self-end ml-2 text-xs'>4.7 star rating</span>
              </div>
            </div>
          </div>
          <section className='px-4 md:px-10 lg:px-20 mb-20 relative'>
            <div className='sm:w-4/5 md:w-2/3 lg:w-3/5 max-w-md xl:max-w-xl'>
              <h2 className='text-lg text-green2 font-semibold mb-1'>About Business</h2>
              <p className='text-[#476788] text-xs sm:text-sm mb-4'>
                {business.description}
              </p>
              {categories && <h3 className='text-green2 font-medium mb-1'>Tags</h3>}
              <div className='flex items-center flex-wrap gap-3 text-xs text-white md:w-7/8 mb-16'>
                {categories?.map((category, index) => 
                  <span key={index} className='bg-green2 rounded-full px-3 sm:px-4 py-2'>{category?.category}</span>
                )}
              </div>
              <div className='lg:absolute top-0 right-24 lg:max-w-[396px]'>
                <h2 className='text-lg text-green2 font-semibold mb-2'>Business Info</h2>
                <div className='gap-1 mb-20 grid grid-cols-business-info text-sm'>
                  <span className='px-5 p-3 border-2 border-gray flex items-center justify-between opacity-90'>
                    {business.website || business.whatsapp || 'No website'}
                    <img src={Mail} alt="" />
                  </span>
                  <span className='px-5 p-3 border-2 border-gray flex items-center justify-between opacity-90'>
                    {business.email}
                    <img src={Mail} alt="" />
                  </span>
                  <span className='px-5 p-3 border-2 border-gray flex items-center justify-between opacity-90'>
                    {business.phonenumber}
                    <img src={Mail} alt="" />
                  </span>
                  <div className='px-5 p-3 border-2 border-gray flex flex-col gap-3 opacity-90'>   
                    <span className='flex items-start justify-between opacity-90'>
                      <span className='w-4/5'>
                       {business.address}, {business.lga} LGA, {business.state} State
                      </span>
                      <img src={Mail} alt="" />
                    </span>
                    <img src={Map} alt="" className='w-full object-cover object-center' />
                  </div>
                </div>
              </div>
              <h2 className='text-lg text-green2 font-semibold mb-4'>Photos</h2>
              <div className='flex flex-wrap gap-4 mb-10'>
                {business?.photos?.length ? business?.photos?.map((photo, index) => <img key={index} src={photo?.filepath} alt="" className='h-20 w-24 object-cover' />) 
                : <span className='text-[#476788] text-xs sm:text-sm'>No photos</span>
                }
                {/* <img src={Photo1}  alt="" className='h-20' />
                <img src={Photo2} alt="" className='h-20' />
                <img src={Photo3} alt="" className='h-20' /> */}
              </div>
              <h2 className='text-lg text-green2 font-semibold mb-4'>Products</h2>
              <div className='flex flex-wrap gap-4 mb-10'>
              {products?.length ? products?.map((product, index) => <img key={index} src={product?.photos[0]?.filename} alt="" className='h-20 w-24 object-cover bg-black/20 shadow' />) 
                : <span className='text-[#476788] text-xs sm:text-sm'>No Products</span>
                }
                {/* <img src={Product1} alt="" className='h-20' />
                <img src={Product2} alt="" className='h-20' />
                <img src={Product3} alt="" className='h-20' /> */}
              </div>
              {reviews && 
              <>
              <h2 className='text-lg text-green2 font-semibold mb-3'>Reviews</h2>              
              <div className='py-2 pb-14 relative mb-5 max-w-lg'>
                <div className='p-4 bg-[#68888f21] rounded-xl'>
                  <div ref={reviewsContainerRef} className='flex w-full overflow-hidden gap-2'>
                    {reviews?.map((review, index) => 
                      <div key={index} className='border-2 border-black/10 rounded-xl p-5 px-5 bg-green2 text-white min-w-[250px] max-w-[300px] overflow-hidden'>
                        <div className='flex items-center gap-2 mb-3'>
                          <img src={Star} alt="" />
                          <span className='text-sm'>{review.user}</span>
                        </div>
                        <p className='text-xsm text-white'>
                          {review.review}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className='flex items-end gap-4 absolute bottom-2 right-0'>
                  <Button onClickFunc={prevReview} override={true} className='rounded px-5 py-1.5'>
                    Previous
                  </Button>
                  <Button onClickFunc={nextReview} className='rounded px-5 py-1.5'>
                    Next
                  </Button>
                </div>
              </div>
              </>}
              {modalOpen &&  <BusinessReviewModal setModalOpen={setModalOpen} modalOpen={modalOpen} user={user} business_string={id} />} 
              {user ? 
                <button onClick={() => setModalOpen(true)} className='text-smm text-green opacity-70 underline cursor-pointer'>
                  Write a review
                </button>
              : <Link to="/login"  state={{from: location}} className='text-smm text-green opacity-70 underline cursor-pointer'>
                  Login to Write a review
                </Link>
              }
              {/* Review modal*/}
            </div>
          </section>
          <section className='py-4 sm:py-6 px-4 md:px-10 lg:px-20 border-t-2 border-gray mb-32'>
            <h2 className='text-lg text-green2 font-semibold mb-2'>People also viewed</h2>
            <div className='grid grid-cols-bus1 sm:grid-cols-bus2 md:grid-cols-3 xl:grid-cols-bus4 gap-6'>
              {relatedBusinesses?.map((business, index) => 
                <BusinessCard key={business.id} business={business} />
              )}
              </div>
          </section>
        </>}
        <Footer />
      </>
  )
}

export default index