import React from 'react'
import Button from '/src/components/ui/Button'

const SellerDetailsModal = ({ setModalOpen, modalOpen, data }) => {

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
            <h2 className='text-xl text-orange font-semibold mb-3'>Contact Details</h2>
            <div className='py-2 pb-14 relative'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p className='text-xs text-black/60'>Name</p>
                        <p className='text-sm font-semibold'>{data?.name}</p>
                    </div>
                    <div>
                        <p className='text-xs text-black/60'>Email</p>
                        <p className='text-sm font-semibold'>{data?.email}</p>
                    </div>
                    <div>
                        <p className='text-xs text-black/60'>Phone Number</p>
                        <p className='text-sm font-semibold'>{data?.phonenumber}</p>
                    </div>
                    <div>
                        <p className='text-xs text-black/60'>Address</p>
                        <p className='text-sm font-semibold'>{data?.address} {data?.state}</p>
                    </div>
                </div>

                <div className='flex items-end gap-2 absolute bottom-2 right-6'>
                    <Button onClickFunc={closeModal} override={true} className='rounded px-5 py-1.5'>
                        Exit
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SellerDetailsModal