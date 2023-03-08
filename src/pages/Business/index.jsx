import React from 'react'
import useFetch from '/src/hooks/useFetch'
import { useParams } from 'react-router-dom'
import { apiGetOneBusiness, apiGetBusinessCategories, apiGetBusinessWorkingHours, apiGetBusinessBranches, apiGetRelatedBusinesses, apiGetBusinessSubscription, apiGetBusinessSubscriptionByString } from '/src/services/CommonService'
import BusinessCard from '/src/components/ui/BusinessCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/ui/Button'
import BusinessReviewModal from '../../components/ui/BusinessReviewModal'
import Computer from '../../assets/computer.svg'
import StarFilled from '../../assets/businesses/starfilled.svg'
import Attach from '../../assets/attach.svg'
import Logo from '../../assets/businesses/business-logo.svg'
import Photo1 from '../../assets/businesses/photo-1.svg'
import Photo2 from '../../assets/businesses/photo-2.svg'
import Photo3 from '../../assets/businesses/photo-3.svg'
import Product1 from '../../assets/businesses/product-1.svg'
import Product2 from '../../assets/businesses/product-2.svg'
import Product3 from '../../assets/businesses/product-3.svg'
import Star from '/src/assets/star.svg'
import Mail from '../../assets/mail.svg'
import Map from '../../assets/map.svg'


const index = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const { id } = useParams()
  
  
  const { data: business, error: errorBusiness } = useFetch({
    api: apiGetOneBusiness,
    param: id,
    key: 'business'
  })

  const { data: categories, error: errorCategories } = useFetch({
    api: apiGetBusinessCategories,
    param: id,
    key: 'categories'
  })

  const { data: workingHours, error: errorWorkingHours } = useFetch({
    api: apiGetBusinessWorkingHours,
    param: id,
    key: 'workingHours'
  })
  const { data: branches, error: errorBranches } = useFetch({
    api: apiGetBusinessBranches,
    param: id,
    key: 'branches'
  })
  const { data: relatedBusinesses, error: errorRelatedBusinesses } = useFetch({
    api: apiGetRelatedBusinesses,
    param: id,
    key: 'relatedBusinesses'
  })
  const { data: businessSubscription, error: errorBusinessSubscription} = useFetch({
    api: apiGetBusinessSubscription,
    param: id,
    key: 'businessSubscription'
  })
  
  const { data: businessSubscriptionDetails, error: errorBusinessSubscriptionDetails,} = useFetch({
    api: apiGetBusinessSubscriptionByString,
    param: businessSubscription?.subscription_string,
    key: 'businessSubscriptionDetails'
  })

  return (
      <>
        <Header />
        {business && 
        <>
          <div className='mt-24 mb-10 py-20 sm:py-12 px-4 md:px-10 lg:px-20 relative bg-[url("assets/businesses/business-hero.svg")] bg-cover bg-center text-white flex items-center gap-5'>
            <img src={Logo} alt="" className='w-16 md:w-24' />
            <div className=''>
              <h2 className='text-3xl font-medium mb-2 sm:mb-1'>{business.name}</h2>
              <div className='flex items-center gap-0.5'>
                <img src={StarFilled} alt="" className='w-6' />
                <img src={StarFilled} alt="" className='w-6' />
                <img src={StarFilled} alt="" className='w-6' />
                <img src={StarFilled} alt="" className='w-6' />
                <img src={StarFilled} alt="" className='w-6' />
                <span className='self-end ml-2 text-sm'>4.7 star rating</span>
              </div>
            </div>
          </div>
          <section className='px-4 md:px-10 lg:px-20 mb-20 relative'>
            <div className='sm:w-4/5 md:w-2/3 lg:w-3/5 max-w-md xl:max-w-xl'>
              <h2 className='text-2xl text-green2 font-semibold mb-1'>About Business</h2>
              <p className='text-[#476788] text-smm mb-4'>
                {business.description}
              </p>
              <h3 className='text-green2 font-medium mb-1'>Tags</h3>
              <div className='flex items-center flex-wrap gap-3 text-xs text-white md:w-7/8 mb-16'>
                {categories?.map((category, index) => 
                  <span key={index} className='bg-green2 rounded-full px-4 py-2'>{category?.category}</span>
                )}
              </div>
              <div className='lg:absolute top-0 right-24 lg:max-w-[396px]'>
                <h2 className='text-2xl text-green2 font-semibold mb-2'>Business Info</h2>
                <div className='gap-1 mb-20 grid grid-cols-business-info'>
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
              <h2 className='text-2xl text-green2 font-semibold mb-4'>Photos</h2>
              <div className='flex flex-wrap gap-4 mb-10'>
                <img src={Photo1} alt="" className='h-20' />
                <img src={Photo2} alt="" className='h-20' />
                <img src={Photo3} alt="" className='h-20' />
              </div>
              <h2 className='text-2xl text-green2 font-semibold mb-4'>Products</h2>
              <div className='flex flex-wrap gap-4 mb-10'>
                <img src={Product1} alt="" className='h-20' />
                <img src={Product2} alt="" className='h-20' />
                <img src={Product3} alt="" className='h-20' />
              </div>
              <h2 className='text-2xl text-green2 font-semibold mb-3'>Reviews</h2>
              {/* <div className='flex items-center gap-3 mb-10'>
                <span className='text-sm font-medium opacity-90'>Rate this business</span> 
                <div className='flex items-center gap-0.5'>
                  <img src={StarFilled} alt="" className='w-6' />
                  <img src={StarFilled} alt="" className='w-6' />
                  <img src={StarFilled} alt="" className='w-6' />
                  <img src={StarFilled} alt="" className='w-6' />
                  <img src={StarFilled} alt="" className='w-6' />
                </div>
              </div> */}
              <div className='py-2 pb-14 relative mb-5 max-w-lg'>
                <div className='p-4 bg-[#68888f21] rounded-xl'>
                  <div className='flex overflow-hidden gap-2 w-full'>
                    {[0,1,2].map((item, index) => 
                      <div className='border-2 border-black/10 rounded-xl p-5 px-5 bg-green2 text-white min-w-[250px] max-w-[300px] overflow-hidden'>
                        <div className='flex items-center gap-2 mb-3'>
                          <img src={Star} alt="" />
                          <span className='text-sm'>NiCK</span>
                        </div>
                        <p className='text-xsm text-white'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum itaque et quidem obcaecati? Ut, et eligendi quos veniam modi obcaecati facere sapiente libero iure non amet quisquam voluptas. Asperiores, magnam.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className='flex items-end gap-4 absolute bottom-2 right-0'>
                  <Button override={true} className='rounded px-5 py-1.5'>
                    Previous
                  </Button>
                  <Button className='rounded px-5 py-1.5'>
                    Next
                  </Button>
                </div>
              </div>
              {/* Review modal*/}
              {modalOpen &&  <BusinessReviewModal setModalOpen={setModalOpen} modalOpen={modalOpen} />} 
              <p onClick={() => setModalOpen(true)} className='text-smm text-green opacity-70 underline cursor-pointer'>Write a review</p>
            </div>
          </section>
          <section className='py-4 sm:py-6 px-4 md:px-10 lg:px-20 border-t-2 border-gray mb-32'>
            <h2 className='text-2xl text-green2 font-semibold mb-2'>People also viewed</h2>
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