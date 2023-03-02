import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import { apiGetAllCategories } from '/src/services/CommonService'
import { apiGetStates, apiGetLGAs } from '/src/services/UserService'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'


const index = ({ setStep, handleBusinessData}) => {
    const [stateId, setStateId] = React.useState(null)
    const [filteredLgas, setfilteredLgas] = React.useState([]) 

    
    const { isLoading, error, data: categories } = useQuery({
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
    
    useEffect(() => {
        if(stateId) {
            handleBusinessData({target: {name: "state_id", value: stateId}})
            if (lgas) {
                const values = lgas.filter(lga => lga.state_id === stateId)
                setfilteredLgas(values)
            }
        }
    }, [stateId])

    // console.log("categories", categories, "states", states, "lgas", lgas)
    // console.log("stateId", stateId, "lga", lga)

    const handleSubmit = (e) => {
        e.preventDefault()
        setStep(2)
    }
  return (
    <form action="" className='p-8 px-4 sm:px-8 bg-white rounded-2xl' onSubmit={handleSubmit}>
        <div className='relative mb-11 p-6 border-[6px] border-r-[#E8E8E8] border-t-[#E8E8E8] border-green rounded-full rotate-45 inline-block'>
            <span className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 -rotate-45 font-semibold'>1/2</span>
        </div>
        <div className='mb-8'>
            <label htmlFor="name" className='font-medium text-sm'>Business Name</label>
            <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="name" id="name" placeholder='Enter your business name' />
        </div>
        <div className='mb-8'>
            <label htmlFor="description" className='font-medium text-sm'>Business Description</label>
            <textarea required={true} onChange={handleBusinessData} name="description" id="description" cols="30" rows="10" className='w-full border-2 outline-none focus:invalid:border-red-400 invalid:border-red-400 focus:border-sky-700 hover:border-sky-700 cursor-pointer px-4 py-3 bg-inherit border-gray rounded-lg' placeholder='Enter your business Discription' />
        </div>
        <div className='mb-8'>
            <label htmlFor="category" className='font-medium text-sm'>Add tags</label>
            <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="category" id="category" placeholder='Add a tag to your business' />
        </div>
        <div className='mb-8 md:flex justify-between gap-9'>
            <div className='mb-8 w-full'>
                <label htmlFor="phone" className='font-medium text-sm'>Phone Number</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="phone" id="phone" placeholder='Enter your business Phone number' />
            </div>
            <div className='w-full'>
                <label htmlFor="email" className='font-medium text-sm'>Email Address</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="email" id="email" placeholder='Enter your business Email Address' />
            </div>
        </div>
        <div className='mb-8 md:flex justify-between gap-9'>
            <div className='w-full mb-8'>
                <label htmlFor="state_id" className='font-medium text-sm'>State</label>
                <select onChange={(e) => setStateId(e.target.value)} required className='w-full border-2 outline-none focus:invalid:border-red-400 invalid:border-red-400 focus:border-sky-700 hover:border-sky-700 cursor-pointer px-4 py-3 bg-inherit border-gray rounded-lg' name="state_id" id="state_id" placeholder='Enter state'>
                    <option value="">Enter State</option>
                    {states?.map((state) => (
                        <option key={state.id} value={state.id}>{state.name}</option>
                    ))}
                </select>
            </div>
            <div className='w-full mb-8'>
                <label htmlFor="lga" className='font-medium text-sm'>LGA</label>
                <select onChange={handleBusinessData} className='w-full border-2 outline-none focus:invalid:border-red-400 invalid:border-red-400 focus:border-sky-700 hover:border-sky-700 cursor-pointer px-4 py-3 bg-inherit border-gray rounded-lg' name="lga" id="lga" placeholder='Enter LGA'>
                    <option value="">Enter LGA</option>
                    {filteredLgas?.map((lga) => (
                        <option key={lga.id} value={lga.name}>{lga.name}</option>
                    ))}
                </select>
            </div>
            <div className='w-full '>
                <label htmlFor="town" className='font-medium text-sm'>City/Town</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="town" id="town" placeholder='Enter city' />
            </div>
        </div>
        <div className='mb-8'>
            <label htmlFor="address" className='font-medium text-sm'>Business Address</label>
            <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="address" id="address" placeholder='Enter your business Address' />
        </div>
        <div className='mb-8 md:flex justify-between gap-9'>
            <div className='w-full mb-8'>
                <label htmlFor="month_started" className='font-medium text-sm'>Business start month</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="month_started" id="month_started" placeholder='Enter your business start Month' />
            </div>
            <div className='w-full '>
                <label htmlFor="year_started" className='font-medium text-sm'>Business start year</label>
                <Input required={true} onChange={handleBusinessData} className='border-gray rounded-lg' type="text" name="year_started" id="year_started" placeholder='Enter your business start Year' />
            </div>
        </div>
        <Button type='submit' className='p-3 w-full flex justify-center'>
            Next
        </Button>
    </form>
  )
}

export default index