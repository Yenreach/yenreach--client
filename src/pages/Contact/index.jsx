import React, { useReducer } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Blob from '../../assets/about-blob.svg'
import usePost from '/src/hooks/usePost'
import { apiFeedback } from '/src/services/CommonService'
import Loader from '../../components/Loader'



const index = () => {

    const [feedback, updateFeedback] = useReducer(
        (state, newValue) => {
        return {
            ...state,
            ...newValue,
        };
        },
        {
            email: "",
            first_name: "",
            last_name: "",
            subject: "",
            message: "",
            phone: "",
    })

    const updateUserMutation = usePost({ 
        api: apiFeedback,
        success: (a,b,c) => {
            updateFeedback({
                email: "",
                first_name: "",
                last_name: "",
                subject: "",
                message: "",
                phone: "",
            })
        } 
    })

    const sendFeedback = () => {
        // console.log("feedback", feedback)
        updateUserMutation.mutate({ ...feedback, name: feedback?.first_name + " " + feedback?.last_name  })
    }

    // console.log("feedback1", feedback)
    return (
        <>
            {updateUserMutation?.isLoading && <Loader loader={4} />}
            <Header />
            <div className='top top-banner md:py-16 lg:py-16 relative bg-[url("assets/contact-hero.svg")] bg-cover bg-center text-white flex items-center justify-center'>
                <div className='lg:w-1/2 text-center'>
                    <h2 className='text-2xl md:text-3xl font-medium mb-2 md:mb-3 text-[#89F1B4]'>Reach out to us</h2>
                    <p className='font-arialsans text-sm md:text-lg leading-tight font-light'>
                        At Yenreach, we value whatever you tell us. we recognise the need of both businesses and users and that is why we offer top notch cusomer service available 24/7
                    </p>
                </div>
            </div>
            <section className='py-12 pb-16 md:pb-20 px-4 md:px-10 lg:px-20 relative flex justify-center bg-[#FAFAFA]'>
                <img src={Blob} alt="" className='hidden sm:block absolute left-4 lg:left-20 top-1/2 -translate-y-1/2' />
                <form action="" method="post" className='bg-white p-10 text-dark-light sm:w-2/3 lg:w-1/2'>
                    <div className='md:flex items-center gap-5 mb-8'>
                        <div className='mb-8 md:mb-0'>
                            <label htmlFor="first_name" className='font-medium text-sm sm:text-base'>First Name</label>
                            <Input value={feedback?.first_name} onChange={(e) => updateFeedback({ first_name: e.target.value })} className='border border-[#D3DAE6] rounded' type="text" name="first_name" id="first_name" />
                        </div>
                        <div>
                            <label htmlFor="last_name" className='font-medium text-sm sm:text-base'>Last Name</label>
                            <Input value={feedback?.last_name} onChange={(e) => updateFeedback({ last_name: e.target.value })} className='border border-[#D3DAE6] rounded' type="text" name="last_name" id="last_name" />
                        </div>
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="email" className='font-medium text-sm sm:text-base'>Email Address</label>
                        <Input value={feedback?.email} onChange={(e) => updateFeedback({ email: e.target.value })} className='border border-[#D3DAE6] rounded' type="email" name="email" id="email" />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="phone" className='font-medium text-sm sm:text-base'>Phone Number <span className='text-[#ABB4C4]'>(optional)</span></label>
                        <Input value={feedback?.phone} onChange={(e) => updateFeedback({ phone: e.target.value })} className='border border-[#D3DAE6] rounded' type="tel" name="phone" id="phone" />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="subject" className='font-medium text-sm sm:text-base'>Subject <span className='text-[#ABB4C4]'></span></label>
                        <Input value={feedback?.subject} onChange={(e) => updateFeedback({ subject: e.target.value })} className='border border-[#D3DAE6] rounded' type="text" name="subject" id="subject" />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="message" className='font-medium text-sm sm:text-base'>Write a Message</label>
                        <textarea value={feedback?.message} onChange={(e) => updateFeedback({ message: e.target.value })} className='w-full border border-[#D3DAE6] rounded-xl outline-none cursor-pointer px-4 py-3 bg-inherit' name="message" id="message" cols="30" rows="5"></textarea>
                    </div>
                    <Button onClickFunc={sendFeedback} className='w-full py-3 rounded font-medium'>Submit</Button>
                </form>
                <img src={Blob} alt="" className='hidden sm:block absolute right-4 lg:right-20 top-1/2 -translate-y-1/2' />
            </section>
            <Footer />
        </>
    )
}

export default index