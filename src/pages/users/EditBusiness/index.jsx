import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import Head from '../../../components/users/Head'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"
import Header from "/src/components/users/Header"
import useFetch from '/src/hooks/useFetch'
import { apiGetOneBusiness } from '/src/services/UserService'
import { useAuthContext } from '/src/hooks/useAuthContext'
import { apiGetStates, apiGetLGAs } from '/src/services/UserService'
import { apiGetAllCategories } from '/src/services/CommonService'
import usePost from '/src/hooks/usePost'
import { apiEditBusiness } from '/src/services/UserService'
import Loader from '/src/components/Loader'



const initialBusinessState = { user_string: "", name: "", description: "", categories: [], phonenumber: "", email: "", state_id: "", lga: "", town: "", address: "", month_started: "", year_started: "", profile_img: "", cover_img: ""}
const months = [
    {id: 1, name: "January"},
    {id: 2, name: "February"},
    {id: 3, name: "March"},
    {id: 4, name: "April"},
    {id: 5, name: "May"},
    {id: 6, name: "June"},
    {id: 7, name: "July"},
    {id: 8, name: "August"},
    {id: 9, name: "September"},
    {id: 10, name: "October"},
    {id: 11, name: "November"},
    {id: 12, name: "December"},
]

const index = () => {
  const { id } = useParams()
  const { user } = useAuthContext()
  const [businessData, setBusinessData] = React.useState(initialBusinessState)
  const [stateId, setStateId] = React.useState(null)
  const [filteredLgas, setfilteredLgas] = React.useState([]) 
    const navigate = useNavigate()

  const editBusinessMutation = usePost({ 
    api: apiEditBusiness,
    success: (data) => {
        navigate(`/users/business/${id}`)
    },
 })    


  const { isLoading, error, data: business  } = useFetch({
    api: apiGetOneBusiness,
    param: id,
    key: ['userBusiness', id],
  })

    const {  data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () => getData(apiGetAllCategories),
    })

    const { data: states } = useQuery({
        queryKey: ['states'],
        queryFn: () => getData(apiGetStates),
    })
    
    const { data: lgas } = useQuery({
        queryKey: ['lgas'],
        queryFn: () => getData(apiGetLGAs),
    })


  

    React.useEffect(() => {
        if (business) {
            setBusinessData(business)
            setStateId(business.state_id)
        }
    }, [business])

    useEffect(() => {
        if(stateId) {
            handleBusinessData({target: {name: "state_id", value: stateId}})
            if (lgas) {
                const values = lgas.filter(lga => lga.state_id === stateId)
                setfilteredLgas(values)
            }
        }
    }, [stateId])


  const handleBusinessData = (event) => {
    setBusinessData(prev => ({...prev, [event.target.name]: event.target.value }))
  }

//   console.log("business", businessData)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { ...businessData }
        console.log("data", data)
        editBusinessMutation.mutate(data)
    }

  return (
    <Dashboard>
        {(isLoading || editBusinessMutation?.isLoading) && <Loader loader={4} />}

        <main className='flex-1 overflow-y-scroll overflow-hidden'>
            <Header business_string={id} type="business" />

            <section className='p-8 px-4 sm:px-8'>
                <h1 className='text-xl text-green font-medium mb-5'>Edit your Business profile</h1>
                {/* <BusinessDetails /> */}
                <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl' onSubmit={handleSubmit}>
                    <div className='mb-8'>
                        <label htmlFor="business_name" className='font-medium text-sm'>Business Name</label>
                        <Input required={true} value={businessData?.name} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="name" id="name" placeholder='Enter your business name' />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="description" className='font-medium text-sm'>Business Description</label>
                        <Input required={true} value={businessData?.description} onChange={handleBusinessData} textarea name="description" id="description" cols="30" rows="10" className='border-gray rounded-lg' placeholder='Enter your business Discription' />
                    </div>
                    {/* <div className='mb-8'>
                        <label htmlFor="business_name" className='font-medium text-sm'>Add tags</label>
                        <Input required={true} value={businessData?.name} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="" id="" placeholder='Add a tag to your business' />
                    </div> */}
                    <div className='mb-8 md:flex justify-between gap-9'>
                        <div className='mb-8 w-full'>
                            <label htmlFor="business_name" className='font-medium text-sm'>Phone Number</label>
                            <Input required={true} value={businessData?.phonenumber} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="phonenumber" id="phonenumber" placeholder='Enter your business Phone number' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="business_name" className='font-medium text-sm'>Email Address</label>
                            <Input required={true} value={businessData?.email} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="email" id="email" placeholder='Enter your business Email Address' />
                        </div>
                    </div>
                    <div className='mb-8 md:flex justify-between gap-9'>
                        <div className='w-full mb-8'>
                            <label htmlFor="state_id" className='font-medium text-sm'>State</label>
                            <select value={businessData?.state_id} onChange={(e) => setStateId(e.target.value)} required className='w-full border-2 outline-none bg-inherit px-4 py-3 focus:invalid:border-red-400 border-green cursor-pointer rounded-lg' name="state_id" id="state_id" placeholder='Enter state'>
                                <option value="">Enter State</option>
                                {states?.map((state) => (
                                    <option key={state.id} value={state.id}>{state.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full mb-8'>
                            <label htmlFor="lga" className='font-medium text-sm'>LGA</label>
                            <select value={businessData?.lga} onChange={handleBusinessData} className='w-full border-2 outline-none bg-inherit px-4 py-3 focus:invalid:border-red-400 border-green cursor-pointer rounded-lg' name="lga" id="lga" placeholder='Enter LGA'>
                                <option value="">Enter LGA</option>
                                {filteredLgas?.map((lga) => (
                                    <option key={lga.id} value={lga.name}>{lga.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full '>
                            <label htmlFor="town" className='font-medium text-sm'>City/Town</label>
                            <Input required={true} value={businessData?.town} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="town" id="town" placeholder='Enter city' />
                        </div>
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="address" className='font-medium text-sm'>Business Address</label>
                        <Input required={true} value={businessData?.address} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="address" id="address" placeholder='Enter your business Address' />
                    </div>
                    <div className='mb-8 md:flex justify-between gap-9'>
                        <div className='w-full mb-8'>
                            <label htmlFor="month_started" className='font-medium text-sm'>Business start month</label>
                            <select required value={businessData?.month_started} onChange={handleBusinessData} className='w-full border-2 outline-none bg-inherit px-4 py-3 focus:invalid:border-red-400 border-green cursor-pointer rounded-lg' name="month_started" id="month_started" placeholder='Enter your business start Month'>
                                <option value="">Enter your business start Month</option>
                                {months?.map((month) => (
                                    <option key={month.id} value={month.name}>{month.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full '>
                            <label htmlFor="year_started" className='font-medium text-sm'>Business start year</label>
                            <Input required={true} value={businessData?.year_started} onChange={handleBusinessData} className='border-gray rounded-lg' type="number" name="year_started" id="year_started" placeholder='Enter your business start Year' />
                        </div>
                    </div>
                    <Button type="submit" className='p-3 w-full flex justify-center'>
                        Save changes
                    </Button>
                </form>
                </section>
        </main>
    </Dashboard>

  )
}

export default index