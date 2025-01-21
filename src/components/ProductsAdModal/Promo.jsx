import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import PromoImg1 from '../../assets/promo1.png'
import PromoImg2 from '../../assets/promo2.png'
import PromoImg3 from '../../assets/promo3.png'
import PromoImg4 from '../../assets/promo4.png'
import PromoImg5 from '../../assets/promo5.png'

const Promo = ({ closeModal }) => {
    let [swiper, setSwiper] = useState(null)
    const promos = [
        {
            id: 2,
            title: 'Bite beauty Enterprise',
            description: 'Oriflame beauty products, hair and hair accessories, attachment, etc',
            image: PromoImg1,
            link: '/business/63d0880bf872141852b8d7f6ede919f514cf37e1'
        },
        {
            id: 3,
            title: 'LORDSONCHUKS ELECTRONICKS GLOBAL CONCEPT',
            description: 'Dealers on Electronics Home Appliances such as Air conditioners, Televisions,Gas coolers, Generators,Home Theaters, Fridges/Freezers,water Dispensers etc',
            image: PromoImg2,
            link: '/business/9c6dd09a4402f116f5764d9ac8c83233003e51ef'
        },
        {
            id: 3.4,
            title: 'Inebi celebrity Resources',
            description: 'We deal on Italian shoes bags Turkey, USA London wears Indian gowns shoes Etibor material Native e.g Namatigbi Feni Indian wrappers George wrappers of all kind Laces of all kind Hollandies double single High Target wax Children wears French lace Plain George Big head Ties of all kind (Gele)',
            image: PromoImg3,
            link: '/business/934d772e8d186eac2218efbec93414715f5f3b4d'
        },
        {
            id: 3.6,
            title: 'BUNA INVESTMENT AND RESOURCE LIMITED',
            description: 'Real Estate Developer. We buy and sell land and properties.',
            image: PromoImg4,
            link: '/business/858fd3a43275d7b4573eb9666ada3e31280de01e'
        },
        {
            id: 66,
            title: 'BUNA INVESTMENT AND RESOURCE LIMITED',
            description: 'Real Estate Developer. We buy and sell land and properties.',
            image: PromoImg5,
            link: '/business/858fd3a43275d7b4573eb9666ada3e31280de01e'
        },
    ]

    useEffect(() => {
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
    }, [])
  
  return (
     <div className='flex w-full h-full overflow-hidden'>
        <div className="h-fit min-h-[70vh] overflow-hidden flex overflow-x-hidden w-full relative">
                <div className='absolute top-0 left-0 w-full h-full'>
                    <div className="h-full swiper">
                        <div className="h-[90%] swiper-wrapper">
                            {
                                promos?.map((promo, index) => 
                                <div key={index} className="h-full swiper-slide">
                                    <div className='flex items-center justify-center w-full h-full gap-8 md:flex-row'>
                                        <div className="flex-1 w-full h-full">
                                            <img src={promo?.image} alt="product image" className='object-fill w-full h-full carousel-img' />
                                        </div>
                                        {/* <div className="flex flex-col items-center justify-center flex-1 w-full h-full gap-4 text-center">
                                            <h2 className="text-xl text-black lg:text-3xl text-capitalize text-bold">{promo?.product_name}</h2>
                                            <p className="max-w-[400px] text-center mb-6 text-sm lg:text-base text-black/70">
                                            {promo?.product_description}
                                            </p>
                                            <Link onClick={() => closeModal()} to={`products/${products?.data?.[random]?.product_string}`} className="px-4 py-2 text-sm text-white rounded cursor-pointer bg-orange">Shop Now</Link>
                                        </div> */}
                                    </div>
                                </div>
                                )
                            }
                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Promo