import React, { useMemo, useRef, useState } from 'react'
import useFetch from '/src/hooks/useFetch'
import usePost from '/src/hooks/usePost'
import { useParams, Link, useLocation } from 'react-router-dom'
import { apiGetOneBusiness } from '/src/services/UserService'
import BusinessCard from '/src/components/ui/BusinessCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
import Button from '../../components/ui/Button'
import BusinessReviewModal from '../../components/ui/BusinessReviewModal'
import StarFilled from '../../assets/businesses/starfilled.svg'
import Star from '/src/assets/star.svg'
import Map from '../../assets/map.svg'
import Image from '/src/components/Image';
import { useAuthContext } from '/src/hooks/useAuthContext'
import { getCookie, setCookie } from '../../utils/cookie'
import FullImage from '/src/components/FullImage'
import { BsGlobe, BsInstagram, BsLinkedin, BsTelephone, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import ReactGA from "react-ga4";
import { MdEdit, MdOutlineLocationOn, MdOutlineMarkEmailUnread } from 'react-icons/md'
import { TbBrandFacebook } from 'react-icons/tb'
import SEO from '../../components/SEO'
import EditBusinessReview from '../../components/ui/BusinessReviewModal/EditReview'


const BusinessPage = () => {
  ReactGA.send({ hitType: "pageview", page: "/business", title: "Business Page View" });
  const [modalOpen, setModalOpen] = React.useState(false)
  const [editReviewModalOpen, setEditReviewModalOpen] = React.useState('')
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [image, setImage] = useState('')
  const { id } = useParams()
  const reviewsContainerRef = useRef(null)
  const { user } = useAuthContext()
  const location = useLocation()

  // const addPageVisitMutation = usePost({ 
  //   api: apiAddPageVisit, 
  //   showSuccessMessage: false,
  //   showErrorMessage: false,
  // })

  const handleImageClick = (image) => {
    setImage(image)
    setImageModalOpen(true)
  }

  const { data: business, error: errorBusiness, isLoading } = useFetch({
    api: apiGetOneBusiness,
    param: { id },
    key: ['business', id],
  })
// console.log({ business })
  // const { data: cookie } = useFetch({
  //   api: apiGetCookie,
  //   key: ['cookie'],
  //   enabled: !user?.id,
  // })

  // const {  error: errorProducts, data: products, refetch: refetchProducts, remove: removeProductsCache } = useFetch({
  //   key: ['userProducts', id],
  //   api: apiGetAllBusinessProducts,
  //   param: id,
  // })

  // const { data: categories, error: errorCategories } = useFetch({
  //   api: apiGetBusinessCategories,
  //   param: id,
  //   key: ['categories', id],
  // })

  
  // const { data: reviews, error: errorReviews, refetch: refetchReviews } = useFetch({
  //   api: apiGetBusinessReviews,
  //   param: id,
  //   key: ['reviews', id],
  // })
  
  // const { data: reviewsStats, error: errorReviewsStats } = useFetch({
  //   api: apiGetBusinessReviewsStats,
  //   param: id,
  //   key:['reviewsStats', id],
  // })


  // const { data: workingHours, error: errorWorkingHours } = useFetch({
  //   api: apiGetBusinessWorkingHours,
  //   param: id,
  //   key: ['workingHours', id],
  // })

  // const { data: branches, error: errorBranches } = useFetch({
  //   api: apiGetBusinessBranches,
  //   param: id,
  //   key: ['branches', id],
  // })
  // const { data: relatedBusinesses, error: errorRelatedBusinesses } = useFetch({
  //   api: apiGetRelatedBusinesses,
  //   param: id,
  //   key: ['relatedBusinesses', id],
  // })
  // const { data: businessSubscription, error: errorBusinessSubscription} = useFetch({
  //   api: apiGetBusinessSubscription,
  //   param: id,
  //   key: ['businessSubscription', id],
  // })
  
  // const { data: businessSubscriptionDetails, error: errorBusinessSubscriptionDetails,} = useFetch({
  //   api: apiGetBusinessSubscriptionByString,
  //   param: businessSubscription?.subscription_string,
  //   key: ['businessSubscriptionDetails', businessSubscription?.subscription_string],
  //   enabled: !!businessSubscription?.subscription_string,
  // })


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

  // React.useEffect(() => {
  //   const addPageVisit = (userId) => {
  //     addPageVisitMutation.mutate({
  //       business_string: id,
  //       userId: userId
  //     })
  //   }
  //   if (user) {
  //     addPageVisit(user?.id)
  //   } else {
  //     const saved_cookie = getCookie('yenreach')
  //     if (saved_cookie) {
  //       const cookieData = JSON.parse(saved_cookie)
  //       addPageVisit(cookieData?.userId)
  //     } else if (cookie) {
  //       addPageVisit(cookie?.cookie)
  //       setCookie('yenreach', JSON.stringify({ userId: cookie?.cookie }), 1)
  //     }
  //   }
  // }, [cookie, user, id])

  const rating = useMemo(() => {
    if (business?.reviews?.length) {
      const rating = business?.reviews?.reduce((a, b) => ({ star: a.star + b.star }), { star: 0 }) 
      return Math.round(rating?.star / business?.reviews?.length)
    }
    return 0
  }, [business?.reviews])

  return (
      <>
        <Header />
        {isLoading && <Loader loader={4} />}
        {imageModalOpen && (
         <FullImage  setImageModalOpen={setImageModalOpen} image={image} />
          )}
        {business && 
        <>
          <SEO
            title={`${business.name} - Discover Businesses on Yenreach`}
            description={`${business.description}. Find out more about this business on Yenreach.`}
            name={business.name}
            type="business"
            url={`https://www.yenreach.com/business/${business.id}`}
          />
          <div className={`top mb-10 py-16 sm:py-12 px-4 md:px-10 lg:px-20 relative ${business?.coverImg ? "" : 'bg-[url("assets/businesses/business-hero.svg")]'} bg-contain bg-center text-white flex items-center gap-5 bg-black/20`}>
             {business?.coverImg && <img src={business?.profileImg?.replace("mediatoken", "media&token")} alt="" className='absolute top-0 left-0 w-full h-full -z-10 object-cover' />}
             <div className='relative w-16 h-16 rounded-full md:w-24 md:h-24 overflow-hidden'>
              <Image
                  url={business?.profileImg}
                  name={business?.name}
                  alt={business?.name}
                  className='object-cover'
                  data={business}
                />
             </div>
            <div className=''>
              <h2 className='mb-2 text-lg font-medium sm:text-xl sm:mb-1' dangerouslySetInnerHTML={{ __html: business.name }}></h2>
              {
                rating ? 
                  <div className='flex items-center gap-0.5'>
                    {
                      [...Array(rating).keys()].map((el) => (
                        <img src={StarFilled} key={el} alt="Star" className='w-3 xs:w-4 md:w-5' />
                      ))

                    }
                    <span className='self-end ml-2 text-xs'>{rating ? `${rating} star rating` : 'No ratings yet'} </span>
                  </div>
                  :
                  <div className='flex items-center gap-0.5'>
                    <span className='self-end text-xs'>No reviews yet</span>
                  </div>
              }
            </div>
          </div>
          <section className='relative px-4 mb-20 md:px-10 lg:px-20'>
            <div className='max-w-md sm:w-4/5 md:w-2/3 lg:w-3/5 xl:max-w-xl'>
              <h2 className='mb-1 text-lg font-semibold text-green2'>About Business</h2>
              <p className='text-[#476788] text-xs sm:text-sm mb-4'>
                {business.description}
              </p>
              {business.categories && <h3 className='mb-1 font-medium text-green2'>Tags</h3>}
              <div className='flex flex-wrap items-center gap-3 mb-16 text-xs text-white md:w-7/8'>
                {business.categories?.map((category, index) => 
                  <span key={index} className='px-3 py-2 rounded-full bg-green2 sm:px-4'>{category?.category?.category}</span>
                )}
              </div>
              <div className='lg:absolute top-0 right-24 lg:max-w-[396px]'>
                <h2 className='mb-2 text-lg font-semibold text-green2'>Business Info</h2>
                <div className='grid gap-1 mb-20 text-sm grid-cols-business-info'>
                  <span className='flex items-center justify-between p-3 px-5 border-2 border-gray opacity-90'>
                    {business.website || business.whatsapp || 'No website'}
                    <BsGlobe className='text-lg' />
                  </span>
                  <span className='flex items-center justify-between p-3 px-5 border-2 border-gray opacity-90'>
                    {business.email}
                    <AiOutlineMail className='text-lg' />
                  </span>
                  <span className='flex items-center justify-between p-3 px-5 border-2 border-gray opacity-90'>
                    {business.phoneNumber}
                    <BsTelephone className='text-lg' />
                  </span>
                  <div className='flex flex-col gap-3 p-3 px-5 border-2 border-gray opacity-90'>   
                    <span className='flex items-start justify-between opacity-90'>
                      <span className='w-4/5'>
                       {business.address}, {business.lga} LGA, {business.state} State
                      </span>
                      <CiLocationOn className='text-lg' />
                    </span>
                    <img src={Map} alt="Location" className='object-cover object-center w-full' />
                  </div>
                </div>
              </div>
              <h2 className='mb-4 text-lg font-semibold text-green2'>Photos</h2>
              <div className='flex flex-wrap gap-4 mb-10'>
                {business?.photos?.length ? business?.photos?.map((photo, index) => 
                      <div key={index} className='relative overflow-hidden rounded-lg bg-gray w-36 h-36'>
                        <img src={photo?.mediaPath} alt="Business Photos" className='object-cover w-full h-full' />
                        <span
                            onClick={() => handleImageClick(photo?.mediaPath)}
                            className='absolute bottom-0 left-0 flex items-center justify-center w-full h-8 text-xs text-white cursor-pointer bg-black/50'
                          >
                            View Full Image
                          </span>
                      </div>
                     
                ) 
                : <span className='text-[#476788] text-xs sm:text-sm'>No photos</span>
                }
       
              </div>
              <h2 className='mb-4 text-lg font-semibold text-green2'>Products</h2>
              <div className='flex flex-wrap gap-4 mb-10'>
              {business?.products?.length ? business?.products?.map((product, index) => 
                     <div key={index} className='relative overflow-hidden rounded-lg bg-gray w-36 h-36'>
                     <img src={product?.photos[0]?.mediaPath} alt="Product Photos" className='object-cover w-full h-full' />
                     <span
                         onClick={() => handleImageClick(product?.photos[0]?.mediaPath)}
                         className='absolute bottom-0 left-0 flex items-center justify-center w-full h-8 text-xs text-white cursor-pointer bg-black/50'
                       >
                         View Full Image
                       </span>
                   </div>
                     ) 
                : <span className='text-[#476788] text-xs sm:text-sm'>No Products</span>
                }
              </div>
              {
                business?.workingHours &&  
                <div className="max-w-lg pb-10 mb-5 overflow-hidden bg-white rounded-lg">
                  <h2 className="mb-3 text-lg font-semibold text-green2">Working Hours</h2>
                  <ul className="mt-4">
                    {business?.workingHours.map((hour) => (
                      <li key={hour.id} className="py-2 text-sm border-b border-gray-200 md:py-3 md:mx-4">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">{hour.day}</span>
                          <span className="text-gray-800">{hour.openingTime} - {hour.closingTime}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              }
              {business?.reviews && 
              <>
              <h2 className='mb-3 text-lg font-semibold text-green2'>Reviews</h2>              
              <div className='relative max-w-lg py-2 mb-5 pb-14'>
                <div className='p-4 bg-[#68888f21] rounded-xl'>
                  <div ref={reviewsContainerRef} className='flex w-full gap-2 overflow-hidden'>
                    {business?.reviews?.map((review, index) => 
                      <div key={index} className='border-2 border-black/10 rounded-xl p-5 px-5 bg-green2 text-white min-w-[250px] max-w-[300px] overflow-hidden'>
                        <div className='flex items-center justify-between gap-5 mb-3'>
                          <div className='flex items-center gap-2'>
                            <img src={Star} alt="Star" />
                            <span className='text-sm'>{review.user}</span>
                          </div>
                          {!!user && (review.userId === user.id) && <MdEdit onClick={() => setEditReviewModalOpen(review.id)} className="text-green cursor-pointer" size="1rem" />}
                        </div>
                        <p className='text-white text-xsm'>
                          {review.review}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className='absolute right-0 flex items-end gap-4 bottom-2'>
                  <Button onClickFunc={prevReview} override={true} className='rounded px-5 py-1.5'>
                    Previous
                  </Button>
                  <Button onClickFunc={nextReview} className='rounded px-5 py-1.5'>
                    Next
                  </Button>
                </div>
              </div>
              </>}
              {modalOpen &&  <BusinessReviewModal setModalOpen={setModalOpen} modalOpen={modalOpen} user={user} business_string={id} onSuccess={() => refetchReviews()} />} 
              {!!editReviewModalOpen &&  <EditBusinessReview setModalOpen={setEditReviewModalOpen} value={editReviewModalOpen} user={user} business_string={id}  onSuccess={() => refetchReviews()} />} 
              {user ? 
                <button onClick={() => setModalOpen(true)} className='underline cursor-pointer text-smm text-green opacity-70'>
                  Write a review
                </button>
              : <Link to="/login"  state={{from: location}} className='underline cursor-pointer text-smm text-green opacity-70'>
                  Login to Write a review
                </Link>
              }
            </div>
            <div className='my-10'>
              <h2 className='mb-3 text-lg font-medium text-green'>Contact Information</h2>
              <div className='p-4 bg-white sm:pb-12'>
                  <div className='flex flex-col gap-4 lg:flex-row xl:gap-32 justify-between text-sm text-[#476788]'>
                  <div className='flex flex-col flex-wrap gap-4 md:flex-row sm:gap-6'>
                        {business?.address &&
                        <div className='flex items-center gap-2'>
                          <MdOutlineLocationOn size="1.3rem" />
                          <span>{business?.address}</span>
                        </div>}
                        {business?.phoneNumber &&
                          <div className='flex items-center gap-2'>
                            <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={`tel:${business.phoneNumber}`}>
                            <BsTelephone size="1.3rem" />
                            <span>Call Now</span>
                          </a>
                        </div>}
                        {business?.email &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={`mailto:${business.email}`}>
                            <MdOutlineMarkEmailUnread size="1.3rem" />
                            <span>Send Mail</span>
                          </a>
                        </div>
                        }
                        {business?.website &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={business.website}>
                            <BsGlobe size="1.3rem" />
                            <span>Our website</span>
                          </a>
                        </div>
                        }
                          {business?.facebookLink &&
                          <div className='flex items-center gap-2'>
                            <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={business.facebookLink}>
                              <TbBrandFacebook size="1.3rem" />
                              <span>See us on facebook</span>
                            </a>
                          </div>
                          }
                            {business?.instagramLink &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={business.instagramLink}>
                            <BsInstagram size="1.3rem" />
                            <span>Instagram Page</span>
                          </a>
                        </div>
                        }
                        {business?.whatsapp &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={`https://wa.me/${business?.whatsapp}`}>
                            <BsWhatsapp size="1.3rem" />
                            Chat on Whatsapp
                          </a>
                        </div>
                        }
                        {business?.twitterLink &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={business.twitterLink}>
                            <BsTwitter size="1.3rem" />
                            <span>Go to twitter</span>
                          </a>
                        </div>
                        }
                        {business?.linkedinLink &&
                        <div className='flex items-center gap-2'>
                          <a target='_blank' className='flex items-center gap-2 w-fit p-2 rounded-md underline underline-offset-2 pr-2.5' href={business.linkedinLink}>
                            <BsLinkedin size="1.3rem" />
                            <span>Check out LinkedIn</span>
                          </a>
                        </div>
                        }
                      </div>
                  </div>
              </div>
            </div>
          </section>
          <section className='px-4 py-4 mb-32 border-t-2 sm:py-6 md:px-10 lg:px-20 border-gray'>
            <h2 className='mb-2 text-lg font-semibold text-green2'>People also viewed</h2>
            <div className='grid gap-6 grid-cols-bus1 sm:grid-cols-bus2 md:grid-cols-3 xl:grid-cols-bus4'>
              {business?.related?.map((business, index) => 
                <BusinessCard key={business.id} business={business} />
              )}
              </div>
          </section>
        </>}
        <Footer />
      </>
  )
}

export default BusinessPage