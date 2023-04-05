import React from 'react'
import Button from '../Button'

const BusinessReview = ({ setModalOpen, modalOpen }) => {

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
    <div onClick={handleOutsideClick} className='backdrop-blur-[1.5px] bg-black/60 fixed top-0 left-0 w-full max-h-screen min-h-screen z-50 grid place-items-center overflow-hidden p-8'>
        <div className="modal bg-white p-8 py-6 w-full max-w-md">
            <h2 className='text-xl text-green2 font-semibold mb-3'>Write a Review</h2>
            <div className='py-2 pb-14 relative'>
                <textarea className='border-2 border-black/10 p-4 px-6 w-full text-xs opacity-80 outline-none focus:border-black/30 rounded-xl p-2' name="review" id="review" cols="40" rows="8" defaultValue="">
                </textarea>
                <div className='flex items-end gap-2 absolute bottom-2 right-6'>
                    <Button onClickFunc={closeModal} override={true} className='rounded px-5 py-1.5'>
                        Cancel
                    </Button>
                    <Button className='rounded px-5 py-1.5'>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessReview