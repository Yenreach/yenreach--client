import React from 'react'
import Head from '../Head'
import BusinessDetails from '../BusinessDetails'
import BusinessPhotos from '../BusinessPhotos'



const index = () => {
  return (
    <main className='flex-1'>
        <Head />
        <section className='p-8 px-4 sm:px-8'>
            <h1 className='text-2xl text-green font-medium mb-5'>Create your new Business</h1>
            {/* <BusinessDetails /> */}
            <BusinessPhotos />
        </section>
    </main>
  )
}
export default index
