import React from 'react'

const Loader = ({ setModalOpen, modalOpen, loader=4 }) => {
    
    React.useEffect(() => {
        if (modalOpen && loader >= 3) {
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
    {loader===1 ? 
        <div onClick={handleOutsideClick} className='backdrop-blur-[1.5px] bg-black/20 fixed top-0 left-0 w-full z-50 h-1'>
            <div className='absolute top-0 left-0 h-full'>
                <div className='flex gap-5 h-full'>
                    {[...Array(60)].map((el, index) => <div key={index} className="w-8 bg-green h-full animate-slideIn"></div>
                    )}
                </div>
            </div>
        </div>
        : loader===2 ?
            <div onClick={handleOutsideClick} className='backdrop-blur-[1.5px] bg-black/20 fixed top-0 left-0 w-full z-50 h-1'>
                <div className='flex gap-12 h-full w-fit'>
                    {[...Array(80)].map((el, index) => <div key={index} className="w-20 bg-green h-full animate-slideIn"></div>
                    )}
                </div>
            </div> 
        : loader===3 ?
            <div onClick={handleOutsideClick} className='backdrop-blur-[1px] bg-black/10 fixed top-0 left-0 w-full max-h-screen min-h-screen z-50 grid place-items-center overflow-hidden'>
                <div className='flex gap-12 w-fit h-8 w-8 rounded-full border-green relative animate-[around_1s_linear_infinite] overflow-hidden'>
                    <span className='w-24 h-2 rounded-full absolute top-0 left-0 bg-green animate-pulse'></span>
                    <span className='w-24 h-2 rounded-full absolute bottom-0 left-0 bg-green animate-[pulse_2s_infinite]'></span>
                </div>
            </div> 
        : loader===4 ?
            <div onClick={handleOutsideClick} className='backdrop-blur-[1px] bg-black/10 fixed top-0 left-0 w-full max-h-screen min-h-screen z-50 grid place-items-center overflow-hidden'>
                <div className='flex gap-12 w-fit h-8 w-8 rounded-full border-green border-b-2 relative animate-[around_1s_linear_infinite] overflow-hidden'>
                </div>
            </div> 
        :   null
        }
    </>    
  )
}

export default Loader