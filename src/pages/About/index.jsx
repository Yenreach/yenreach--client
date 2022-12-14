import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Search from '../../assets/search.svg'
import Team1 from '../../assets/Us/team-1.svg'
import ISMN from '../../assets/Us/ISMN.svg'
import SMS from '../../assets/sms.svg'
import Linkedin from '../../assets/linkedin.svg'
import AboutBlob from '../../assets/about-blob.svg'


const index = () => {
  return (
      <>
        <Header />
        <section>
            <div className='bg-cover bg-top flex flex-col justify-between items-center gap-6 md:gap-8 py-16 pt-40 sm:py-12 sm:pt-32 px-4 sm:px-16 md:px-32 lg:px-48 relative overflow-hidden bg-footer-bg'>
                <h1 className='text-3xl font-medium text-dark-light sm:text-40 text-center sm:leading-normal'>Helping <span className='text-green'>Businesses</span> reach<br />the <span className='text-blue'>right</span> audience</h1>
                <p className='text-center text-[#476788] font-arialsans sm:text-lg sm:w-4/5 lg:w-2/3'>
                    From small businesses to fortune 500 companies, Hundreds of businesses now use <span className='text-green font-semibold'>YENREACH</span> to reach out to thier customers
                </p>
                <span className='hidden sm:block bg-[#89f1b433] absolute w-4/5 pb-[80%] rounded-full top-0 mt-24'></span>
            </div>
            <div className='py-20 sm:py-12 px-4 md:px-10 lg:px-20'>
                <div className='flex items-center justify-between w-full sm:w-11/12  mx-auto px-2 mb-32'>
                    <div className='flex flex-col items-center'>
                        <span className='font-semibold text-3xl sm:text-40 text-green'>2000<span className='text-blue'>+</span></span>
                        <span className='text-2xl text-[#476788] font-arialsans'>Businesses</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='font-semibold text-3xl sm:text-40 text-green'>172<span className='text-blue'>+</span></span>
                        <span className='text-2xl text-[#476788] font-arialsans'>Locations</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='font-semibold text-3xl sm:text-40 text-green'>50000<span className='text-blue'>+</span></span>
                        <span className='text-2xl text-[#476788] font-arialsans'>Audience</span>
                    </div>
                </div>
                <h3 className='text-2xl text-green font-medium pb-3'>Our Mandate</h3>
                <div className='font-arialsans text-[#476788] relative'>
                    <img src={AboutBlob} alt="" className='hidden md:block absolute right-0 top-1/2 -translate-y-1/2' />
                    <div className='md:w-10/12 flex flex-col gap-3'>
                        <p className=''>
                            For most businesses in Nigeria, the major challenge has never been about the quality of their product or service. The daunting challenge has been the need for businesses to showcase their products and services to potential customers who are eager to pay them in exchange for their excellent product and service delivery.
                        </p>
                        <p className=''>
                            Inasmuch as there are advertising channels available today that offer such, the cost of showcasing their brands on these platforms have made it unaffordable for most business owners and professionals. In a bid to bridge this gap, yenreach.com was established with the sole aim of helping local businesses and professional services connect with the right customers and also helping customers connect with the right businesses and professional services and doing so at business friendly prices.
                        </p>
                        <p className=''>
                            Our mission is to give local businesses and professionals the visibility and reach they require to help scale their business and also do that in a social and engaging way without neglecting the immense value of our users and our brand commitment.
                        </p>
                        <p className=''>   
                            Yenreach is a subsidiary of Dordorian Concept Ltd, an indigenous business and human capacity development and consultancy company duly registered with the Corporate Affairs Commission (CAC) with RC-804640 and endorsed by the Advertising Practitioners Council of Nigeria APCON with the registration number 2280 to carry out advertising and auxiliary services.
                        </p>
                    </div>
                </div>
            </div>
            <div className='py-20 sm:py-12 px-4 md:px-10 lg:px-20 bg-footer-bg'>
                <h3 className='text-2xl text-center text-green font-medium mb-8'>On the stable of our consultancy are</h3>
                <div className='flex gap-4 flex-wrap justify-center lg:w-5/6 mx-auto'>
                    <div className='flex items-center gap-6 px-3 py-5 w-64 bg-white hover:drop-shadow-2xl'>
                        <img src={ISMN} alt="" className='w-12' />
                        <p className='text-[#476788] font-arialsans'>Institute of strategic Management Nigeria (ISMN)</p>
                    </div>
                    <div className='flex items-center gap-6 px-3 py-5 w-64 bg-white hover:drop-shadow-2xl'>
                        <img src={ISMN} alt="" className='w-12' />
                        <p className='text-[#476788] font-arialsans'>Institute of strategic Management Nigeria (ISMN)</p>
                    </div>
                    <div className='flex items-center gap-6 px-3 py-5 w-64 bg-white hover:drop-shadow-2xl'>
                        <img src={ISMN} alt="" className='w-12' />
                        <p className='text-[#476788] font-arialsans'>Institute of strategic Management Nigeria (ISMN)</p>
                    </div>
                    <div className='flex items-center gap-6 px-3 py-5 w-64 bg-white hover:drop-shadow-2xl'>
                        <img src={ISMN} alt="" className='w-12' />
                        <p className='text-[#476788] font-arialsans'>Institute of strategic Management Nigeria (ISMN)</p>
                    </div>
                    <div className='flex items-center gap-6 px-3 py-5 w-64 bg-white hover:drop-shadow-2xl'>
                        <img src={ISMN} alt="" className='w-12' />
                        <p className='text-[#476788] font-arialsans'>Institute of strategic Management Nigeria (ISMN)</p>
                    </div>
                </div>
            </div>
            <div className='py-20 sm:py-12 px-4 md:px-10 lg:px-20 mb-4 md:mb-48'>
                <h3 className='text-2xl text-green font-medium pb-3'>Meet the Team</h3>
                <p className='text-[#476788] mb-10 font-arialsans sm:w-2/3 lg:w-1/2'>
                    Yenreach is filled with lots of potentils that are making sure we keep offering the best to our users
                </p>
                <div className='grid sm:grid-cols-bus2 lg:grid-cols-bus3 gap-4 font-arialsans'>
                    <div className='flex items-center justify-between gap-3 p-5 pt-6 bg-[#FAFAFA]'>
                        <div className='flex flex-col gap-6 items-start'>
                            <div className=''>
                                <h5 className='text-[#282F38] text-lg'>Dordor Daniel</h5>
                                <p className='text-[#838282]'>President, Dordorian Group</p>
                            </div>
                            <span className='flex items-center gap-3'>
                                <span>
                                    <img src={Linkedin} alt="" />
                                </span>
                                <span>
                                    <img src={SMS} alt="" />
                                </span>
                            </span>
                        </div>
                        <img src={Team1} alt="" className='w-14' />
                    </div>
                    <div className='flex items-center justify-between gap-3 p-5 pt-6 bg-[#FAFAFA]'>
                        <div className='flex flex-col gap-6 items-start'>
                            <div className=''>
                                <h5 className='text-[#282F38] text-lg'>Dordor Daniel</h5>
                                <p className='text-[#838282]'>President, Dordorian Group</p>
                            </div>
                            <span className='flex items-center gap-3'>
                                <span>
                                    <img src={Linkedin} alt="" />
                                </span>
                                <span>
                                    <img src={SMS} alt="" />
                                </span>
                            </span>
                        </div>
                        <img src={Team1} alt="" className='w-14' />
                    </div>
                    <div className='flex items-center justify-between gap-3 p-5 pt-6 bg-[#FAFAFA]'>
                        <div className='flex flex-col gap-6 items-start'>
                            <div className=''>
                                <h5 className='text-[#282F38] text-lg'>Dordor Daniel</h5>
                                <p className='text-[#838282]'>President, Dordorian Group</p>
                            </div>
                            <span className='flex items-center gap-3'>
                                <span>
                                    <img src={Linkedin} alt="" />
                                </span>
                                <span>
                                    <img src={SMS} alt="" />
                                </span>
                            </span>
                        </div>
                        <img src={Team1} alt="" className='w-14' />
                    </div>
                    <div className='flex items-center justify-between gap-3 p-5 pt-6 bg-[#FAFAFA]'>
                        <div className='flex flex-col gap-6 items-start'>
                            <div className=''>
                                <h5 className='text-[#282F38] text-lg'>Dordor Daniel</h5>
                                <p className='text-[#838282]'>President, Dordorian Group</p>
                            </div>
                            <span className='flex items-center gap-3'>
                                <span>
                                    <img src={Linkedin} alt="" />
                                </span>
                                <span>
                                    <img src={SMS} alt="" />
                                </span>
                            </span>
                        </div>
                        <img src={Team1} alt="" className='w-14' />
                    </div>
                    <div className='flex items-center justify-between gap-3 p-5 pt-6 bg-[#FAFAFA]'>
                        <div className='flex flex-col gap-6 items-start'>
                            <div className=''>
                                <h5 className='text-[#282F38] text-lg'>Dordor Daniel</h5>
                                <p className='text-[#838282]'>President, Dordorian Group</p>
                            </div>
                            <span className='flex items-center gap-3'>
                                <span>
                                    <img src={Linkedin} alt="" />
                                </span>
                                <span>
                                    <img src={SMS} alt="" />
                                </span>
                            </span>
                        </div>
                        <img src={Team1} alt="" className='w-14' />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
      </>
  )
}

export default index