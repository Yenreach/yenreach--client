import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Category from '../../components/Category'
import AllHere from '../../assets/businesses/all-here.svg'
import AllHereJ from '../../assets/jobs/all-here.svg'
import AllHereP from '../../assets/products/all-here.svg'

const index = () => {
  return (
    <>
        <Header />
        <Hero />
        <Category />
        <section className='py-12 px-14'>
            <div className='bg-audience h-64 bg-cover bg-center text-white flex flex-col justify-between items-center py-10 mb-28'>     
                <div className='flex flex-col items-center gap-2'>
                    <h2 className='text-40 font-semibold'>Get your business to the right audience</h2>
                    <span className='text-xl '>It's Totally free</span>
                </div>
                <button className='bg-color1 text-white py-3 px-12 rounded'>
                    Add my business
                </button>
            </div>
            <div className='flex items-center gap-9 mb-32'>
                <img src={AllHere} alt="" className="w-1/2" />
                <div className='flex flex-col items-start gap-12'>
                    <h3 className='text-3xlm text-color1 font-medium'>They are all Here</h3>
                    <p className='text-xs text-[#476788]'>
                        Lorem ipsum dolor sit amet consectetur. Ultricies consectetur nisi ornare tempor. Senectus tortor arcu est duis posuere ante. Cras est malesuada facilisi facilisi eget morbi. Cum justo quis dui laoreet fermentum fringilla. Non non dictum ipsum est tellus adipiscing. <br />
                        Netus a sodales a lorem eget sed. Scelerisque id urna massa convallis suspendisse ultrices dignissim sed. Facilisis vestibulum convallis varius tellus. Morbi neque egestas etiam feugiat amet. Accumsan fusce sed id id faucibus viverra nunc ut. Porttitor ac cursus rhoncus amet semper nunc quis vitae fermentum. Hendrerit ipsum quis nulla.
                    </p>
                    <button className='bg-color1 text-white py-2 px-28'>
                        CTA
                    </button>
                </div>
            </div>
            <div className='flex items-center gap-9 mb-32'>
                <div className='flex flex-col items-start gap-12'>
                    <h3 className='text-3xlm text-color2 font-medium'>They are all Here</h3>
                    <p className='text-xs text-[#476788]'>
                        Lorem ipsum dolor sit amet consectetur. Ultricies consectetur nisi ornare tempor. Senectus tortor arcu est duis posuere ante. Cras est malesuada facilisi facilisi eget morbi. Cum justo quis dui laoreet fermentum fringilla. Non non dictum ipsum est tellus adipiscing. <br />
                        Netus a sodales a lorem eget sed. Scelerisque id urna massa convallis suspendisse ultrices dignissim sed. Facilisis vestibulum convallis varius tellus. Morbi neque egestas etiam feugiat amet. Accumsan fusce sed id id faucibus viverra nunc ut. Porttitor ac cursus rhoncus amet semper nunc quis vitae fermentum. Hendrerit ipsum quis nulla.
                    </p>
                    <button className='bg-color2 text-white py-2 px-28'>
                        CTA
                    </button>
                </div>
                <img src={AllHereJ} alt="" className="w-1/2" />
            </div>
            <div className='flex items-center gap-9'>
                <img src={AllHereP} alt="" className="w-1/2" />
                <div className='flex flex-col items-start gap-12'>
                    <h3 className='text-3xlm text-color3 font-medium'>They are all Here</h3>
                    <p className='text-xs text-[#476788]'>
                        Lorem ipsum dolor sit amet consectetur. Ultricies consectetur nisi ornare tempor. Senectus tortor arcu est duis posuere ante. Cras est malesuada facilisi facilisi eget morbi. Cum justo quis dui laoreet fermentum fringilla. Non non dictum ipsum est tellus adipiscing. <br />
                        Netus a sodales a lorem eget sed. Scelerisque id urna massa convallis suspendisse ultrices dignissim sed. Facilisis vestibulum convallis varius tellus. Morbi neque egestas etiam feugiat amet. Accumsan fusce sed id id faucibus viverra nunc ut. Porttitor ac cursus rhoncus amet semper nunc quis vitae fermentum. Hendrerit ipsum quis nulla.
                    </p>
                    <button className='bg-color3 text-white py-2 px-28'>
                        CTA
                    </button>
                </div>
            </div>
        </section>
        <section className='py-12 px-14'>
            <div>
                <h2 className='text-25 text-color1 font-medium'>Business of the week</h2>
            </div>
        </section>
    </>
  )
}

export default index