import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MdChevronRight } from 'react-icons/md'
import BlogImage from '../../assets/blog/single-blog.svg'


const index = () => {
  return (
    <>
      <Header />
      <div className='py-10 px-4 md:py-24 mt-[79px] md:mt-[88px] max-w-[750px] mx-auto'>
        <div className='flex items-center gap-1 mb-5 text-xs'>
            Blog
            <MdChevronRight size="1.3rem" />
            <span className='font-medium'>
                Category    
            </span>
        </div>
        <h1 className='text-3xl font-semibold mb-12'>Blog title heading will go here</h1>
        <div className='flex items-center justify-between text-xs'>
            <div className='flex items-center gap-3'>
                <span className='w-10 h-10 rounded-full bg-gray'></span>
                <div className='flex gap-1 flex-col'>
                    <span className='font-semibold'>Full name</span>
                    <p>12 minht . 5 min read</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <span>twit</span>
                <span>twit</span>
            </div>
        </div>
      </div>
      <section className='px-4 py-12 md:px-10 lg:px-24'>
        <img src={BlogImage} alt="" />
      </section>
      <main>
          <section className='px-4 py-12 md:px-10 lg:px-24 max-w-[750px] mx-auto'>
            <h2 className='text-2xl font-semibold mb-5'>Introduction</h2>
            <p className='text-sm mb-4'>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
            </p>
            <p className='text-sm mb-4'>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
            </p>
            <div className='py-8'>
                <img src={BlogImage} alt="" />
                <span className='inline-block mt-2 border-l-2 border-red-300 px-2 text-xs'>Image caption goes here</span>
            </div>
            <p className='text-sm mb-4'>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
            <p className='text-sm mb-4'>
            Collaboratively deploy intuitive partnerships whereas customized e-markets. Energistically maintain performance based strategic theme areas whereas just in time methodologies. Phosfluorescently drive functionalized intellectual capital and.
            </p>
            <p className='text-sm mb-4'>"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."</p>
            <p className='text-sm mb-4'>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.</p>
        </section>
        <section className='px-4 py-12 md:px-10 lg:px-24 max-w-[750px] mx-auto'>
            <h2 className='text-2xl font-semibold mb-5'>Conclusion</h2>
            <p className='text-sm mb-4'>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
            </p>
            <p className='text-sm mb-4'>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
            </p>
            <p className='text-sm mb-4'>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
            </p>
            <div className='pb-10 mb-10 border-b-2 border-gray'>
                <span className='block font-semibold text-sm mb-2'>Share this post</span>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <span>ds</span>
                        <span>ds</span>
                        <span>ds</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>tag one</span>
                        <span>tag one</span>
                        <span>tag one</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3 text-xs'>
                <span className='w-10 h-10 rounded-full bg-gray'></span>
                <div className='flex flex-col'>
                    <span className='font-semibold'>Full name</span>
                    <p>Job Title, Company Name</p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default index