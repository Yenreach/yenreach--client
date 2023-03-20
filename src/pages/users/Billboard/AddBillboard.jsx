import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import usePost from '/src/hooks/usePost'
import useImage from '/src/hooks/useImage'
import { apiAddProduct } from '../../../services/ProductService'
import { RiAddFill } from 'react-icons/ri'
import Head from '../../../components/users/Head'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"

const initialApplicationState = { 
    'user_string': "",
    'advert_type': "",
    'title': "",
    'text': "",
    'action_type': "",
    'action_link': "",
    'proposed_start': "",
    // application_tags : [],
}

const categories = [
    {id: 1, name: "Electronics"},
    {id: 2, name: "Fashion"},
    {id: 3, name: "Home"},
    {id: 4, name: "Beauty"},
    {id: 5, name: "Health"},
    {id: 6, name: "Sports"},
    {id: 7, name: "Automobile"},
    {id: 8, name: "Food"},
    {id: 9, name: "Toys"},
    {id: 10, name: "Books"},
    {id: 11, name: "Others"},
]

const Billboard = () => {
    const [application, setApplication] = React.useState(initialApplicationState)
    const { id } = useParams()
    const navigate = useNavigate()

    const handleChange = (event) => {
        setApplication(prev => ({...prev, [event.target.name]: event.target.value }))
    }

    const handleCategory = (event) => {
        setApplication(prev => ({...prev, [event.target.name]: [...application.categories, event.target.value] }))
    }

    const submitApplication = usePost({ 
        api: apiAddProduct,
        success: (data) => {
            setApplication(initialApplicationState)
            navigate(`/users/applications/${id}/application-success`)
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("data", application)
        submitApplication.mutate({...application, business_string: id })
    }

    return (
        <Dashboard> 
            <div className='flex-1 overflow-hidden'>
             <Head />
            <section className='p-8 px-4 sm:px-8'>
                <div className='mb-3'>
                    <h1 className='text-xl font-medium text-black/80 text-gray-800 mb-1'>Yenreach Billboard Application</h1>
                    <p className='text-sm opacity-80'>Application to place an Advert on the Yenreach Online Billboard</p>
                </div>
                <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl' onSubmit={handleSubmit}>
                    <div className='mb-8'>
                        <label htmlFor="photo" className='font-medium text-sm'>Photo</label>
                        <Input type="file" required onChange={handleChange} variant={"plain"} className='border-gray rounded-lg mt-2' name="photo" id="photo" placeholder='Enter application name' />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="title" className='font-medium text-sm'>Description</label>
                        <Input required={true} onChange={handleChange} variant={"plain"} name="title" id="title" className='border-gray rounded-lg' placeholder='Adverts Heading' />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="text" className='font-medium text-sm'>Short Description</label>
                        <Input required={true} onChange={handleChange} variant={"plain"} textarea name="text" id="text" cols="30" rows="10" className='border-gray rounded-lg' placeholder='Advert Text' />
                    </div>
                    <div className='mb-8 md:flex justify-between gap-9'>
                        <div className='mb-8 w-full'>
                            <label htmlFor="action_type" className='font-medium text-sm'>Categories</label>
                            <select onChange={handleCategory} required className='w-full border-2 rounded-sm outline-none bg-inherit px-4 py-3 focus:invalid:border-red-400 border-black/10 cursor-pointer rounded-lg' name="action_type" id="action_type" placeholder='Enter Categoies'>
                                <option value="">Call to Action Type</option>
                                {categories?.map((category) => (
                                    <option key={category.id} value={category.name}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="action_link" className='font-medium text-sm'>Enter Link</label>
                        <Input required={true} onChange={handleChange} variant={"plain"} name="action_link" id="action_link" className='border-gray rounded-lg' placeholder='Adverts Heading' />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="proposed_start" className='font-medium text-sm'>Enter Link</label>
                        <Input required={true} type="date" onChange={handleChange} variant={"plain"} name="proposed_start" id="proposed_start" className='border-gray rounded-lg' placeholder='Adverts Heading' />
                    </div>
                    <div className='flex gap-2'>
                        <Button type='submit' variant="plain" className='p-3 px-12 md:px-20 rounded text-sm'>
                            Submit Application
                        </Button>
                    </div>
                </form>
            </section>
            </div>
        </Dashboard>
    )
}

export default Billboard