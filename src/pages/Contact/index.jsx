import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Blob from '../../assets/about-blob.svg'


const index = () => {
  return (
      <>
        <Header />
        <div className='mt-24 py-20 sm:py-12 px-4 md:px-10 lg:px-20 relative bg-[url("assets/contact-hero.svg")] bg-cover bg-center text-white flex items-center justify-center'>
            <div className='lg:w-1/2 text-center'>
                <h2 className='text-3xl md:text-40 font-medium mb-2 md:mb-3 text-[#89F1B4]'>Reach out to us</h2>
                <p className='font-arialsans md:text-xl leading-tight font-light'>
                    At Yenreach, we value whatever you tell us. we recognise the need of both businesses and users and that is why we offer top notch cusomer service available 24/7
                </p>
            </div>
        </div>
        <section className='py-12 pb-16 md:pb-20 px-4 md:px-10 lg:px-20 relative flex justify-center bg-[#FAFAFA]'>
            <img src={Blob} alt="" className='hidden sm:block absolute left-4 lg:left-20 top-1/2 -translate-y-1/2' />
            <form action="" method="post" className='bg-white p-10 text-dark-light sm:w-2/3 lg:w-1/2'>
                <div className='md:flex items-center gap-5 mb-8'>
                    <div className='mb-8 md:mb-0'>
                        <label htmlFor="first_name" className='font-medium'>First Name</label>
                        <Input className='border border-[#D3DAE6] rounded' type="text" name="first_name" id="first_name" />
                    </div>
                    <div>
                        <label htmlFor="last_name" className='font-medium'>Last Name</label>
                        <Input className='border border-[#D3DAE6] rounded' type="text" name="last_name" id="last_name" />
                    </div>
                </div>
                <div className='mb-8'>
                    <label htmlFor="email" className='font-medium'>Email Address</label>
                    <Input className='border border-[#D3DAE6] rounded' type="email" name="email" id="email" />
                </div>
                <div className='mb-8'>
                    <label htmlFor="number" className='font-medium'>Phone Number <span className='text-[#ABB4C4]'>(optional)</span></label>
                    <Input className='border border-[#D3DAE6] rounded' type="tel" name="number" id="number" />
                </div>
                <div className='mb-8'>
                    <label htmlFor="message" className='font-medium'>Write a Message</label>
                    <textarea className='w-full border border-[#D3DAE6] rounded-xl outline-none cursor-pointer px-4 py-3 bg-inherit' name="message" id="message" cols="30" rows="5"></textarea>
                </div>
                <Button className='w-full py-3 rounded font-medium'>Submit</Button>
            </form>
            <img src={Blob} alt="" className='hidden sm:block absolute right-4 lg:right-20 top-1/2 -translate-y-1/2' />
        </section>
        <Footer />
      </>
  )
}

export default index