import React, { useRef, useEffect, useState } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Computer from '/src/assets/computer.svg'
import AdsImg from '/src/assets/adsimage.jpg'
import EmitImg from '/src/assets/emite.png'
import TecImg from '/src/assets/tec.jpg'
import MkImage from '/src/assets/mk.png'
import ImaxImage from '/src/assets/imax.png'
import EvidenceImage from '/src/assets/evidence.png'
import MajesticImage from '/src/assets/majestic.png'
import XhibitImage from '/src/assets/xhibit.png'
import JovitesImage from '/src/assets/jovites.png'
import KristolImage from '/src/assets/kristol.png'



const billboards = [
    // {
    //     id: 1,
    //     title: 'Dordorian Estate Limited',
    //     description: 'Own your dream Property in Fast developing locations across Yenagoa, Bayelsa State.',
    //     image: DECImg,
    //     link: 'https://dordorianestate.com'
    // },
    // {
    //     id: 2,
    //     title: 'Globus Bank',
    //     description: 'A commercial bank with National Authorization. Registered as a limited liability company on March 6, 2019, licensed by the Central Bank of Nigeria on July 10, 2019 and commenced operations on November 6, 2019.',
    //     image: LogoImg,
    //     link: '/business/3b103aaa17b1e28da751caa93e1c67aa11515838'
    // },
    // {
    //     id: 3,
    //     title: 'Mutual Benefits Life Assurance Limited',
    //     description: 'One of Nigeria\'s leading life Insurance provider with products ranging from, *Children Education Plan *Individual Savings Plan *Group life *General Third Party Liability *Professional Indemnity *Public Liability *Comprehensive Car Insurance *Mutual Term Assurance *Goods -in-transit E.T.C',
    //     image: MutualImage,
    //     link: '/business/bfd9cc92264da47e591e505e860f143ef5d69eba'
    // },
    {
        id: 4,
        title: 'Emitex global Enterprise',
        description: 'Welcome to our Furniture Electronics Shop, where we take pride in providing you with an exceptional shopping experience like no other',
        image: EmitImg,
        link: '/business/73457ce1a6750c8949b22309f31cdc75c0952f5c'
    },
    {
        id: 4,
        title: 'Tec Industrial Park',
        description: 'Own a plot in the New city within Yenagoa metropolis',
        image: TecImg,
        link: 'https://www.facebook.com/profile.php?id=61554315148708&mibextid=LQQJ4d'
    },
    {
        id: 5,
        title: 'MK-Series',
        description: 'Repairs of Android and iPhones laptops and desktops. Sales of phone gadgets and accessories, such as chargers, earpiece, head phones, original data cable, phone pouches, game pads power banks and lots more.',
        image: MkImage,
        link: '/business/935ed3e931dd3615ced90e0967d6704718387d7b'
    },
    {
        id: 6,
        title: 'Laptop Center',
        description: 'Sales of all kinds of laptops, iPhones, phones computer accessories, keyboards, mouse, projectors, game pads, repairs of laptops etc',
        image: Computer,
        link: '/business/d19ed3e682a2c00406a269eb9fd60121141a0ef9'
    },
    {
        id: 7,
        title: 'Evidence of Faith Communication',
        description: 'Dealers in all kinds of phones and accessories',
        image: EvidenceImage,
        link: '/business/cf179662382aec37497562bdf1ea18f7078f4696'
    },
    {
        id: 8,
        title: 'Kristoral Global Concept',
        description: 'Deals on all kinds of building materials, including Stainless handrail, security doors, wrought irons, car pot, rolling door, aluminum handrails, water collector, stainless pipes and accessories, stainless gates and installations.',
        image: KristolImage,
        link: '/business/0900744ae23ddfb612a7f19c52dba220d4cea927'
    },
    {
        id: 9,
        title: 'Majestic Boutique',
        description: 'At majestic boutique, we sell both male, female and children wears such as Italian shoes, suits, jeans and so much more with high quality yet at a very affordable prices',
        image: MajesticImage,
        link: '/business/d934429bb2383fd358d2144aa14688a298e1c6d4'
    },
    {
        id: 10,
        title: 'Xzibit Mobile Hub',
        description: 'Deals on all kinds of Belgium and new phones such as iPhones, Tecno, Infinix, itel, Oppo and vivo phones. Laptops such as HP, Lenovo and Toshiba. Power bank, chargers, headphones, earpiece etc. We also repair all kinds of phones.',
        image: XhibitImage,
        link: '/business/b0e1f6f90608b8454312fecb45f474aadaebfe4c'
    },
    {
        id: 11,
        title: 'iMAX HUB',
        description: 'Deals on all kinds of Apple phones, gadgets and accessories',
        image: ImaxImage,
        link: '/business/39a689be35164c85ca813cb1dc0ba2b052581fde'
    },
    {
        id: 12,
        title: 'Jovites cakes',
        description: 'We deal on all kinds of cakes, egg roll, sharwama and pasteries',
        image: JovitesImage,
        link: '/business/abd00470118b4ab86184e35eb1aa82424615a2e4'
    },
    {
        id: 30,
        title: 'Advertise your business here',
        description: 'Advertise your business here',
        image: AdsImg,
        link: '/users/billboard'
    }

]

