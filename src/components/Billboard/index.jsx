import React, { useRef, useEffect, useState } from 'react'
import Computer from '/src/assets/computer.svg'
// import DECImg from '/src/assets/DEC_Image.jpg'
// import LogoImg from '/src/assets/LOGO_4491659091525.jpg'
// import AdImg from '/src/assets/ads-image.jpg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const billboards = [
    {
        id: 1,
        title: 'Dordorian Estate Limited',
        description: 'Own your dream Property in Fast developing locations across Yenagoa, Bayelsa State.',
        image: './assets/img/DEC_Image.jpg',
        link: 'https://dordorianestate.com'
    },
    {
        id: 2,
        title: 'Globus Bank',
        description: 'A commercial bank with National Authorization. Registered as a limited liability company on March 6, 2019, licensed by the Central Bank of Nigeria on July 10, 2019 and commenced operations on November 6, 2019.',
        image: './images/LOGO_4491659091525.jpg',
        link: 'business?3b103aaa17b1e28da751caa93e1c67aa11515838'
    },
    {
        id: 3,
        title: 'Mutual Benefits Life Assurance Limited',
        description: 'One of Nigeria\'s leading life Insurance provider with products ranging from, *Children Education Plan *Individual Savings Plan *Group life *General Third Party Liability *Professional Indemnity *Public Liability *Comprehensive Car Insurance *Mutual Term Assurance *Goods -in-transit E.T.C',
        image: './assets/img/clients/business/Screenshot_20211103-132259.png',
        link: 'business?bfd9cc92264da47e591e505e860f143ef5d69eba'
    },
    // {
    //     id: 4,
    //     title: 'Data Science Nigeria',
    //     description: 'Data Science Nigeria is a community of data scientists, data analysts, data engineers, data architects, data visualizers, and data enthusiasts. We are a community of data scientists, data analysts, data engineers, data architects, data visualizers, and data enthusiasts.',
    //     image: './assets/img/clients/business/Screenshot_20211103-132259.png',
    //     link: 'business?bfd9cc92264da47e591e505e860f143ef5d69eba'
    // },
    // {
    //     id: 5,
    //     title: 'Data Science Nigeria',
    //     description: 'Data Science Nigeria is a community of data scientists, data analysts, data engineers, data architects, data visualizers, and data enthusiasts. We are a community of data scientists, data analysts, data engineers, data architects, data visualizers, and data enthusiasts.',
    //     image: './assets/img/clients/business/Screenshot_20211103-132259.png',
    //     link: 'business?bfd9cc92264da47e591e505e860f143ef5d69eba'
    // },
]

const Billboard = () => {
    const [active, setActive] = useState(0)
    const carouselRef = useRef(null)

    const handleNext = () => {
        if (active === carouselRef.current?.children.length - 1) {
            setActive(0)
        } else {
            setActive(active + 1)
        }
    }
    
    const handlePrev = () => {
        if (active === 0) {
            setActive(carouselRef.current?.children - 1)
        } else {
            setActive(active - 1)
        }
    }

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
    //         carouselRef.current.children[active].classList.remove('ad-active')
    //     }
    // }, [active])



  return (
    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={billboards.length}
        infinite={true}
        interval={3000}
        isPlaying={true}
        className='transition-all duration-1000 ease'
      >
        <Slider className="transition duration-1000 ease">
        {billboards.map((billboard, ind) => (
            <Slide index={ind} key={ind}>
                <div key={billboard?.id} className=" h-[65vh]">
                    <div className='h-full w-full flex flex-col md:flex-row gap-8 justify-center items-center'>
                        <div className="flex-1 h-full w-full">
                            <img src={Computer} alt="advert-banner" className='w-100 h-full object-cover carousel-img' />
                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center flex-1 h-full w-full text-center">
                            <h2 className="text-xl lg:text-3xl text-capitalize text-bold text-black">{billboard?.title}</h2>
                            <p className="max-w-[400px] text-center mb-6 text-sm lg:text-base text-black/70">
                            {billboard?.description}
                            </p>
                            <a href={billboard?.link} target="_blank" className="px-4 py-2 bg-green text-white text-sm rounded">Learn more</a>
                        </div>
                    </div>
                </div>
            </Slide>
            ))}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
  )
}

export default Billboard


