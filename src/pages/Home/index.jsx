import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '/src/components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Category from '../../components/Category'
import Accordion from '../../components/Accordion'
import AllHere from '../../assets/businesses/all-here.svg'
import AllHereJ from '../../assets/jobs/all-here.svg'
import AllHereP from '../../assets/products/all-here.svg'
import BusOfTheWeek from '../../assets/bus_of_the_week.svg'
import Button from '../../components/ui/Button'
import { apiLogin, apiTest } from '../../adapters/AuthAdapter'

const index = () => {
    useEffect(() => {
        const fetchD = async () => {
            const result = await apiTest({name: "nICK"})
            console.log("result", result)
        }

        fetchD()
    }, [])

  return (
    <>
        <Header />
        <Hero />
        <Category />
        <section className='px-4 py-12 md:px-10 lg:px-24'>
            <div className='bg-[url("assets/audience.svg")] h-64 bg-cover bg-center text-white flex flex-col justify-between items-center py-10 mb-28 px-4 sm:px-12 md:px-24'>     
                <div className='flex flex-col items-center gap-2'>
                    <h2 className='text-2xl font-medium text-center sm:text-3xl md:text-40'>Get your business to the right audience</h2>
                    <span className='text-xl '>It's Totally free</span>
                </div>
                <Button className='px-12 py-3 rounded'>
                    Add my business
                </Button>
            </div>
            <div className='flex flex-col items-center mb-32 sm:flex-row gap-9'>
                <img src={AllHere} alt="" className="object-cover w-full sm:w-1/2" />
                <div className='flex flex-col items-start gap-12'>
                    <h3 className='font-medium text-3xlm text-green'>They are all Here</h3>
                    <p className='text-xs text-[#476788]'>
                        Lorem ipsum dolor sit amet consectetur. Ultricies consectetur nisi ornare tempor. Senectus tortor arcu est duis posuere ante. Cras est malesuada facilisi facilisi eget morbi. Cum justo quis dui laoreet fermentum fringilla. Non non dictum ipsum est tellus adipiscing. <br />
                        Netus a sodales a lorem eget sed. Scelerisque id urna massa convallis suspendisse ultrices dignissim sed. Facilisis vestibulum convallis varius tellus. Morbi neque egestas etiam feugiat amet. Accumsan fusce sed id id faucibus viverra nunc ut. Porttitor ac cursus rhoncus amet semper nunc quis vitae fermentum. Hendrerit ipsum quis nulla.
                    </p>
                    <Button className='py-2 px-28'>
                        CTA
                    </Button>
                </div>
            </div>
            <div className='flex flex-col-reverse items-center mb-32 sm:flex-row gap-9'>
                <div className='flex flex-col items-start gap-12'>
                    <h3 className='font-medium text-3xlm text-blue'>They are all Here</h3>
                    <p className='text-xs text-[#476788]'>
                        Lorem ipsum dolor sit amet consectetur. Ultricies consectetur nisi ornare tempor. Senectus tortor arcu est duis posuere ante. Cras est malesuada facilisi facilisi eget morbi. Cum justo quis dui laoreet fermentum fringilla. Non non dictum ipsum est tellus adipiscing. <br />
                        Netus a sodales a lorem eget sed. Scelerisque id urna massa convallis suspendisse ultrices dignissim sed. Facilisis vestibulum convallis varius tellus. Morbi neque egestas etiam feugiat amet. Accumsan fusce sed id id faucibus viverra nunc ut. Porttitor ac cursus rhoncus amet semper nunc quis vitae fermentum. Hendrerit ipsum quis nulla.
                    </p>
                    <Button variant='job' className='py-2 px-28'>
                        CTA
                    </Button>
                </div>
                <img src={AllHereJ} alt="" className="object-cover w-full sm:w-1/2" />
            </div>
            <div className='flex flex-col items-center mb-32 sm:flex-row gap-9'>
                <img src={AllHereP} alt="" className="object-cover w-full sm:w-1/2" />
                <div className='flex flex-col items-start gap-12'>
                    <h3 className='font-medium text-3xlm text-orange'>They are all Here</h3>
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
        <section className='px-4 py-12 mb-12 md:px-10 lg:px-24'>
            <div className='mb-60'>
                <h2 className='mb-2 font-medium text-center text-25 text-green'>Business of the week</h2>
                <div className='flex flex-col items-center sm:flex-row gap-14'>
                    <img className='flex-1 object-cover w-full sm:w-2/5' src={BusOfTheWeek} alt="Business of The Week" />
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
                <h2 className='mb-2 font-medium text-center text-25 text-green'>keep up with the business world</h2>
                <div className='flex flex-col grid-cols-3 gap-6 text-white sm:grid'>
                    <div className="relative bg-[url('assets/businesses/coperate.svg')] bg-cover bg-center h-52 sm:h-104 p-4 min-w\">
                        <span className='absolute w-2/3 bottom-12 sm:bottom-24 text-3xlm'>The struggle in the  Corperate world</span>
                    </div>
                    <div className='flex flex-col grid-cols-2 col-span-2 gap-2 sm:grid'>
                        <div className="relative bg-[url('assets/businesses/sme.svg')] p-5 h-52 bg-cover bg-center">
                            <span className='absolute w-3/4 text-2xl font-semibold bottom-12'>SME gains $30Mil on Seed A</span>
                        </div>
                        <div className="relative bg-[url('assets/businesses/tech.svg')] p-5 h-52 bg-cover bg-center">
                            <span className='absolute w-3/4 text-2xl font-semibold bottom-12'>Technology conntributes more  then Oil in Nigeria</span>
                        </div>
                        <div className="relative bg-[url('assets/businesses/insure.svg')] p-5 h-52 bg-cover bg-center">
                            <span className='absolute w-3/4 text-2xl font-semibold bottom-11'>The future of Innsurance Companies </span>
                        </div>
                        <div className="relative bg-[url('assets/businesses/google.svg')] p-5 h-52 bg-cover bg-center">
                            <span className='absolute w-3/4 text-2xl font-semibold bottom-11'>How Google Harms us</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='px-4 py-12 sm:px-20 md:px-32 lg:px-64 mb-11'>
            <h2 className='font-medium text-center text-25 text-green'>Frequently asked questions</h2>
            <Accordion />
        </section>
        <Footer />
    </>
  )
}

export default index