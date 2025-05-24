import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import usePost from '/src/hooks/usePost'
import { apiUpdateJob, apiGetJob } from '../../../services/JobService'
import Header from "/src/components/users/Header"
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"
import Loader from '../../../components/Loader'
import useFetch from '/src/hooks/useFetch'


const initialJobState = {
    businessId: '',
    description: '',
    type: '',
    companyName: '',
    title: '',
    location: '',
    salary: '',
    benefit: '',
    applicationMethod: '',
    overview: '',
    applicationExpiry: '',
    tags: []
}

const tags = [
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

const EditJob = () => {
    const [job, setJob] = React.useState(initialJobState)
    const { id, jobId } = useParams()
    const navigate = useNavigate()

    const { isLoading, error, data } = useFetch({
        key: ['userJob', jobId],
        api: apiGetJob,
        param: { id: jobId },
      })

      useEffect(() => {
        if (data) {
            // setJob(data)
            setJob({
                ...job,
                ...data,
                tags: data.tags?.map((tag) => tag.tag) || [],
            })
        }
    }, [data])



    // console.log('job', job)


    const handleJob = (event) => {
        setJob(prev => ({...prev, [event.target.name]: event.target.value }))
    }

    const handleTags = (event) => {
        setJob(prev => ({...prev, [event.target.name]: [...(job?.tags || []), event.target.value ] }))
    }

    const addJobMutation = usePost({ 
        api: apiUpdateJob,
        success: (data, variables, context) => {
            console.log("success adding job", data)
            setJob(initialJobState)
            navigate(`/users/jobs/${id}`)
            // setStep(3)
        },
        id: jobId,
    })
       
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("data", job)
        addJobMutation.mutate(job)
    }
    console.log({ job })

  return (
    <Dashboard> 
      {(addJobMutation?.isLoading) && <Loader loader={4} />}
        <div className='flex-1 overflow-y-auto overflow-hidden'>
            <Header business_string={id} type="job" />
          <section className='p-8 px-4 sm:px-8'>
            <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl' onSubmit={handleSubmit}>
                <div className='md:flex justify-between gap-6 md:mb-4'>
                    <div className='w-full mb-8 md:mb-0'>
                        <label htmlFor="companyName" className='font-medium text-sm'>Company Name</label>
                        <Input required value={job?.companyName} onChange={handleJob} variant={"job"} className='border-gray rounded-lg' type="text" name="companyName" id="companyName" />
                    </div>
                    <div className='w-full mb-8 md:mb-0'>
                        <label htmlFor="title" className='font-medium text-sm'>Job Title</label>
                        <Input required value={job?.title} onChange={handleJob} variant={"job"} className='border-gray rounded-lg' type="text" name="title" id="title" />
                    </div>
                    <div className='w-full '>
                        <label htmlFor="type" className='font-medium text-sm'>Job Type</label>
                        <Input required value={job?.type} onChange={handleJob} variant={"job"} className='border-gray rounded-lg' type="text" name="type" id="type" />
                    </div>
                </div>
                <div className='mb-8 md:mb-4 md:flex justify-between gap-6'>
                    <div className='mb-8 md:mb-0 w-full'>
                        <label htmlFor="location" className='font-medium text-sm'>Location</label>
                        <Input required value={job?.location} onChange={handleJob} variant={"job"} className='border-gray rounded-lg mt-2' type="text" name="location" id="location" 
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="salary" className='font-medium text-sm'>Salary</label>
                        <Input required value={job?.salary} onChange={handleJob} variant={"job"} className='border-gray rounded-lg mt-2' type="number" name="salary" id="salary" 
                        />
                    </div>
                </div>
                <div className='mb-8 md:mb-4'>
                    <label htmlFor="overview" className='font-medium text-sm'>Job Overview</label>
                    <Input required={true} value={job?.overview} onChange={handleJob} variant={"job"} textarea name="overview" id="overview" cols="30" rows="6" className='border-gray rounded-lg' placeholder='Enter job Description' />
                </div>
                <div className='mb-8 md:mb-4'>
                    <label htmlFor="benefit" className='font-medium text-sm'>Job Perks and Benefits</label>
                    <Input required={true} value={job?.benefit} onChange={handleJob} variant={"job"} textarea name="benefit" id="benefit" cols="30" rows="6" className='border-gray rounded-lg' placeholder='Enter job Perks and Benefits' />

                </div>
                <div className='mb-8 md:mb-4 md:flex justify-between gap-6'>
                    <div className='mb-8 md:mb-0 w-full'>
                        <label htmlFor="tags" className='font-medium text-sm'>Tags</label>
                        <select onChange={handleTags} required className='w-full border-2 outline-none bg-inherit px-4 py-3 focus:invalid:border-red-400 border-blue cursor-pointer rounded-lg' name="tags" id="tags" placeholder='Enter Categoies'>
                                <option value="">Select Product Categories</option>
                                {tags?.map((tag) => (
                                    <option key={tag.id} value={tag.name}>{tag.name}</option>
                                ))}
                            </select>
                            <div>
                                {(job.tags || [])?.map((tag, index) => (
                                    <span key={index} className='bg-gray-200 text-gray-600 text-xs py-1 rounded-full mr-2'>{tag}</span>
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

export default EditJob