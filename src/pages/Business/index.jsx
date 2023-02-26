import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/ui/Button'
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
import Mail from '../../assets/mail.svg'
import Map from '../../assets/map.svg'


const index = () => {
  return (
      <>
        <Header />
        <div className='mt-24 mb-10 py-20 sm:py-12 px-4 md:px-10 lg:px-20 relative bg-[url("assets/businesses/business-hero.svg")] bg-cover bg-center text-white flex items-center gap-5'>
          <img src={Logo} alt="" className='w-16 md:w-24' />
          <div className=''>
            <h2 className='text-3xl font-medium mb-2 sm:mb-1'>Yenreach business school</h2>
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
          <div className='sm:w-4/5 md:w-2/3 lg:w-3/5'>
            <h2 className='text-2xl text-green2 font-semibold mb-1'>About Business</h2>
            <p className='text-[#476788] text-smm mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis amet ac proin massa arcu. Feugiat eget magna nibh pretium venenatis adipiscing gravida pretium id. Ac pellentesque ipsum ac iaculis. Magna faucibus est tempor, volutpat. Mattis risus ut dolor, dui placerat feugiat. Amet, risus ac sagittis elit mi elementum nisi, viverra quis. Molestie at tempor vitae consequat, pellentesque faucibus. Mauris, quisque adipiscing id at porta. Semper semper viverra rhoncus, feugiat scelerisque eget arcu odio. Pellentesque scelerisque volutpat dolor.
            </p>
            <h3 className='text-green2 font-medium mb-1'>Tags</h3>
            <div className='flex items-center flex-wrap gap-3 text-xs text-white md:w-7/8 mb-16'>
              <span className='bg-green2 rounded-full px-4 py-2'>Schooling</span>
              <span className='bg-green2 rounded-full px-4 py-2'>Institution</span>
              <span className='bg-green2 rounded-full px-4 py-2'>Business</span>
              <span className='bg-green2 rounded-full px-4 py-2'>Marketing</span>
              <span className='bg-green2 rounded-full px-4 py-2'>Accounting</span>
              <span className='bg-green2 rounded-full px-4 py-2'>Finance</span>
              <span className='bg-green2 rounded-full px-4 py-2 whitespace-nowrap'>Web Design</span>
              <span className='bg-green2 rounded-full px-4 py-2 whitespace-nowrap'>Web Design</span>
            </div>
            <div className='lg:absolute top-0 right-24 lg:max-w-[396px]'>
              <h2 className='text-2xl text-green2 font-semibold mb-2'>Business Info</h2>
              <div className='gap-1 mb-20 grid grid-cols-business-info'>
                <span className='px-5 p-3 border-2 border-gray flex items-center justify-between opacity-90'>
                  www.Ybusinessschool.eduty
                  <img src={Mail} alt="" />
                </span>
                <span className='px-5 p-3 border-2 border-gray flex items-center justify-between opacity-90'>
                  Yenreach@support.com
                  <img src={Mail} alt="" />
                </span>
                <span className='px-5 p-3 border-2 border-gray flex items-center justify-between opacity-90'>
                  07083458427
                  <img src={Mail} alt="" />
                </span>
                <div className='px-5 p-3 border-2 border-gray flex flex-col gap-3 opacity-90'>   
                  <span className='flex items-start justify-between opacity-90'>
                    <span className='w-4/5'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus mauris sed facilisi scelerisque ipsum. Pellentesque vulputate mattis enim, velit sapien. Nulla.
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
            <div className='flex items-center gap-3 mb-10'>
              <span className='text-sm font-medium opacity-90'>Rate this business</span> 
              <div className='flex items-center gap-0.5'>
                <img src={StarFilled} alt="" className='w-6' />
                <img src={StarFilled} alt="" className='w-6' />
                <img src={StarFilled} alt="" className='w-6' />
                <img src={StarFilled} alt="" className='w-6' />
                <img src={StarFilled} alt="" className='w-6' />
              </div>
            </div>
            <div className='border-2 border-gray rounded-xl p-4 px-6 py-8 pb-14 relative mb-5'>
              <textarea className='w-full text-xs opacity-80' name="review" id="review" cols="40" rows="8" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus at massa lobortis et consequat maecenas commodo. Pellentesque enim pulvinar magna interdum egestas sed quam nunc. In proin semper egestas consectetur fermentum, donec nibh. Interdum felis, sed tristique viverra est at blandit. Ultricies leo velit nisl commodo ultricies a et tortor eu. Nisl urna, convallis sit erat sed.Quisque vitae viverra amet fringilla justo dolor mauris nunc. Nunc, pharetra, fermentum quam sit elementum amet, sed tortor sodales. Accumsan odio aliquet imperdiet nunc vitae proin."}>
              </textarea>
              <div className='flex items-end gap-4 absolute bottom-2 right-6'>
                <img src={Attach} alt="" />
                <Button className='rounded px-5 py-1.5'>
                  Submit
                </Button>
              </div>
            </div>
            <p className='text-smm text-green opacity-70 underline'>Check out some reviews</p>
          </div>
        </section>
        <section className='py-4 sm:py-6 px-4 md:px-10 lg:px-20 border-t-2 border-gray mb-32'>
          <h2 className='text-2xl text-green2 font-semibold mb-2'>People also viewed</h2>
          <div className='grid grid-cols-bus1 sm:grid-cols-bus2 md:grid-cols-3 xl:grid-cols-bus4 gap-6'>
                <div className='card w-full py-2.5 px-2 border-2 border-[#D3DAE6] rounded-2xl h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2 w-full object-cover rounded-xl' />
                        <h6 className='text-sm font-medium h-11 mb-2 overflow-hidden'>Blossom boutique flower tsfdsfddfsdtfdl</h6>
                        <ul className='flex items-center flex-wrap text-xsm list-disc pl-4 gap-4 h-9 overflow-hidden pb-12'>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                        </ul>
                    </div>
                    <Button className='w-full text-xs rounded-xl py-2 px-4 font-semibold'>
                        view business
                    </Button>
                </div>
                <div className='card w-full py-2.5 px-2 border-2 border-[#D3DAE6] rounded-2xl h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2 w-full object-cover rounded-xl' />
                        <h6 className='text-sm font-medium h-11 mb-2 overflow-hidden'>Blossom boutique flower tsfdsfddfsdtfdl</h6>
                        <ul className='flex items-center flex-wrap text-xsm list-disc pl-4 gap-4 h-9 overflow-hidden pb-12'>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                        </ul>
                    </div>
                    <Button className='w-full text-xs rounded-xl py-2 px-4 font-semibold'>
                        view business
                    </Button>
                </div>
                <div className='card w-full py-2.5 px-2 border-2 border-[#D3DAE6] rounded-2xl h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2 w-full object-cover rounded-xl' />
                        <h6 className='text-sm font-medium h-11 mb-2 overflow-hidden'>Blossom boutique flower tsfdsfddfsdtfdl</h6>
                        <ul className='flex items-center flex-wrap text-xsm list-disc pl-4 gap-4 h-9 overflow-hidden pb-12'>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                        </ul>
                    </div>
                    <Button className='w-full text-xs rounded-xl py-2 px-4 font-semibold'>
                        view business
                    </Button>
                </div>
                <div className='card w-full py-2.5 px-2 border-2 border-[#D3DAE6] rounded-2xl h-80 flex flex-col items-center justify-between'>
                    <div>       
                        <img src={Computer} alt="" className='h-32 mb-2 w-full object-cover rounded-xl' />
                        <h6 className='text-sm font-medium h-11 mb-2 overflow-hidden'>Blossom boutique flower tsfdsfddfsdtfdl</h6>
                        <ul className='flex items-center flex-wrap text-xsm list-disc pl-4 gap-4 h-9 overflow-hidden pb-12'>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                            <li><span className='relative -left-1.5'>Unknown</span></li>
                        </ul>
                    </div>
                    <Button className='w-full text-xs rounded-xl py-2 px-4 font-semibold'>
                        view business
                    </Button>
                </div>
            </div>
        </section>
        <Footer />
      </>
  )
}

export default index