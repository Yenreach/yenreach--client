import React, { useRef, useEffect, useState } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import Computer from '/src/assets/computer.svg'
// import DECImg from '/src/assets/DEC_Image.jpg'
// import LogoImg from '/src/assets/LOGO_4491659091525.jpg'
import AdsImg from '/src/assets/adsimage.jpg'
// import EmitImg from '/src/assets/emite.png'
// import TecImg from '/src/assets/tec.jpg'
import YenCityImg from '/src/assets/yen-city.jpg'
import MkImage from '/src/assets/mk.png'
// import ImaxImage from '/src/assets/imax.png'
// import EvidenceImage from '/src/assets/evidence.png'
// import MajesticImage from '/src/assets/majestic.png'
// import XhibitImage from '/src/assets/xhibit.png'
// import JovitesImage from '/src/assets/jovites.png'
// import KristolImage from '/src/assets/kristol.png'



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
    //     title: 'Bite beauty Enterprise',
    //     description: 'Oriflame beauty products, hair and hair accessories, attachment, etc',
    //     image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F61c9cae4-584a-4efd-89f4-22399bf09d20?alt=media&token=96146b01-5393-427c-b5e1-641039004b3e',
    //     link: '/business/63d0880bf872141852b8d7f6ede919f514cf37e1'
    // },
    // {
    //     id: 3,
    //     title: 'LORDSONCHUKS ELECTRONICKS GLOBAL CONCEPT',
    //     description: 'Dealers on Electronics Home Appliances such as Air conditioners, Televisions,Gas coolers, Generators,Home Theaters, Fridges/Freezers,water Dispensers etc',
    //     image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F6729854d-fddc-47fe-8fa4-5d502a71609d?alt=media&token=612dc39b-d098-40bf-b698-92c2397ae5c1',
    //     link: '/business/9c6dd09a4402f116f5764d9ac8c83233003e51ef'
    // },
    // {
    //     id: 3.4,
    //     title: 'Inebi celebrity Resources',
    //     description: 'We deal on Italian shoes bags Turkey, USA London wears Indian gowns shoes Etibor material Native e.g Namatigbi Feni Indian wrappers George wrappers of all kind Laces of all kind Hollandies double single High Target wax Children wears French lace Plain George Big head Ties of all kind (Gele)',
    //     image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F737cbd15-296c-478d-92a0-1426a6ab30e6?alt=media&token=ffcf287b-dc23-4e2b-b25e-5209682817d4',
    //     link: '/business/934d772e8d186eac2218efbec93414715f5f3b4d'
    // },
    // {
    //     id: 3.6,
    //     title: 'BUNA INVESTMENT AND RESOURCE LIMITED',
    //     description: 'Real Estate Developer. We buy and sell land and properties.',
    //     image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F7497f3c5-c4c4-4c1e-a158-a511a9532c2a?alt=media&token=74962efc-4454-41c7-9cd1-a93840bf03ed',
    //     link: '/business/858fd3a43275d7b4573eb9666ada3e31280de01e'
    // },
    // {
    //     id: 3.8,
    //     title: 'Wiz Works',
    //     description: 'Sales of all kinds of window blinds, curtains and its accessories. We give the best services.',
    //     image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F7546934e-7be2-4481-9c27-abc2b68c72a3?alt=media&token=66eba931-8ea9-4f41-b78b-32170c96c891',
    //     link: '/business/8c34c22e12ef989e776fde47060c9158409883b2'
    // },
    // {
    //     id: 3.9,
    //     title: 'Everlight Solar And Electrical Ventures',
    //     description: 'Your one-stop hub for all things solar and electrical_ ! 🌞 Switch to Solar Today 🌞 Why pay high energy bills when you can harness the power of the sun?',
    //     image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F601a6a3c-6f0c-4539-b9cc-501694760752?alt=media&token=b1205419-3fc4-48c9-806f-29cb23f74659',
    //     link: '/business/794a8a6a454b5a2ce4ca8bb2abab2b386b195d28'
    // },
    // {
    //     id: 4,
    //     title: 'Yenreach City',
    //     description: 'Own a plot in the New city within Yenagoa metropolis',
    //     image: YenCityImg,
    //     link: 'https://www.facebook.com/profile.php?id=61554315148708&mibextid=LQQJ4d'
    // },

    {
        id: 4,
        title: 'Mr. P Photography',
        description: 'We deal on all kinds of photography work etc',
        image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2Fc5cf619e-0543-473b-a1fc-a02c5dbcbc4c?alt=media&token=2b67795e-3b75-40a4-b214-c320a29e9ef4',
        link: 'business/d33b18956d95083fc629531727f93d7a3a357b4e'
    },
    {
        id: 5,
        title: 'Franco tochyz invest. Nig. Ltd',
        description: 'Deal on home appliances such as smart tv, sound bar, generators, refrigerators, fans , microwave , gas cookers , washing machine, pressing iron etc.',
        image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F1a8d3f8a-af7b-4174-96b1-356b228c65b8?alt=media&token=fc652b85-d855-4cfd-ac8a-6140735500a4',
        link: '/business/a119f801233217992003c0e6139bac3bc7b73dc7'
    },
    {
        id: 6,
        title: "J's Splendor Ventures",
        description: 'Sales of liquor soap,bar soap,dark, shine your white etc.',
        image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2Fb5dc8cc9-b6a4-42fa-8a86-1ba5b9d7a412?alt=media&token=aaa07a7a-fab3-4e16-afef-fe06845a84e0',
        link: "/business/c8791b045de41f9538ff8148ab613232cfd42285"
    },
    {
        id: 7,
        title: 'BUNA INVESTMENT AND RESOURCE LIMITED',
        description: 'Real Estate Developer. We buy and sell land and properties',
        image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F7497f3c5-c4c4-4c1e-a158-a511a9532c2a?alt=media&token=74962efc-4454-41c7-9cd1-a93840bf03ed',
        link: "/business/858fd3a43275d7b4573eb9666ada3e31280de01e"
    },
    {
        id: 8,
        title: 'Bite beauty Enterprise',
        description: 'Oriflame beauty products, hair and hair accessories, attachment etc',
        image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F7497f3c5-c4c4-4c1e-a158-a511a9532c2a?alt=media&token=74962efc-4454-41c7-9cd1-a93840bf03ed',
        link: "/business/63d0880bf872141852b8d7f6ede919f514cf37e1"
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