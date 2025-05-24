import React, { useEffect } from 'react'
import Button from '../Button'
import {  AiOutlineStar, AiFillStar } from "react-icons/ai";
import usePost from '/src/hooks/usePost'
import { apiUpdateBusinessReview } from '/src/services/CommonService'
import useFetch from '../../../hooks/useFetch';
import { apiGetBusinessReview } from '../../../services/CommonService';
import Loader from '../../Loader';



const EditBusinessReview = ({ setModalOpen, value, user, business_string, onSuccess }) => {
  const [review, setReview] = React.useState("")
  const [rating, set] = React.useState(0)


  // console.log("review", review)

  const updateReview = usePost({ 
    api: apiUpdateBusinessReview, 
    success: (data,b,c) => {
      // console.log("data", data)
      onSuccess()
      closeModal()
    } 
  })


    React.useEffect(() => {
        if (!!value) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'unset'
        }
      }, [value])

      const handleOutsideClick = (e) => {
          if (e.target === e.currentTarget) {
              closeModal()
          }
      }

    const closeModal = () => {
        setModalOpen('')
        document.body.style.overflow = 'unset'
    }
    
    const handleSubmit = () => {
      // console.log("submit", user?.id, review, rating, business_string)
        updateReview.mutate({ 
          id: value,
          business_string,
          review, 
          star: rating 
        })
    }

      
    const { data, error: errorReviews, isLoading, isFetching } = useFetch({
        api: apiGetBusinessReview,
        param: value,
        key: ['review', value],
        enabled: !!value,
    })

    useEffect(() => {
        if (data) {
            setReview(data.review)
            set(Number(data.star))
        }
    }, [data])

    

  return (
    <>
        {(isLoading || isFetching) && <Loader loader={4} />}
        <div onClick={handleOutsideClick} className='backdrop-blur-[1.5px] bg-black/60 fixed top-0 left-0 w-full max-h-screen min-h-screen z-40 grid place-items-center overflow-hidden p-8'>
            <div className="modal bg-white p-8 py-6 w-full max-w-md">
                <h2 className='text-xl text-green2 font-semibold mb-3'>Edit Review</h2>
                <div className='py-2 pb-14 relative'>
                    <div className="flex items-center justify-center gap-2 mb-3">
                        {[...Array(5).keys()].map(rate => (
                        rating > rate ? <AiFillStar key={rate} onClick={() => set(rate+1)} className="text-green cursor-pointer" size="2rem" /> : <AiOutlineStar key={rate} onClick={() => set(rate+1)} className="text-green cursor-pointer" size="2rem" /> ))}
                    </div>
                    <textarea value={review} onChange={(e) => setReview(e.target.value)} className='border-2 border-black/10 p-4 px-6 w-full text-xs opacity-80 outline-none focus:border-black/30 rounded-xl' name="review" id="review" cols="40" rows="8"></textarea>
                    <div className='flex items-end gap-2 absolute bottom-2 right-6'>
                        <Button onClickFunc={closeModal} override={true} className='rounded px-5 py-1.5'>
                            Cancel
                        </Button>
                        <Button onClickFunc={handleSubmit} className='rounded px-5 py-1.5'>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditBusinessReview