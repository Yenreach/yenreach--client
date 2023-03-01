import React from 'react'
import Dashboard from "../../../components/layout/Dashboard"
import Head from '../../../components/users/Head'
import BusinessDetails from '../BusinessDetails'
import BusinessPhotos from '../BusinessPhotos'
import BusinessCreatedSuccess from '../BusinessCreatedSuccess'

const initialBusinessState = { user_string: "", name: "", description: "", category: [], phone: "", email: "", state_id: "", lga: "", town: "", address: "", month_started: "", year_started: "", profile_img: "", cover_img: ""}

const index = () => {
  const [step, setStep] = React.useState(1)
  const [businessData, setBusinessData] = React.useState(initialBusinessState)

  console.log("businessData", businessData)

  const handleBusinessData = (event) => {
    // if (event.target.name === 'category') {
    //   let category = [...businessData.category]
    //   if (event.target.checked) {
    //     category.push(event.target.value)
    //   } else {
    //     category = category.filter(item => item !== event.target.value)
    //   }
    //   setBusinessData(prev => ({...prev, category}))
    //   return
    // }
    setBusinessData(prev => ({...prev, [event.target.name]: event.target.value }))
  }

  console.log(step)
  return (
    <Dashboard>
      <main className='flex-1 overflow-y-scroll'>
          <Head />
          <section className='p-8 px-4 sm:px-8'>
              <h1 className='text-2xl text-green font-medium mb-5'>Create your new Business</h1>
              {step === 1 ? 
                <BusinessDetails handleBusinessData={handleBusinessData} step={step} setStep={setStep} />
                : step === 2 ? 
                <BusinessPhotos handleBusinessData={handleBusinessData} setStep={setStep} /> 
                : <BusinessCreatedSuccess />
            }
          </section>
      </main>
    </Dashboard>
  )
}
export default index
