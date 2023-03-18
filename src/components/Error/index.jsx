import React from 'react'
import ErrorImg from '/src/assets/error.svg'
import { MdClose } from 'react-icons/md'

const Error = () => {
    const [modalOpen, setModalOpen] = React.useState(true)

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
    <>
   {modalOpen &&
        <div onClick={handleOutsideClick} className='backdrop-blur-[1.5px] bg-black/60 fixed top-0 left-0 w-full max-h-screen min-h-screen z-50 grid place-items-center overflow-hidden px-8'>
            <div className="modal bg-white p-8 py-6 pt-20 w-full max-w-md relative">
                <div className='w-full h-12 bg-green absolute top-0 left-0'>        
                    <MdClose onClick={closeModal} className="absolute top-3 right-3 text-white text-xl cursor-pointer" />
                </div>
            <h1
                className="text-lg font-medium text-center"
            >
                An error has occurred. Please check your internet connection and try again 
            </h1>
                <img src={ErrorImg} alt="Error" className="w-1/2 mx-auto mt-4 mb-8" />
            </div>
        </div>
    }
    </>
  )
}

export default Error