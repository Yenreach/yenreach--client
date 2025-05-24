import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'
import Head from '../../../components/users/Head'
import Dashboard from "../../../components/layout/Dashboard"
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import { apiGetOneBusiness } from '/src/services/UserService'


const index = () => {
    const { id } = useParams()
    const { isLoading, error, data: business } = useQuery({
        queryKey: ['business', id],
        queryFn: () => getData(apiGetOneBusiness, { id }),
        api: apiGetOneBusiness,
      })

  return (
    <Dashboard> 
        <div className='flex-1 overflow-hidden'>
            <Head />
            <section className='p-8 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-80'>
                <div className='flex justify-center items-center pt-20'>
                    <div className='flex flex-col justify-center items-center rounded-2xl font-arialsans p-20 bg-white'>
                    <span className='p-4 rounded-full border-4 mb-10 border-orange'>
                        <AiOutlineCheck size='40px' color='orange'  />
                    </span>
                    <p className='text-center text-lg mb-6'>
                    You have successfully added a new product to the marketplace under <span className='text-orange'>{business?.name}</span> 
                    </p>
                    <Link to={`/users/products/${id}`} className=''>Check the <span href="" className='text-orange text-sm underline underline-offset-2'>product page</span> to view your products</Link>
                    </div>
                </div>
            </section>
        </div>
    </Dashboard>
    
  )
}

export default index