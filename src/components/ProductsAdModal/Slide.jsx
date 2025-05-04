import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import useFetch from '../../hooks/useFetch'
import { apiGetAllProducts } from '../../services/ProductService'
import { Link } from 'react-router-dom';

// const billboards = [
//     {
//         id: 2,
//         title: 'Bite beauty Enterprise',
//         description: 'Oriflame beauty products, hair and hair accessories, attachment, etc',
//         image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F61c9cae4-584a-4efd-89f4-22399bf09d20?alt=media&token=96146b01-5393-427c-b5e1-641039004b3e',
//         link: '/business/63d0880bf872141852b8d7f6ede919f514cf37e1'
//     },
//     {
//         id: 3,
//         title: 'LORDSONCHUKS ELECTRONICKS GLOBAL CONCEPT',
//         description: 'Dealers on Electronics Home Appliances such as Air conditioners, Televisions,Gas coolers, Generators,Home Theaters, Fridges/Freezers,water Dispensers etc',
//         image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F6729854d-fddc-47fe-8fa4-5d502a71609d?alt=media&token=612dc39b-d098-40bf-b698-92c2397ae5c1',
//         link: '/business/9c6dd09a4402f116f5764d9ac8c83233003e51ef'
//     },
//     {
//         id: 3.4,
//         title: 'Inebi celebrity Resources',
//         description: 'We deal on Italian shoes bags Turkey, USA London wears Indian gowns shoes Etibor material Native e.g Namatigbi Feni Indian wrappers George wrappers of all kind Laces of all kind Hollandies double single High Target wax Children wears French lace Plain George Big head Ties of all kind (Gele)',
//         image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F737cbd15-296c-478d-92a0-1426a6ab30e6?alt=media&token=ffcf287b-dc23-4e2b-b25e-5209682817d4',
//         link: '/business/934d772e8d186eac2218efbec93414715f5f3b4d'
//     },
//     {
//         id: 3.6,
//         title: 'BUNA INVESTMENT AND RESOURCE LIMITED',
//         description: 'Real Estate Developer. We buy and sell land and properties.',
//         image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F7497f3c5-c4c4-4c1e-a158-a511a9532c2a?alt=media&token=74962efc-4454-41c7-9cd1-a93840bf03ed',
//         link: '/business/858fd3a43275d7b4573eb9666ada3e31280de01e'
//     },
//     {
//         id: 3.8,
//         title: 'Wiz Works',
//         description: 'Sales of all kinds of window blinds, curtains and its accessories. We give the best services.',
//         image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F7546934e-7be2-4481-9c27-abc2b68c72a3?alt=media&token=66eba931-8ea9-4f41-b78b-32170c96c891',
//         link: '/business/8c34c22e12ef989e776fde47060c9158409883b2'
//     },
//     {
//         id: 3.9,
//         title: 'Everlight Solar And Electrical Ventures',
//         description: 'Your one-stop hub for all things solar and electrical_ ! 🌞 Switch to Solar Today 🌞 Why pay high energy bills when you can harness the power of the sun?',
//         image: 'https://firebasestorage.googleapis.com/v0/b/yenreach-49357.appspot.com/o/images%2F601a6a3c-6f0c-4539-b9cc-501694760752?alt=media&token=b1205419-3fc4-48c9-806f-29cb23f74659',
//         link: '/business/794a8a6a454b5a2ce4ca8bb2abab2b386b195d28'
//     },
// ]

const Slide = ({ closeModal }) => {
    let [swiper, setSwiper] = useState(null)
    const [randoms, setRandoms] = useState([])
    
    const { data: products, error: errorProducts, isLoading }  = useFetch({
        api: apiGetAllProducts,
        param: { page: 1, num_per_page: 40 },
        select: (data) => data,
        key: ['products', 1],
    })

    useEffect(() => {
        if (!products) return
        const arr = []
        const getRandoms = () => {
            return Math.floor(Math.random() * products?.data?.length)
        }

        for (let i=0; arr.length < 5; i++) {
            if (i > 20) break
            const rand = getRandoms()
            if (arr.includes(rand)) continue
            arr.push(rand)
        }

        console.log({ arr })
        setRandoms(arr)
        
    }, [products])
    

    useEffect(() => {
        if (!!randoms?.length) {
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
    }, [randoms?.length])
  
  return (
     <div className='flex w-full h-full overflow-hidden'>
        <div className="h-fit min-h-[70vh] overflow-hidden flex overflow-x-hidden w-full relative">
                <div className='absolute top-0 left-0 w-full h-full'>

                    {
                    !!randoms?.length && (randoms?.length > 0) &&
                        <div className="h-full swiper">
                            <div className="h-[90%] swiper-wrapper">
                                {
                                    randoms?.map((random, index) => 
                                    <div key={index} className="h-full swiper-slide">
                                        <div className='flex flex-col items-center justify-center w-full h-full gap-8 md:flex-row'>
                                            <div className="flex-1 w-full h-full">
                                                <img src={products?.data?.[random]?.photos?.[0]?.filename} alt="product image" className='w-full h-[250px] md:h-full object-fill carousel-img' />
                                            </div>
                                            <div className="flex flex-col items-center justify-center flex-1 w-full h-full gap-4 text-center">
                                                <h2 className="text-xl text-black lg:text-3xl text-capitalize text-bold">{products?.data?.[random]?.name}</h2>
                                                <p className="max-w-[400px] text-center mb-6 text-sm lg:text-base text-black/70">
                                                {products?.data?.[random]?.description}
                                                </p>
                                                <Link onClick={() => closeModal()} to={`products/${products?.data?.[random]?.id}`} className="px-4 py-2 text-sm text-white rounded cursor-pointer bg-orange">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                            <span className="swiper-button-prev"></span>
                            <span className="swiper-button-next"></span>
                            <span className="swiper-pagination"></span>
                        </div>
                    }
                </div>

        </div>
    </div>
  )
}

export default Slide