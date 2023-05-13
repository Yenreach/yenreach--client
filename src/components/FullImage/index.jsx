import React from 'react'

const FullImage = ({ setImageModalOpen, image }) => {

    const handleOutsideClick = (e) => {
        console.log(e.target)
        if (e.target === e.currentTarget) {
            setImageModalOpen(false)
        }
    }

  return (
    <div onClick={handleOutsideClick} className='fixed p-4 sm:p-12 top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center'>
        <div onClick={handleOutsideClick} className='w-full h-full flex justify-center items-center'>
            <img src={image} alt="" className='w-full h-full object-contain' />
        </div>
        <button
            className='absolute top-4 right-4 text-white text-3xl'
            onClick={() => setImageModalOpen(false)}
        >
            &times;
        </button>
    </div>

  )
}

export default FullImage