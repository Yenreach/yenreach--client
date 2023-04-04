import React, { useRef, useEffect, useState } from 'react'
import Computer from '/src/assets/computer.svg'
import DECImg from '/src/assets/DEC_Image.jpg'
import LogoImg from '/src/assets/LOGO_4491659091525.jpg'
import AdImg from '/src/assets/ads-image.jpg'


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

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 5000)
        return () => clearInterval(interval)
    }, [active])

    useEffect(() => {
        [...carouselRef.current?.children].map((child) => {
            child.classList.remove('ad-active')
            child.classList.add('carousel-ad')
        })
        carouselRef.current?.children[active]?.classList.remove('carousel-ad')
        carouselRef.current?.children[active]?.classList.add('ad-active')
        return () => {
            carouselRef.current.children[active].classList.remove('ad-active')
        }
    }, [active])







  return (
    <div
    id="carouselExampleCaptions"
    className="carousel slide mt-4 w-full"
    data-bs-ride="carousel"
  >
     <div 
        className='flex pb-16 w-full overflow-hidden'
        >
        <div ref={carouselRef} className="carousel-inner h-[400px] flex w-full overflow-scroll">
            {billboards.map((billboard) => (
                <div key={billboard?.id} className=" h-full bg-red-200">
                    <div className='h-full w-full flex flex-col md:flex-row gap-8 justify-center items-center'>
                        <div className="flex-1 h-full w-full">
                            <img src={Computer} alt="advert-banner" className='w-100 h-full object-cover carousel-img' />
                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center flex-1 h-full w-full text-center">
                            <h2 className="text-xl lg:text-3xl text-capitalize text-bold text-black">{billboard?.title}</h2>
                            <p className="max-w-[400px] text-center mb-6 text-sm lg:text-base text-black/70">
                            {billboard?.description}
                            </p>
                            {/* <p className="text-center"></p> */}
                            <a href={billboard?.link} target="_blank" className="px-4 py-2 bg-green text-white text-sm rounded">Learn more</a>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    </div>
</div>
  )
}

export default Billboard


        {/* <div className="carousel-item">
            <div className="h-100 d-flex justify-content-center align-items-center row">
                <div className="h-50 col-lg-6 col-md-6 col-sm-12 my-3">
                    <img src="images/<?php echo $billboard->filename.".jpg"; ?>" alt="<?php echo $billboard->title; ?>" className="w-100" />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center h-50 col-lg-6 col-md-6 col-sm-12">
                    <h2 className="text-capitalize fw-bold text-black"><?php echo $billboard->title; ?></h2>
                    <p className="fs-6 w-75 text-center fw-light text-dark"><?php echo nl2br($billboard->text); ?></p>
                    <p className="fs-4 text-center">
                        <a href="<?php echo call_to_action_link($billboard->call_to_action_link, $billboard->call_to_action_type) ?>" target="_blank" className="btn px-4 py-2"><?php echo $billboard->call_to_action_type; ?></a>
                    </p>
                </div>
            </div>
        </div> */}
   
      
      
        {/* <div className="carousel-item">
            <div className='h-100  d-flex justify-content-center align-items-center row'>
                <div className="h-50 col-lg-6 col-md-6 col-sm-12 my-3">
                    <img src="./assets/img/ads-image.jpg" alt="advert-banner" className='w-100' />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center h-50 col-lg-6 col-md-6 col-sm-12">
                    <p className="fs-6 w-75 text-center fw-light text-dark">
                        Advertise your business here
                    </p>
                    <p className="fs-4 text-center"></p>
                    <a href="yenreach_billboard" className="btn px-4 py-2">Learn more</a>
                </div>
            </div>
        </div> */}

            {/* <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button> */}