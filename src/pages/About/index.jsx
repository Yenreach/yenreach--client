import React, { useMemo } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import useFetch from '/src/hooks/useFetch'
import { apiBusinessAnalytics } from '../../services/CommonService'
import ISMN from '../../assets/Us/ISMN.svg'
import CICRM from '../../assets/Us/CICRM.svg'
import ICEN from '../../assets/Us/ICEN.svg'
import CIA from '../../assets/Us/CIA.svg'
import NIMN from '../../assets/Us/NIMN.svg'
import BossImg from '../../assets/Us/dordor.png'
import GloriaImg from '../../assets/Us/gloriasec.png'
import EmannuelImg from '../../assets/Us/emma.png'
import ManagerImg from '../../assets/Us/manager.png'
import SMS from '../../assets/sms.svg'
import Linkedin from '../../assets/linkedin.svg'
import AboutBlob from '../../assets/about-blob.svg'

const staleTime = 1000 * 60 * 60 * 24

const index = () => {
    const { data: analytics, error: errorAnalytics } = useFetch({
        api: apiBusinessAnalytics,
        key: 'analytics',
        staleTime: staleTime,
        })

    const businessCount = useMemo(() => Math.floor((analytics?.business_count) / 100) * 100, [analytics?.business_count])
    const userCount = useMemo(() => Math.floor(analytics?.user_count / 100) * 100, [analytics?.user_count])
    
    return (
        <>
        <Header />
        <section>
            <div className='relative flex flex-col items-center justify-between gap-6 px-4 py-16 pt-24 overflow-hidden bg-top bg-cover md:gap-8 sm:py-12 sm:pt-32 sm:px-16 md:px-32 lg:px-48 bg-footer-bg'>
                <h1 className='text-xl font-medium text-center md:text-3xl text-dark-light sm:leading-normal'>Helping <span className='text-green'>Businesses</span> reach<br />the <span className='text-blue'>right</span> audience</h1>
                <p className='text-center text-[#476788] font-arialsans text-sm sm:text-lg max-w-xl'>
                    From small businesses to fortune 500 companies, Hundreds of businesses now use <span className='font-semibold text-green'>YENREACH</span> to reach out to thier customers
                </p>
                <span className='hidden sm:block bg-[#89f1b433] absolute w-4/5 pb-[80%] rounded-full top-0 mt-24'></span>
            </div>
            <div className='px-4 py-12 md:px-10 lg:px-20'>
                <div className='flex items-center justify-between w-full px-2 mx-auto mb-32 sm:w-11/12'>
                    <div className='flex flex-col items-center'>
                        <span className='text-xl font-semibold md:text-3xl text-green'>{businessCount || 1100}<span className='text-blue'>+</span></span>
                        <span className='text-sm md:text-lg text-[#476788] font-arialsans'>Businesses</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-xl font-semibold md:text-3xl text-green'>1<span className='text-blue'></span></span>
                        <span className='text-sm md:text-lg text-[#476788] font-arialsans'>Locations</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-xl font-semibold md:text-3xl text-green'>{userCount || 1000}<span className='text-blue'>+</span></span>
                        <span className='text-sm md:text-lg text-[#476788] font-arialsans'>Audience</span>
                    </div>
                </div>
                <h3 className='pb-3 text-xl font-medium text-green'>Our Mandate</h3>
                <div className='font-arialsans text-[#476788] relative text-sm sm:text-base'>
                    <img src={AboutBlob} alt="" className='absolute right-0 hidden -translate-y-1/2 md:block top-1/2' />
                    <div className='flex flex-col gap-3 md:w-10/12'>
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
            <div className='px-4 py-20 sm:py-12 md:px-10 lg:px-20 bg-footer-bg'>
                <h3 className='mb-8 text-xl font-medium text-center text-green'>On the stable of our consultancy are</h3>
                <div className='flex flex-col flex-wrap items-center justify-center gap-4 mx-auto text-sm xs:flex-row lg:w-5/6 sm:text-base'>
                    <div className='flex items-center w-64 gap-6 px-3 py-3 bg-white shadow-md pr- hover:drop-shadow-2xl'>
                        <img src={ISMN} alt="" className='object-cover object-center w-12 h-12' />
                        <p className='text-[#476788] font-arialsans'>Institute of strategic Management Nigeria <br />(ISMN)</p>
                    </div>
                    <div className='flex items-center w-64 gap-6 px-3 py-3 bg-white shadow-md pr- xs:w-80 hover:drop-shadow-2xl'>
                        <img src={CICRM} alt="" className='object-cover object-center w-12 h-12' />
                        <p className='text-[#476788] font-arialsans'>Chartered Institute of Customer Relationship Management <br />(CICRM)</p>
                    </div>
                    <div className='flex items-center w-64 gap-6 px-3 py-3 bg-white shadow-md pr- hover:drop-shadow-2xl'>
                        <img src={ICEN} alt="" className='object-cover object-center w-12 h-12' />
                        <p className='text-[#476788] font-arialsans'>Institute of Chartered Economist of Nigeria<br />(ICEN)</p>
                    </div>
                    <div className='flex items-center w-64 gap-6 px-3 py-3 bg-white shadow-md pr- hover:drop-shadow-2xl'>
                        <img src={CIA} alt="" className='object-cover object-center w-12 h-12' />
                        <p className='text-[#476788] font-arialsans'>Chartered Institute of Administration <br />(CIA)</p>
                    </div>
                    <div className='flex items-center w-64 gap-6 px-3 py-3 bg-white shadow-md pr- hover:drop-shadow-2xl'>
                        <img src={NIMN} alt="" className='object-cover object-center w-12 h-12' />
                        <p className='text-[#476788] font-arialsans'>National Institute of Marketing of Nigeria <br />(NIMN)</p>
                    </div>
                </div>
            </div>
            <div className='px-4 py-20 mb-4 sm:py-12 md:px-10 lg:px-20 md:mb-48'>
                <h3 className='pb-3 text-xl font-medium text-green'>Meet the Team</h3>
                <p className='text-sm text-[#476788] mb-10 font-arialsans sm:w-2/3 lg:w-1/2'>
                    Yenreach is filled with lots of potentials that are making sure we keep offering the best to our users
                </p>
                <div className='grid gap-4 sm:grid-cols-bus2 font-arialsans'>
                    <div className='flex items-center justify-between gap-3 p-5 pt-6 bg-[#FAFAFA]'>
                        <div className='flex flex-col items-start gap-6'>
                            <div className=''>
                                <h5 className='text-[#282F38] text-base font-medium'>Dordor Daniel</h5>
                                <p className='text-[#838282] text-sm capitalize'>President, Dordorian Group</p>
                            </div>
                            <span className='flex items-center gap-3'>
                                <a target='_blank' href="https://www.linkedin.com/in/dordor-daniel-3998b0275/">
                                    <img src={Linkedin} alt="" />
                                </a>
                                <a target='_blank' href="https://wa.me/2347037193301">
                                    <img src={SMS} alt="" />
                                </a>
                            </span>
                        </div>
                        <img src={BossImg} alt="" className='object-cover object-center w-20 h-20 overflow-hidden rounded-full' />
                    </div>
                    {/* <div className='flex items-center justify-between gap-3 p-5 pt-6 bg-[#FAFAFA]'>
                        <div className='flex flex-col items-start gap-6'>
                            <div className=''>
                                <h5 className='text-[#282F38] text-base font-medium'>Ogbonna Chinedu</h5>
                                <p className='text-[#838282] text-sm capitalize'>Operations Manager</p>
                            </div>
                            <span className='flex items-center gap-3'>
                                <a target='_blank' href="https://www.linkedin.com/in/duadei-nicholas-05957b18b/">
                                    <img src={Linkedin} alt="" />
                                </a>
                                <a target='_blank' href="https://wa.me/2349033398824">
                                    <img src={SMS} alt="" />
                                </a>
                            </span>
                        </div>
                        <img src={ManagerImg} alt="" className='object-cover object-center w-20 h-20 overflow-hidden rounded-full' />
                    </div> */}
                    <div className='flex items-center justify-between gap-3 p-5 pt-6 bg-[#FAFAFA]'>
                        <div className='flex flex-col items-start gap-6'>
                            <div className=''>
                                <h5 className='text-[#282F38] text-base font-medium'>Emmanuel Nwachukwu</h5>
                                <p className='text-[#838282] text-sm capitalize'>Business Development Executive</p>
                            </div>
                            <span className='flex items-center gap-3'>
                                <a target='_blank' href="https://www.linkedin.com/in/emmanuel-c-nwachukwu-3551b4273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                    <img src={Linkedin} alt="" />
                                </a>
                                <a target='_blank' href="https://wa.me/2348136213565">
                                    <img src={SMS} alt="" />
                                </a>
                            </span>
                        </div>
                        <img src={EmannuelImg} alt="" className='object-cover object-center w-20 h-20 overflow-hidden rounded-full' />
                    </div>
                    <div className='flex items-center justify-between gap-3 p-5 pt-6 bg-[#FAFAFA]'>
                        <div className='flex flex-col items-start gap-6'>
                            <div className=''>
                                <h5 className='text-[#282F38] text-base font-medium'>George Gloria</h5>
                                <p className='text-[#838282] text-sm capitalize'>Administrative Secretary</p>
                            </div>
                            <span className='flex items-center gap-3'>
                                <a target='_blank' href="https://www.linkedin.com/in/george-gloria-575644244/">
                                    <img src={Linkedin} alt="" />
                                </a>
                                <a target='_blank' href="https://wa.me/2348135209757">
                                    <img src={SMS} alt="" />
                                </a>
                            </span>
                        </div>
                        <img src={GloriaImg} alt="" className='object-cover object-center w-20 h-20 overflow-hidden rounded-full' />
                    </div>
                    {/* <div className='flex items-center justify-between gap-3 p-5 pt-6 bg-[#FAFAFA]'>
                        <div className='flex flex-col items-start gap-6'>
                            <div className=''>
                                <h5 className='text-[#282F38] text-base font-medium'>Dordor Daniel</h5>
                                <p className='text-[#838282] text-sm capitalize'>President, Dordorian Group</p>
                            </div>
                            <span className='flex items-center gap-3'>
                                <a target='_blank' href="https://www.linkedin.com/in/emmanuel-c-nwachukwu-3551b4273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                    <img src={Linkedin} alt="" />
                                </a>
                                <a target='_blank' href="https://wa.me/2348136213565">
                                    <img src={SMS} alt="" />
                                </a>
                            </span>
                        </div>
                        <img src={Team1} alt="" className='object-cover object-center w-20 h-20 overflow-hidden rounded-full' />
                    </div> */}
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default index