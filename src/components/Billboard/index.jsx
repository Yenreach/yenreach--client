import React, { useRef, useEffect, useState } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Computer from '/src/assets/computer.svg'
import DECImg from '/src/assets/DEC_Image.jpg'
import LogoImg from '/src/assets/LOGO_4491659091525.jpg'
import AdsImg from '/src/assets/adsimage.jpg'
import EmitImg from '/src/assets/emite.png'
import TecImg from '/src/assets/tec.jpg'
import YenCityImg from '/src/assets/yen-city.jpg'
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
    // {
    //     id: 4,
    //     title: 'Emitex global Enterprise',
    //     description: 'Welcome to our Furniture Electronics Shop, where we take pride in providing you with an exceptional shopping experience like no other',
    //     image: EmitImg,
    //     link: '/business/73457ce1a6750c8949b22309f31cdc75c0952f5c'
    // },
    {
        id: 4,
        title: 'Yenreach City',
        description: 'Own a plot in the New city within Yenagoa metropolis',
        image: YenCityImg,
        link: 'https://www.facebook.com/profile.php?id=61554315148708&mibextid=LQQJ4d'
    },
    // {
    //     id: 4,
    //     title: 'Tec Industrial Park',
    //     description: 'Own a plot in the New city within Yenagoa metropolis',
    //     image: TecImg,
    //     link: 'https://www.facebook.com/profile.php?id=61554315148708&mibextid=LQQJ4d'
    // },
    {
        id: 5,
        title: 'Mega Surplus Electronics gadget limited',
        description: 'Electronics, musical, Phone and gadgets',
        image: MkImage,
        link: '/business/2ea2ed47f8617293f35870a104133efa98ea7d1b'
    },
    {
        id: 6,
        title: 'Tubos kitchen',
        description: 'Tubos kitchen we do sell all kinds of dishes like all kind of perper soup,banga soup,coco yam etc',
        image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2Fc697cb24-d367-45e4-bb24-a3cc4caf2c4a?alt=media&token=81ec9bd2-9431-4f2b-9c60-a9f144843e40',
        link: '/business/7a86648cbba5f9c6bb9a386fc69089a018a1e6f8'
    },
    {
        id: 7,
        title: 'Hair masters',
        description: 'Barber shop sales of Cap, walking sticks, shoes Perfumes and Bags',
        image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2Fd8a2ec05-3b88-4f36-b9e0-79bf163af50e?alt=media&token=0034c9d8-ae3e-47cc-a854-966c96db93a5',
        link: '/business/ad66d2737c80264e367aa8e53ef828255cc884d6'
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
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-pagination"></div>
                        </div>
                    }
                </div>

        </div>
    </div>
  )
}

export default Billboard