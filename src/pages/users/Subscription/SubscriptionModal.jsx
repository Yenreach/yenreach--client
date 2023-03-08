import React from 'react'
import Button from '/src/components/ui/Button'

const SubscriptionModal = ({ setModalOpen, modalOpen }) => {

    React.useEffect(() => {
        if (modalOpen) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'unset'
        }
      }, [modalOpen])

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }

    const closeModal = () => {
        setModalOpen(false)
        document.body.style.overflow = 'unset'
    }
    
    

  return (
    <div onClick={handleOutsideClick} className='backdrop-blur-[1.5px] bg-black/60 fixed top-0 left-0 w-full max-h-screen min-h-screen z-50 grid place-items-center overflow-hidden'>
        <div className="modal bg-white p-12 pb-10 w-full rounded-3xl grid place-items-center max-w-[478px]">
            <p className='text-xs text-[#476788] opacity-90 text-center max-w-sm mb-10'>
            You are about to Subscribe your Business, Skills And Angels Inc. to the Special Subscription PackageYou are to pay the sum of <span className='text-green font-semibold'>NGN1,000.00</span> and the subscription will be for the duration of <span className='text-green font-semibold'>1 Month</span> 
            </p>
            <div className='flex items-center gap-8 pt-6 border-t border-black/10 w-full flex justify-center'>
                <Button className='rounded px-5 py-2.5'>
                    Subscribe
                </Button>
                <Button onClickFunc={closeModal} override={true} className='rounded px-7 py-2.5 border border-black/30'>
                    Cancel
                </Button>
            </div>
        </div>
    </div>
  )
}

export default SubscriptionModal