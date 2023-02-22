import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import { apiGetOneBusiness } from '/src/services/UserService'
import Header from "/src/components/users/Header"
import { AiOutlinePlus } from 'react-icons/ai'
import Head from '../../../components/users/Head'
import DP from '../../../assets/dashboard/img.svg'
import ArrowDown from '../../../assets/arrow-down.svg'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"


const Jobs = () => {
  const { id } = useParams()
  
  const { isLoading, error, data: businesses } = useQuery({
    queryKey: ['userBusiness'],
    queryFn: () => getData(apiGetOneBusiness, id),
  })
  console.log("business", businesses)


  return (
    <Dashboard>
        <main className='flex-1'>
          <Header business_string={id} />
          <section className='p-8 px-4 sm:px-8'>
            <div className='flex items-center justify-between mb-3'>
                <h2 className='text-base font-medium'>Jobs Listed</h2>
                <Button variant='job' className='px-4 py-2 text-xs flex items-center'>
                    <AiOutlinePlus className='mr-2' />
                    Add new job
                </Button>
            </div>
          </section>

        </main>
    </Dashboard>
  )
}

export default Jobs