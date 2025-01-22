import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import { MdClose } from 'react-icons/md'
import Promo from './Promo'

const ProductAdsModal = ({ setModalOpen, modalOpen }) => {
  const [isOPen, setIsOpen] = useState(false)

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
      // if (isOPen) {
      //   return setIsOpen(false)
      // }
      document.body.style.overflow = 'unset'
      setModalOpen(false)
    }




  return (
    <div onClick={handleOutsideClick} className='backdrop-blur-[1.5px] bg-black/60 fixed top-0 left-0 w-full max-h-screen min-h-screen z-50 grid place-items-center overflow-hidden p-8 max-w-screen'>
        <div className="relative w-full p-8 bg-white lg:max-w-6xl">
            <MdClose className='absolute z-50 text-xl cursor-pointer top-2 right-2 md:top-8 md:right-8' onClick={() => closeModal()} />
              {
                !isOPen &&
                 <h2 className='mb-6 text-xl font-semibold text-center text-orange'>Products you may like</h2>
              }
            {
              isOPen ? 
              <Promo closeModal={closeModal} />
              : 
              <Promo closeModal={closeModal} />
            }
        </div>
    </div>
  )
}

export default ProductAdsModal