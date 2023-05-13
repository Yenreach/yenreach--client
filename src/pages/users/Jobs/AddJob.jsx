import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import usePost from '/src/hooks/usePost'
import { apiAddJob } from '../../../services/JobService'
import Header from "/src/components/users/Header"
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"
import Loader from '../../../components/Loader'


const initialJobState = {
    business_string: "",
    company_name: "",
    job_title: "",
    job_type: "",
    salary: "",
    expiry_date: "",
    location: "",
    job_overview: "",
    job_benefit: "",
    job_tags: []
}

const job_tags = [
    {id: 1, name: "Full Time"},
    {id: 2, name: "Part Time"},
    {id: 3, name: "Remote"},
    {id: 4, name: "Internship"},
    {id: 5, name: "Contract"},
    {id: 6, name: "Freelance"},
    {id: 7, name: "Temporary"},
    {id: 8, name: "Volunteer"},
    {id: 9, name: "Seasonal"},
    {id: 10, name: "Others"},
]

const index = () => {
    const [job, setJob] = React.useState(initialJobState)
    const { id } = useParams()
    const navigate = useNavigate()

    console.log('job', job)


    const handleJob = (event) => {
        setJob(prev => ({...prev, [event.target.name]: event.target.value }))
    }

    const handleTags = (event) => {
        setJob(prev => ({...prev, [event.target.name]: [...job.job_tags, { tag: event.target.value }] }))
    }

    const addJobMutation = usePost({ 
        api: apiAddJob,
        success: (data, variables, context) => {
            console.log("success adding job", data)
            setJob(initialJobState)
            navigate(`/users/jobs/${id}/job-success`)
            // setStep(3)
        }
    })
       
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("data", job)
        addJobMutation.mutate({ ...job, business_string: id })
    }

  return (
    <Dashboard> 
      {(addJobMutation?.isLoading) && <Loader loader={4} />}
        <div className='flex-1 overflow-y-auto overflow-hidden'>
            <Header business_string={id} type="job" />
          <section className='p-8 px-4 sm:px-8'>
            <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl' onSubmit={handleSubmit}>
                <div className='md:flex justify-between gap-6 md:mb-4'>
                    <div className='w-full mb-8 md:mb-0'>
                        <label htmlFor="company_name" className='font-medium text-sm'>Company Name</label>
                        <Input required value={job?.company_name} onChange={handleJob} variant={"job"} className='border-gray rounded-lg' type="text" name="company_name" id="company_name" />
                    </div>
                    <div className='w-full mb-8 md:mb-0'>
                        <label htmlFor="job_title" className='font-medium text-sm'>Job Title</label>
                        <Input required value={job?.job_title} onChange={handleJob} variant={"job"} className='border-gray rounded-lg' type="text" name="job_title" id="job_title" />
                    </div>
                    <div className='w-full mb-8 md:mb-0'>
                        <label htmlFor="job_type" className='font-medium text-sm'>Job Type</label>
                        <Input required value={job?.job_type} onChange={handleJob} variant={"job"} className='border-gray rounded-lg' type="text" name="job_type" id="job_type" />
                    </div>
                </div>
                <div className='mb-8 md:mb-4 md:flex justify-between gap-6'>
                    <div className='mb-8 md:mb-0 w-full'>
                        <label htmlFor="location" className='font-medium text-sm'>Location</label>
                        <Input required value={job?.location} onChange={handleJob} variant={"job"} className='border-gray rounded-lg mt-2' type="text" name="location" id="location" 
                        />
                    </div>
                    <div className='w-full mb-8 md:mb-0'>
                        <label htmlFor="salary" className='font-medium text-sm'>Salary</label>
                        <Input required value={job?.salary} onChange={handleJob} variant={"job"} className='border-gray rounded-lg mt-2' type="number" name="salary" id="salary" 
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="expiry_date" className='font-medium text-sm'>Expiry Date</label>
                        <Input required value={job?.expiry_date} onChange={handleJob} variant={"job"} className='border-gray rounded-lg mt-2' type="date" name="expiry_date" id="expiry_date" 
                        />
                    </div>
                </div>
                <div className='mb-8 md:mb-4'>
                    <label htmlFor="job_overview" className='font-medium text-sm'>Job Overview</label>
                    <Input required={true} value={job?.job_overview} onChange={handleJob} variant={"job"} textarea name="job_overview" id="job_overview" cols="30" rows="6" className='border-gray rounded-lg' placeholder='Enter job Description' />
                </div>
                <div className='mb-8 md:mb-4'>
                    <label htmlFor="job_benefit" className='font-medium text-sm'>Job Perks and Benefits</label>
                    <Input required={true} value={job?.job_benefit} onChange={handleJob} variant={"job"} textarea name="job_benefit" id="job_benefit" cols="30" rows="6" className='border-gray rounded-lg' placeholder='Enter job Perks and Benefits' />

                </div>
                <div className='mb-8 md:mb-4 md:flex justify-between gap-6'>
                    <div className='mb-8 md:mb-0 w-full'>
                        <label htmlFor="job_tags" className='font-medium text-sm'>Tags</label>
                        <select onChange={handleTags} required className='w-full border-2 outline-none bg-inherit px-4 py-3 focus:invalid:border-red-400 border-blue cursor-pointer rounded-lg' name="job_tags" id="job_tags" placeholder='Enter Categoies'>
                                <option value="">Select Product Categories</option>
                                {job_tags?.map((tag) => (
                                    <option key={tag.id} value={tag.name}>{tag.name}</option>
                                ))}
                            </select>
                            <div>
                                {job.job_tags?.map((tag, index) => (
                                    <span key={index} className='bg-gray-200 text-gray-600 text-xs py-1 rounded-full mr-2'>{tag.tag}</span>
                                ))}
                            </div>
                    </div>
                </div>
                <div className='flex gap-2 mt-12'>
                    <Button type='submit' variant="job" className='p-2 px-12 md:px-20 rounded'>
                        Publish
                    </Button>
                    <Button inverse={true} className='p-2 px-12 md:px-20 rounded text-gray border-2 font-medium'>
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