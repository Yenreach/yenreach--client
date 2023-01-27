import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Head from '../../../components/users/Head'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"
const Jobs = () => {
  return (
    <Dashboard>
        <main className='flex-1'>
          <Head />
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