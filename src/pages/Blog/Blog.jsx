import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '/src/hooks/useFetch'
import { apiGetBlog, apiGetComments } from '../../services/CommonService'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MdChevronRight } from 'react-icons/md'
import BlogImage from '../../assets/blog/single-blog.svg'
import Loader from '/src/components/Loader'
import Share from './Share'
import SEO from '../../components/SEO'



const index = () => {
    const { id } = useParams()

    const { isLoading, data: blog, error: errorBlog } = useFetch({
        api: apiGetBlog,
        param: {id},
        key: 'blog'
    })

    const { data: comments } = useFetch({
        api: apiGetComments,
        param: {id},
        key: 'comments'
    })

    // console.log("blog", blog, "error", errorBlog)
    // console.log("comments", comments)

  return (
    <>
        <SEO
            title={`${blog?.title} - Discover blog?es on Yenreach`}
            description={`${blog?.preview}. Find out more about this blog? on Yenreach.`}
            name={blog?.title}
            type="blog"
            url={`https://www.yenreach.com/blog?/${blog?.id}`}
            // imageUrl={blog?.image || '/default-image.png'}
        />
      <Header />
      {isLoading && <Loader loader={4} />}
      <div className='py-10 px-4 md:py-24 mt-[79px] md:mt-[88px] max-w-[750px] mx-auto'>
        <div className='flex items-center gap-1 mb-5 text-xs'>
            Blog
            <MdChevronRight size="1.3rem" />
            <span className='font-medium'>
                Category    
            </span>
        </div>
        <h1 className='mb-12 text-3xl font-semibold'>{blog?.title}</h1>
        <div className='flex items-center justify-between text-xs'>
            <div className='flex items-center gap-3'>
                <span className='w-10 h-10 rounded-full bg-gray'></span>
                <div className='flex flex-col gap-1'>
                    <span className='font-semibold'>{blog?.author?.name}</span>
                    <p>5 to 7 mins read</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                {/* <span>twit</span>
                <span>twit</span> */}
            </div>
        </div>
      </div>
      <section className='px-4 py-12 md:px-10 lg:px-24'>
      <img src={blog?.mediaUrl?.replace("mediatoken", "media&token") || BlogImage} alt="" className="w-full object-cover object-center min-h-[400px]" />
      </section>
      <main>
          <section className='px-4 py-12 md:px-10 lg:px-24 max-w-[750px] mx-auto'>
            {/* <h2 className='mb-5 text-2xl font-semibold'>Introduction</h2> */}
            <div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
        </section>
        <section className='px-4 py-12 md:px-10 lg:px-24 max-w-[750px] mx-auto'>
            <div className='pb-10 mb-10 border-b-2 border-gray'>
                <span className='block mb-2 text-sm font-semibold'>Share this post</span>
                <div className='flex items-center justify-between'>
                    <Share />
                </div>
            </div>
            <div className='flex items-center gap-3 text-xs'>
                <span className='w-10 h-10 rounded-full bg-gray'></span>
                <div className='flex flex-col'>
                    <span className='font-semibold'>{blog?.author?.name}</span>
                    <p>Media Director, Yenreach</p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default index