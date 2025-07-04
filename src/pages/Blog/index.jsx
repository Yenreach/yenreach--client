import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useFetch from '/src/hooks/useFetch'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { apiGetAllBlogs } from '../../services/CommonService'
import getData from '../../utils/getData'
import { changePage, paginate } from '/src/utils'
import BlogCard from '../../components/ui/BlogCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Loader from '/src/components/Loader'
import SEO from '../../components/SEO'
import Pagination from '/src/components/Pagination'
import useCreateQueryString from '../../hooks/useCreateQueryString'
import { useSearchParams } from 'react-router-dom'



const index = () => {
  const num_per_page = 3
  const { createQueryString } = useCreateQueryString()
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1)
  const { data: blogs, error: errorBlogs, isLoading } = useFetch({
    key: ['blogs', page],
    api: apiGetAllBlogs,
    param: { page, num_per_page },
  })

  useEffect(() => {
    const page = parseInt(searchParams.get('page'), 10) || 1; // Default to page 1
    setPage(page);
  }, [searchParams])

  console.log('blogs', blogs, 'error', errorBlogs)
  const handlePageChange = (page) => {
    createQueryString({ page })
      // setPage(page)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  }
  return (
    <>
      <SEO
        title="Explore Blogs - Yenreach"
        description="Dive into a diverse collection of blogs on Yenreach. Discover expert insights, tips, stories, and articles across various topics and industries."
        name="Yenreach"
        type="blogs"
      />
      <Header />
      {isLoading && <Loader loader={4} />}
      <div className="top top-banner flex flex-col justify-center items-center gap-4 bg-[url(assets/blog-hero-bg.svg)]">
        <h1 className="text-xl md:text-3xl text-[#89F1B4] font-semibold text-center">
          Keep up with the business world
        </h1>
        <h2 className='px-12 text-sm text-center text-white md:text-base'>Articles on Yenreach.com makes sure you never miss a thing</h2>
      </div>
      <div className="flex flex-col gap-20 px-4 md:px-8 lg:px-[8.4375rem] py-20">
        {/* <div className="flex flex-col gap-6">
          <h2 className="w-full text-xl font-semibold text-center text-blue">Top Articles</h2>
          <div className='flex flex-col grid-cols-3 gap-2 text-lg text-white sm:grid'>
            <div className="relative bg-[url('assets/businesses/coperate.svg')] bg-cover bg-center h-52 sm:h-[26.5rem] p-4">
              <span className='absolute w-3/4 text-lg font-semibold sm:font-medium bottom-12 sm:bottom-24 sm:w-2/3 sm:text-xl'>The struggle in the  Corperate world</span>
            </div>
            <div className='flex flex-col grid-cols-2 col-span-2 gap-2 sm:grid'>
              <div className="relative bg-[url('assets/businesses/sme.svg')] p-5 h-52 bg-cover bg-center">
                <span className='absolute w-3/4 font-semibold bottom-12'>SME gains $30M on first Seed round</span>
              </div>
              <div className="relative bg-[url('assets/businesses/tech.svg')] p-5 h-52 bg-cover bg-center">
                <span className='absolute w-3/4 font-semibold bottom-12'>Technology conntributes more  then Oil in Nigeria</span>
              </div>
              <div className="relative bg-[url('assets/businesses/insure.svg')] p-5 h-52 bg-cover bg-center">
                <span className='absolute w-3/4 font-semibold bottom-11'>The future of Innsurance Companies </span>
              </div>
              <div className="relative bg-[url('assets/businesses/google.svg')] p-5 h-52 bg-cover bg-center">
                <span className='absolute w-3/4 font-semibold bottom-11'>How Google Harms us</span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col gap-4">
          <h2 className="w-full text-xl font-semibold text-center text-blue">Latest Articles</h2>
          <div className='flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
            {blogs?.data?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
        {/* <div className="flex items-center justify-center w-full mt-4">
          <MdChevronLeft size={"1.5rem"} />
          {blogs?.totalPages && [...Array(blogs?.totalPages).keys()]?.map((page_num) => 
            <span key={page_num+1} onClick={() => changePage(page_num+1, setPage)} className={`${page===page_num+1 && "bg-green text-white"} font-medium w-6 h-6 text-sm text-black grid place-items-center cursor-pointer`}>{page_num+1}</span>
          )}
          <MdChevronRight size={"1.5rem"} />
        </div> */}
          <Pagination 
            page={page} 
            num_per_page={num_per_page} 
            data={blogs?.data} 
            handlePageChange={handlePageChange} 
            total={blogs?.total} 
            totalPages={blogs?.totalPages}
          />
      </div>
      <Footer />
    </>
  )
}

export default index