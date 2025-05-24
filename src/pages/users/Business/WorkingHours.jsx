import  { useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import useFetch from '/src/hooks/useFetch'
import usePost from '/src/hooks/usePost'
import Header from "/src/components/users/Header"
import Dashboard from "../../../components/layout/Dashboard"
import { useAuthContext } from '/src/hooks/useAuthContext'
import { apiGetBusinessWorkingHours } from '../../../services/CommonService';
import React, { useReducer } from 'react'
import Button from '../../../components/ui/Button'
import { apiAddBusinessWorkingHours, apiDeleteBusinessWorkingHour } from '../../../services/UserService';
import Loader from '../../../components/Loader'
import { useMutation } from '@tanstack/react-query'
import { MdChevronLeft } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'

const initialState = {
    business_string: '',
    day: '',
    opening_time: '',
    closing_time: '',
}

const inputDays = ["Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays", "Sundays"]
const inputTime = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"]


const WorkingHours = () => {
  const { id } = useParams()
  const [data, dispatch] = useReducer((state, action) => {
    return { ...state, [action.type]: action.payload }
}, initialState)

console.log({data})



  const { user } = useAuthContext()
  const reviewsContainerRef = useRef(null)
  const navigate = useNavigate()

    const { data: workingHours, error: errorWorkingHours, refetch } = useFetch({
        api: apiGetBusinessWorkingHours,
        param: {id},
        key: ['workingHours', id],
    })

    const addHoursMutation = usePost({ 
        api: apiAddBusinessWorkingHours,
        success: (data) => {
            refetch()
        },
     })    
   
     const deleteHoursMutation = usePost({ 
        api: apiDeleteBusinessWorkingHour,
        success: (data) => {
            refetch()
        },
     })  
     
    //  console.log({ workingHours })
     
    //  const deleteJobMutation = useMutation({
    //     mutationFn: (data) => {
    //       console.log("data", data)
    //       return apiDeleteJob(data)
    //     },
    //     onSuccess: (data, variables, context) => {
    //         console.log("success deleting job", data)
    //         removeJobsCache()
    //         refetchJobs()
    //         // statusRef.current.checked = !statusRef.current.checked
    //     },
    //     onError: (error, variables, context) => {
    //       console.log("error deleting job", error)
    //     },
    //   })

    const handleSubmit = (e) => {
        e.preventDefault()
        const val = { ...data, business_string: id }
        // console.log("data", data)
        addHoursMutation.mutate(val)
    }



  return (
    <Dashboard>        
        
      <div className='flex-1 overflow-hidden overflow-y-auto'>
        {(addHoursMutation?.isLoading || deleteHoursMutation?.isLoading)  && <Loader loader={4} />}
        {/* <Header business_string={id} type="business" /> */}
        <section className='py-6 px-7'>
            <Link to={`/users/business/${id}`} className='p-1.5 px-3 text-xs font-arialsans w-fit bg-green text-white flex items-center gap-2 mb-4'>
                <BsArrowLeft />
                    <span>Back</span>
                    
            </Link>
            <div className='mb-16'>
                    <h2 className='mb-3 text-lg font-medium text-green'>Business Working Hours</h2>
                    <div className='font-arialsans text-[#476788] px-12 py-5 bg-white rounded-2xl'>
                    {
                    workingHours ?  
                    <div className="max-w-lg pb-10 mb-5 overflow-hidden bg-white rounded-lg">
                    <ul className="mt-4">
                        {workingHours.map((hour) => (
                            <li key={hour.id} className="py-2 text-sm border-b border-gray-200 md:py-3 md:mx-4">
                                <div className="flex justify-between">
                                    <span className="font-medium text-gray-600">{hour.day}</span>
                                    <div className='flex items-center gap-3'>
                                        <span className="text-gray-800">{hour.opening_time} - {hour.closing_time}</span>
                                        <Button onClickFunc={() => deleteHoursMutation?.mutate({ string: hour?.id})} className='p-1 text-xs rounded'>
                                           Delete
                                        </Button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    </div> 
                    :
                    <div className='flex flex-col items-center justify-between gap-3 md:flex-row md:gap-8'>
                    <p>No workings hours set</p>
                    </div>
                }
                    </div>
                </div>
                <div className='flex flex-col p-8 text-sm bg-white rounded-md'>
                    <h2 className='mb-3 text-lg font-medium text-green'>Add Working Hours</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col max-w-md gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="day" className='text-sm'>Select Day</label>
                                <select onChange={(e) => dispatch({ type: 'day', payload: e.target.value })} required className='w-full px-4 py-3 border-2 rounded-lg outline-none cursor-pointer bg-inherit focus:invalid:border-red-400 border-green' name="categories" id="day" placeholder='Enter day'>
                                    <option value="">-Select Day</option>
                                    {inputDays?.map((day) => (
                                        <option key={day} value={day}>{day}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="opening_time" className='text-sm'>OPening Time</label>
                                <select onChange={(e) => dispatch({ type: 'opening_time', payload: e.target.value })} required className='w-full px-4 py-3 border-2 rounded-lg outline-none cursor-pointer bg-inherit focus:invalid:border-red-400 border-green' name="opening_time" id="opening_time" placeholder='Enter Opening'>
                                    <option value="">-Select Opening Time</option>
                                    {inputTime?.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="closing_time" className='text-sm'>Closing Time</label>
                                <select onChange={(e) => dispatch({ type: 'closing_time', payload: e.target.value })} required className='w-full px-4 py-3 border-2 rounded-lg outline-none cursor-pointer bg-inherit focus:invalid:border-red-400 border-green' name="closing_time" id="closing_time" placeholder='Enter Closing'>
                                    <option value="">-Select Closing Time</option>
                                    {inputTime?.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                            <Button type={'submit'} className='px-5 py-3 text-sm rounded'>
                                Add Working Hour
                            </Button>
                        </form>

            </div>
        </section>


        
        </div>
    </Dashboard>
  )
}

export default WorkingHours