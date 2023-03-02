import React from 'react'
import { useParams } from 'react-router-dom'
import { useMutation } from "@tanstack/react-query";
import { apiAddProduct } from '../../../services/ProductService'
import Header from "/src/components/users/Header"
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"

const initialJobState = {
    business_string: "",
    company_name: "",
    job_title: "",
    job_type: "",
    salary: "",
    location: "",
    job_overview: "",
    job_benefit: "",
    job_tags: []
}

const index = () => {
    const [job, setJob] = React.useState(initialJobState)

    const handleJob = (event) => {
        setJob(prev => ({...prev, [event.target.name]: event.target.value }))
    }

    const addJobMutation = useMutation({
        mutationFn: (data) => {
          return apiAddProduct(data)
        },
        onSuccess: (data, variables, context) => {
            console.log("success adding business", data)
            // setStep(3)
        },
        onError: (error, variables, context) => {
          console.log("error adding business", error)
        },
      })
       
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("data", job)
        addJobMutation.mutate(job)
    }


    const { id } = useParams()
  return (
    <Dashboard> 
        <div className='flex-1 overflow-hidden'>
            <Header business_string={id} type="job" />
          <section className='p-8 px-4 sm:px-8'>
            <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl' onSubmit={handleSubmit}>
                <div className='md:flex justify-between gap-6 md:mb-4'>
                    <div className='w-full mb-8 md:mb-0'>
                        <label htmlFor="company_name" className='font-medium text-sm'>Company Name</label>
                        <Input onChange={handleJob} className='border-gray rounded-lg' type="text" name="company_name" id="company_name" />
                    </div>
                    <div className='w-full mb-8 md:mb-0'>
                        <label htmlFor="job_title" className='font-medium text-sm'>Job Title</label>
                        <Input onChange={handleJob} className='border-gray rounded-lg' type="text" name="job_title" id="job_title" />
                    </div>
                    <div className='w-full '>
                        <label htmlFor="job_type" className='font-medium text-sm'>Job Type</label>
                        <Input onChange={handleJob} className='border-gray rounded-lg' type="text" name="job_type" id="job_type" />
                    </div>
                </div>
                <div className='mb-8 md:mb-4 md:flex justify-between gap-6'>
                    <div className='mb-8 md:mb-0 w-full'>
                        <label htmlFor="location" className='font-medium text-sm'>Location</label>
                        <Input onChange={handleJob} className='border-gray rounded-lg mt-2' type="text" name="location" id="location" 
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="salary" className='font-medium text-sm'>Salary</label>
                        <Input onChange={handleJob} className='border-gray rounded-lg mt-2' type="number" name="salary" id="salary" 
                        />
                    </div>
                </div>
                <div className='mb-8 md:mb-4'>
                    <label htmlFor="job_overview" className='font-medium text-sm'>Job Overview</label>
                    <textarea name="job_overview" id="job_overview" cols="30" rows="6" className='w-full border-2 outline-none cursor-pointer px-4 py-3 bg-inherit border-gray rounded-lg' placeholder='Enter job Description' ></textarea>
                </div>
                <div className='mb-8 md:mb-4'>
                    <label htmlFor="job_benefit" className='font-medium text-sm'>Job Perks and Benefits</label>
                    <textarea name="job_benefit" id="job_benefit" cols="30" rows="6" className='w-full border-2 outline-none cursor-pointer px-4 py-3 bg-inherit border-gray rounded-lg' placeholder='Enter job Description' ></textarea>
                </div>
                <div className='mb-8 md:mb-4 md:flex justify-between gap-6'>
                    <div className='mb-8 md:mb-0 w-full'>
                        <label htmlFor="job_tags" className='font-medium text-sm'>Tags</label>
                        <Input onChange={handleJob} className='border-gray rounded-lg mt-2' type="text" name="job_tags" id="job_tags" 
                        />
                    </div>
                </div>
                <div className='flex gap-2 mt-12'>
                    <Button type='submit' variant="job" className='p-2 px-12 md:px-20 rounded'>
                        Publish
                    </Button>
                    <Button inverde={true} className='p-2 px-12 md:px-20 rounded text-gray border-2 font-medium'>
                        Cancel
                    </Button>
                </div>
            </form>
          </section>
        </div>
    </Dashboard>
  )
}

export default index