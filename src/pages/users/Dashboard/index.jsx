import React from 'react'
import SideNav from '../../../components/users/SideNav'
import Home from '../../../components/users/Home'
import Button from '../../../components/ui/Button'

import DP from '../../../assets/dashboard/img.svg'
import ArrowDown from '../../../assets/arrow-down.svg'
import BusinessIMG from '../../../assets/dashboard/business-img.svg'
import Media from '../../../assets/dashboard/media.svg'


const index = () => {
  return (
    <div className='flex bg-footer-bg'>
      <SideNav />
      {/* <Home /> */}
      <div className='flex-1'>
        <div className='p-3 px-3 lg:pr-20 xl:pr-36 bg-white flex items-center justify-between'>
          <div className='text-[#69707D]'>
              Business {'>'} Hard rock cafe
          </div>
          <div className='flex items-center gap-4 text-sm'>
            <button className='py-1.5 px-4 bg-green text-white font-medium'>Overview</button>
            <button className='py-1.5 px-4 bg-[#F1F1F1]'>Marketplace</button>
            <button className='py-1.5 px-4 bg-[#F1F1F1]'>Jobs</button>
          </div>
          <div className='flex items-center gap-1'>
            <img src={DP} alt="" />
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className='h-36 -z-0 relative bg-[url("assets/businesses/business-hero.svg")] bg-cover bg-center'>
          <Button className='p-1.5 px-3 text-xs font-arialsans absolute bottom-2 right-2 sm:right-4 lg:right-16'>
            Edit Cover Photo
          </Button>
          <img src={BusinessIMG} alt="" className='z-100 w-28 overflow-hidden left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 mx-auto absolute' />
        </div>
        <section className='px-7'>
          <div className='flex flex-col items-center w-10/12 mx-auto mb-12 pt-16'>
            <h1 className='text-3xl font-semibold text-dark-light mb-2'>Hard Rock Cafe</h1>
            <p className='text-sm text-[#476788] mb-3 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta pretium, neque aliquet purus massadsfghasd placerat mauris. Blandit amet, imperdiet adipiscing mattis lobortis sem mauris eget elit. Sapien ut eu felis integer sit. Ac eu dui nulla nam. Vel venenatis elementum orci in arcu ipsum tellus molestie. Gravida volutpat, donec eget tellus proin sit lacus, sapien. Et a dolor quam nec adipiscing sit quam. Tempor, sagittis, quis vulputate amet, quis et. Tortor senectus ullamcorper enim facilisis et praesent diam, dui. Ac sed feugiat orci sed. Metus turpis mauris auctor integer pellentesque iaculis. Gravida.
            </p>
            <div className='flex items-center flex-wrap gap-3 text-xsm text-green md:w-7/8 mb-16'>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Schooling</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Institution</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Business</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Marketing</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Accounting</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium'>Finance</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium whitespace-nowrap'>Web Design</span>
                <span className='bg-[#E0E5EE] px-4 py-2 font-medium whitespace-nowrap'>Web Design</span>
              </div>
          </div>
          <div className='mb-11'>
            <h2 className='text-green text-lg font-medium mb-3'>Contact Information</h2>
            <div className='p-4 sm:py-12 sm:px-16 bg-white'>
              <div className='sm:flex gap-4 xl:gap-32 justify-between text-sm text-[#476788]'>
                <div className='flex flex-col gap-2 sm:gap-6 mb-4'>
                  <div>
                    <span>07083458427</span>
                  </div>
                  <div>
                    <span>Kheengdavid@gmail.com</span>
                  </div>
                  <div>
                    <span>www.davidikperi.com</span>
                  </div>
                </div>
                <div className='mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec nisl faucibus tellus cursus etiam euismod magnis tincidunt. Molestie lectus sit sed quis vulputate eros. Bibendum lectus enim accumsan pharetra non. Placerat nibh nulla quisque bibendum in ac feugiat. Pulvinar in morbi arcu, erat sit dignissim.
                </div>
                <div className='flex flex-col gap-2 sm:gap-6'>
                  <div>
                    <span>07083458427</span>
                  </div>
                  <div>
                    <span>Kheengdavid@gmail.com</span>
                  </div>
                  <div>
                    <span>www.davidikperi.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-11'>
            <h2 className='text-green text-lg font-medium mb-3'>Business media</h2>
            <div className='flex flex-col sm:flex-row flex-wrap gap-2 text-sm text-[#476788]'>
              <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
              <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
              <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
              <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
              <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
            </div>
          </div>
          <div className='mb-11'>
            <h2 className='text-green text-lg font-medium mb-3'>Business Features</h2>
            <div className='flex flex-col sm:flex-row flex-wrap gap-2 text-sm text-[#476788]'>
              <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
              <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
              <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
              <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
              <img src={Media} alt="" className='sm:w-32 sm:h-40 object-cover object-center' />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default index