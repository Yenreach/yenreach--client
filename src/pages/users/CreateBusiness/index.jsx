import React from 'react'
import Dashboard from "../../../components/layout/Dashboard"
import Head from '../../../components/users/Head'
import BusinessDetails from '../BusinessDetails'
import BusinessPhotos from '../BusinessPhotos'
import BusinessCreatedSuccess from '../BusinessCreatedSuccess'


const index = () => {
  const [step, setStep] = React.useState(1)
  console.log(step)
  return (
    <Dashboard>
      <main className='flex-1 overflow-y-scroll'>
          <Head />
          <section className='p-8 px-4 sm:px-8'>
              <h1 className='text-2xl text-green font-medium mb-5'>Create your new Business</h1>
              {step === 1 ? 
                <BusinessDetails step={step} setStep={setStep} />
                : step === 2 ? 
                <BusinessPhotos setStep={setStep} /> 
                : <BusinessCreatedSuccess />
            }
          </section>
      </main>
    </Dashboard>
  )
}
export default index
