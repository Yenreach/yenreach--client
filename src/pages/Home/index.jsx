import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Category from '../../components/Category'
import Accordion from '../../components/Accordion'
import AllHere from '../../assets/businesses/all-here.svg'
import AllHereJ from '../../assets/jobs/all-here.svg'
import AllHereP from '../../assets/products/all-here.svg'
import BusOfTheWeek from '../../assets/bus_of_the_week.svg'
import Button from '../../components/ui/Button'

const index = () => {
  return (
    <>
        <Header />
        <Hero />
        <Category />
        <section className='py-12 px-4 md:px-10 lg:px-24'>
            <div className='bg-audience h-64 bg-cover bg-center text-white flex flex-col justify-between items-center py-10 mb-28'>     
                <div className='flex flex-col items-center gap-2'>
                    <h2 className='text-40 font-semibold'>Get your business to the right audience</h2>
                    <span className='text-xl '>It's Totally free</span>
                </div>
                <Button className='py-3 px-12 rounded'>
                    Add my business
                </Button>
            </div>
            <div className='flex items-center gap-9 mb-32'>
                <img src={AllHere} alt="" className="w-1/2" />
                <div className='flex flex-col items-start gap-12'>
                    <h3 className='text-3xlm text-color1 font-medium'>They are all Here</h3>
                    <p className='text-xs text-[#476788]'>
                        Lorem ipsum dolor sit amet consectetur. Ultricies consectetur nisi ornare tempor. Senectus tortor arcu est duis posuere ante. Cras est malesuada facilisi facilisi eget morbi. Cum justo quis dui laoreet fermentum fringilla. Non non dictum ipsum est tellus adipiscing. <br />
                        Netus a sodales a lorem eget sed. Scelerisque id urna massa convallis suspendisse ultrices dignissim sed. Facilisis vestibulum convallis varius tellus. Morbi neque egestas etiam feugiat amet. Accumsan fusce sed id id faucibus viverra nunc ut. Porttitor ac cursus rhoncus amet semper nunc quis vitae fermentum. Hendrerit ipsum quis nulla.
                    </p>
                    <Button className='py-2 px-28'>
                        CTA
                    </Button>
                </div>
            </div>
            <div className='flex items-center gap-9 mb-32'>
                <div className='flex flex-col items-start gap-12'>
                    <h3 className='text-3xlm text-color2 font-medium'>They are all Here</h3>
                    <p className='text-xs text-[#476788]'>
                        Lorem ipsum dolor sit amet consectetur. Ultricies consectetur nisi ornare tempor. Senectus tortor arcu est duis posuere ante. Cras est malesuada facilisi facilisi eget morbi. Cum justo quis dui laoreet fermentum fringilla. Non non dictum ipsum est tellus adipiscing. <br />
                        Netus a sodales a lorem eget sed. Scelerisque id urna massa convallis suspendisse ultrices dignissim sed. Facilisis vestibulum convallis varius tellus. Morbi neque egestas etiam feugiat amet. Accumsan fusce sed id id faucibus viverra nunc ut. Porttitor ac cursus rhoncus amet semper nunc quis vitae fermentum. Hendrerit ipsum quis nulla.
                    </p>
                    <Button variant='job' className='py-2 px-28'>
                        CTA
                    </Button>
                </div>
                <img src={AllHereJ} alt="" className="w-1/2" />
            </div>
            <div className='flex items-center gap-9'>
                <img src={AllHereP} alt="" className="w-1/2" />
                <div className='flex flex-col items-start gap-12'>
                    <h3 className='text-3xlm text-color3 font-medium'>They are all Here</h3>
                    <p className='text-xs text-[#476788]'>
                        Lorem ipsum dolor sit amet consectetur. Ultricies consectetur nisi ornare tempor. Senectus tortor arcu est duis posuere ante. Cras est malesuada facilisi facilisi eget morbi. Cum justo quis dui laoreet fermentum fringilla. Non non dictum ipsum est tellus adipiscing. <br />
                        Netus a sodales a lorem eget sed. Scelerisque id urna massa convallis suspendisse ultrices dignissim sed. Facilisis vestibulum convallis varius tellus. Morbi neque egestas etiam feugiat amet. Accumsan fusce sed id id faucibus viverra nunc ut. Porttitor ac cursus rhoncus amet semper nunc quis vitae fermentum. Hendrerit ipsum quis nulla.
                    </p>
                    <Button variant='product' className='py-2 px-28'>
                        CTA
                    </Button>
                </div>
            </div>
        </section>
        <section className='py-12 px-4 md:px-10 lg:px-2 mb-12'>
            <div className='mb-60'>
                <h2 className='text-25 text-color1 font-medium mb-2'>Business of the week</h2>
                <div className='flex items-center gap-14'>
                    <img className='flex-1 w-2/5 object-cover' src={BusOfTheWeek} alt="Business of The Week" />
                    <div className='flex-1.5 flex flex-col gap-6 items-start'>
                        <h3 className='text-3xlm'>Yenreach Business school</h3>
                        <p className='text-smm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus faucibus lobortis blandit consectetur massa rutrum dignissim luctus. Non quis fringilla ac semper quam non egestas velit. Mauris, odio viverra amet viverra. Quisque cursus non libero, vestibulum rhoncus, pulvinar donec hendrerit netus. Nibh neque vitae nulla morbi vulputate amet ac. Viverra elementum ullamcorper duis diam iaculis condimentum integer ut. Neque rhoncus convallis dictum viverra.
                        </p>
                        <Button className='text-sm rounded-md py-2.5 px-10 font-medium'>
                            view business
                        </Button>
                    </div>
                </div>
            </div>
            <div className=''>
                <h2 className='text-25 text-color1 font-medium mb-2'>keep up with the business world</h2>
                <div className='grid grid-cols-3 gap-6 text-white'>
                    <div className="relative bg-[url('assets/businesses/coperate.svg')] h-104 p-4 min-w\">
                        <span className='absolute bottom-24 w-2/3 text-3xlm'>The struggle in the  Corperate world</span>
                    </div>
                    <div className='grid grid-cols-2 gap-2 col-span-2'>
                        <div className="relative bg-[url('assets/businesses/sme.svg')] p-5">
                            <span className='w-3/4 text-2xl font-semibold absolute bottom-12'>SME gains $30Mil on Seed A</span>
                        </div>
                        <div className="relative bg-[url('assets/businesses/tech.svg')] p-5">
                            <span className='w-3/4 text-2xl font-semibold absolute bottom-12'>Technology conntributes more  then Oil in Nigeria</span>
                        </div>
                        <div className="relative bg-[url('assets/businesses/insure.svg')] p-5">
                            <span className='w-3/4 text-2xl font-semibold absolute bottom-11'>The future of Innsurance Companies </span>
                        </div>
                        <div className="relative bg-[url('assets/businesses/google.svg')] p-5">
                            <span className='w-3/4 text-2xl font-semibold absolute bottom-11'>How Google Harms us</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-12 px-4 md:px-10 lg:px-2 mb-11'>
            <h2 className='text-25 text-color1 font-medium text-center'>Frequently asked questions</h2>
            <Accordion />
        </section>
        {/* <Footer /> */}
    </>
  )
}

export default index