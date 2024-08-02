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


const index = () => {
    const { id } = useParams()

    const { isLoading, data: blog, error: errorBlog } = useFetch({
        api: apiGetBlog,
        param: id,
        key: 'blog'
    })

    const { data: comments } = useFetch({
        api: apiGetComments,
        param: id,
        key: 'comments'
    })

    // console.log("blog", blog, "error", errorBlog)
    // console.log("comments", comments)

  return (
    <>
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
        <h1 className='text-3xl font-semibold mb-12'>{blog?.title}</h1>
        <div className='flex items-center justify-between text-xs'>
            <div className='flex items-center gap-3'>
                <span className='w-10 h-10 rounded-full bg-gray'></span>
                <div className='flex gap-1 flex-col'>
                    <span className='font-semibold'>{blog?.author}</span>
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
      <img src={blog?.file_path.replace("mediatoken", "media&token") || BlogImage} alt="" className="w-full object-cover object-center min-h-[400px]" />
      </section>
      <main>
          <section className='px-4 py-12 md:px-10 lg:px-24 max-w-[750px] mx-auto'>
            {/* <h2 className='text-2xl font-semibold mb-5'>Introduction</h2> */}
            <div dangerouslySetInnerHTML={{ __html: blog?.post }}></div>
        </section>
        <section className='px-4 py-12 md:px-10 lg:px-24 max-w-[750px] mx-auto'>
            {/* <h2 className='text-2xl font-semibold mb-5'>Conclusion</h2> */}
            {/* <p className='text-sm mb-4'>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
            </p>
            <p className='text-sm mb-4'>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
            </p>
            <p className='text-sm mb-4'>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
            </p> */}
            <div className='pb-10 mb-10 border-b-2 border-gray'>
                <span className='block font-semibold text-sm mb-2'>Share this post</span>
                <div className='flex justify-between items-center'>
                    <Share />
                </div>
            </div>
            <div className='flex items-center gap-3 text-xs'>
                <span className='w-10 h-10 rounded-full bg-gray'></span>
                <div className='flex flex-col'>
                    <span className='font-semibold'>{blog?.author}</span>
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