const Billboard = () => {
    let [swiper, setSwiper] = useState(null)
    
    useEffect(() => {
        if (!!billboards?.length) {
            const swipers = new Swiper('.swiper', {
                // direction: 'vertical',
                speed: 1500,
                // spaceBetween: 100,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                loop: true,
                
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },
                
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                // configure Swiper to use modules
                modules: [Navigation, Pagination, Autoplay],
            });
            setSwiper(swipers)
        }
    }, [billboards?.length])
  
  

    // const [active, setActive] = useState(0)
    // const carouselRef = useRef(null)

    // const handleNext = () => {
    //     if (!carouselRef.current) {
    //         return
    //     }
    //     if (active === carouselRef.current?.children.length - 1) {
    //         setActive(0)
    //     } else {
    //         setActive(active + 1)
    //     }
    // }
    
    // const handlePrev = () => {
    //     if (!carouselRef.current) {
    //         return
    //     }
    //     if (active === 0) {
    //         setActive(carouselRef.current?.children - 1)
    //     } else {
    //         setActive(active - 1)
    //     }
    // }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleNext()
    //     }, 5000)
    //     return () => clearInterval(interval)
    // }, [active])

    // useEffect(() => {
    //     [...carouselRef.current?.children].map((child) => {
    //         child.classList.remove('ad-active')
    //         child.classList.add('carousel-ad')
    //     })
    //     carouselRef.current?.children[active]?.classList.remove('carousel-ad')
    //     carouselRef.current?.children[active]?.classList.add('ad-active')
    //     return () => {
    //         carouselRef.current?.children[active].classList.remove('ad-active')
    //     }
    // }, [active])







  return (
     <div className='flex w-full h-full pb-16 overflow-hidden'>
        {/* <div ref={carouselRef} className="h-fit min-h-[90vh] md:min-h-[300px] md:h-[400px] overflow-hidden flex overflow-x-hidden w-screen relative"> */}
        <div className="h-fit min-h-[90vh] md:min-h-[300px] md:h-[430px] overflow-hidden flex overflow-x-hidden w-screen relative">
            {/* {billboards.map((billboard) => (
                <div key={billboard?.id} className="absolute w-full bg-white h-fit md:h-full min-w-fit carousel-billboard">
                    <div className='flex flex-col items-center justify-center w-full h-full gap-8 md:flex-row'>
                        <div className="flex-1 w-full h-full">
                            <img src={billboard?.image} alt="advert-banner" className='w-full h-[250px] md:h-full object-fill carousel-img' />
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 w-full h-full gap-4 text-center">
                            <h2 className="text-xl text-black lg:text-3xl text-capitalize text-bold">{billboard?.title}</h2>
                            <p className="max-w-[400px] text-center mb-6 text-sm lg:text-base text-black/70">
                            {billboard?.description}
                            </p>
                            <a href={billboard?.link} target="_blank" className="px-4 py-2 text-sm text-white rounded bg-green">Learn more</a>
                        </div>
                    </div>
                </div>
            ))}
                 */}
                <div className='absolute top-0 left-0 w-full h-full'>

                    {
                    !!billboards?.length && (billboards?.length > 0) &&
                        <div className="h-full swiper">
                            <div className="h-[90%] swiper-wrapper">
                                {
                                    billboards?.map((billboard, index) => 
                                    <div key={index} className="h-full swiper-slide">
                                        <div className='flex flex-col items-center justify-center w-full h-full gap-8 md:flex-row'>
                                            <div className="flex-1 w-full h-full">
                                                <img src={billboard?.image} alt="advert-banner" className='w-full h-[250px] md:h-full object-fill carousel-img' />
                                            </div>
                                            <div className="flex flex-col items-center justify-center flex-1 w-full h-full gap-4 text-center">
                                                <h2 className="text-xl text-black lg:text-3xl text-capitalize text-bold">{billboard?.title}</h2>
                                                <p className="max-w-[400px] text-center mb-6 text-sm lg:text-base text-black/70">
                                                {billboard?.description}
                                                </p>
                                                <a href={billboard?.link} target="_blank" className="px-4 py-2 text-sm text-white rounded bg-green">Learn more</a>
                                            </div>
                                        </div>
                                    </div>

                                    // <div key={index} className="swiper-slide">
                                    //     <img width={100} height={100} src={billboard.image} alt="advert-banner" className='w-full h-full bg-cover rounded-md' />
                                    // </div>
                                    )
                                }
                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-pagination"></div>
                        </div>
                    }
                </div>

        </div>
    </div>
  )
}

export default Billboard
