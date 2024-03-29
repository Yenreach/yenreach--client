import React from 'react'
import Dashboard from "../../../components/layout/Dashboard"
import Head from '../../../components/users/Head'
import BusinessDetails from './BusinessDetails'
import BusinessPhotos from './BusinessPhotos'
import BusinessCreatedSuccess from './BusinessCreatedSuccess'

const initialBusinessState = { 
  user_string: "", 
  name: "", 
  description: "", categories: [], phone: "", email: "", state_id: "", lga: "", town: "", address: "", month_started: "", year_started: "", profile_img: "", cover_img: ""}

const index = () => {
  const [step, setStep] = React.useState(1)
  const [businessData, setBusinessData] = React.useState(initialBusinessState)

  // console.log("businessData", businessData)

  const handleBusinessData = (event) => {
    setBusinessData(prev => ({...prev, [event.target.name]: event.target.value }))
  }



  // console.log(step)
  return (
    <Dashboard>
      <main className='flex-1 overflow-y-scroll overflow-hidden'>
          <Head />
          <section className='p-8 px-4 sm:px-8'>
              {step < 3 && <h1 className='text-2xl text-green font-medium mb-5'>Create your new Business</h1>}
              {step === 1 ? 
                <BusinessDetails businessData={businessData} setBusinessData={setBusinessData} handleBusinessData={handleBusinessData} step={step} setStep={setStep} />
                : step === 2 ? 
                <BusinessPhotos setBusinessData={setBusinessData} businessData={businessData} handleBusinessData={handleBusinessData} setStep={setStep} /> 
                : <BusinessCreatedSuccess />
            }
          </section>
      </main>
    </Dashboard>
  )
}
export default index
