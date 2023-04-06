import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiGetFilledCategories, apiGetBusinessStates } from '../../services/CommonService'
import Button from '/src/components/ui/Button'
import Input from '/src/components/ui/Input'
import useFetch from '/src/hooks/useFetch'
import Search from '/src/assets/search.svg'
import Hero0 from '../../assets/hero.svg'
import Hero1 from '../../assets/hero-one.jpg'
import Hero2 from '../../assets/hero-two.jpg'
import Hero3 from '../../assets/Banner-two.jpeg'

  
const carouselData = [
  {
      id: 1,
      heroImg: Hero1,
  },
  {
      id: 2,
      heroImg: Hero2,
  },  
  {
      id: 3,
      heroImg: Hero3,
  },
]
const staleTime = 1000 * 60 * 60 * 24


const index = ({ businesses }) => {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const businessCount = useMemo(() => businesses?.length, [businesses])

  const carouselRef = React.useRef(null)
  const carouselInnerRef = React.useRef([])

  const navigate = useNavigate()

  const { data: filledCategories, error: errorFilledCategories } = useFetch({
    api: apiGetFilledCategories,
    key: 'filledCategories',
    staleTime: staleTime,
  })

  const { data: businessStates, error: errorBusinessStates } = useFetch({
    api: apiGetBusinessStates,
    key: 'businessStates',
    staleTime: staleTime,
  })


  useEffect(() => {  
  // fade in and out carousel automatically
    const handleCarousel = () => {
      const carousel = carouselRef.current;
      if (!carousel) return
      const carouselItems = carouselInnerRef.current;
      if (!carouselItems) return
      
      let counter = 1
      const timer = setInterval(() => {
          // console.log("fired", counter, carouselItems.length)
          carouselItems?.forEach(item => {
              item.classList.remove('active')
          })
          carouselItems[counter].classList.add('active')
          counter++
          if (counter > carouselItems.length - 1) {
              counter = 0
          }
      }, 5000)
      return timer
    }

    const timer = handleCarousel()

    return () => {
      clearInterval(timer)
    }

  }, [carouselRef])


  const handleSearch = (e) => {
    e.preventDefault()
    // console.log("search", search, "location", location)

    if (search) {
      navigate(`/explore?search=${search}&location=${location}`)
    }
  }

  return (
    <div className='carousel bg-[url("assets/heo.svg")] lg:h-screen bg-cover bg-center text-white relative'>
      <div ref={carouselRef} className="carousel absolute left-0 top-0 w-full h-full -z-10">
        {carouselData.map((item, index) => (
          <div ref={(el) => (carouselInnerRef.current[index] = el)} key={item.id} className="carousel-item absolute w-full h-full active">
            <img src={carouselData[index]?.heroImg} alt="hero" className={`w-full h-full object-cover bg-red-${item.id*200}`} />
          </div>
        ))}
      </div>
      <div className="backdrop-blur-[1.5px] bg-black/60 h-full w-full flex flex-col gap-14 justify-center items-center py-32 sm:py-20 sm:pt-40 px-4 md:px-10 lg:px-24 relative text-xl md:text-3xl">
        <h1 className='font-medium leading-tight text-center'>The No.1 Business listing<br />website in Nigeria</h1>
        <form action="" method="post" onSubmit={handleSearch} className="text-base flex">
          <Input variant="plain" onChange={(e) => setSearch(e.target.value)} value={search} list="categories" name="category" id="category" placeholder='Search for business' className='rounded-tl-md rounded-bl-md placeholder:text-xs' />
          <datalist className='' name="categories" id="categories" placeholder='Enter state'>
              {filledCategories?.map((category) => (
                  <option key={category.id} value={category.name}>{category.name}</option>
              ))}
          </datalist>
          <Input variant="plain" onChange={(e) => setLocation(e.target.value)} value={location} list="location" name="locate" id="locate" placeholder='Enter Location' className='border-l-0 border-r-0 placeholder:text-xs' />
          <datalist className='' name="location" id="location" placeholder='Enter Location'>
              {businessStates?.map((state) => (
                  <option key={state.id} value={state.name}>{state.name}</option>
              ))}
          </datalist>
          <Button type="submit" variant='business' className='px-4 py-4 rounded-tr-md rounded-br-md'>
            <img src={Search} alt="search icon" className='w-12' />
          </Button>
        </form>
        {/* <SearchBar /> */}
        <div className='flex items-center gap-2 justify-between w-full px-2 sm:w-4/5'>
          <div className='flex flex-col items-center'>
            <span className='font-semibold'>{businessCount}+</span>
            <span className='text-sm md:text-lg'>Businesses</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='font-semibold'>172+</span>
            <span className='text-sm md:text-lg'>Locations</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='font-semibold'>50000+</span>
            <span className='text-sm md:text-lg'>Audience</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index