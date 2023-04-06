import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'
import { AiOutlineClose, AiOutlineWhatsApp, AiOutlineLinkedin } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsReddit, BsPinterest } from 'react-icons/bs'
import useCopy from '/src/hooks/useCopy'

const Share = () => {
    const [copiedText, copy, message] = useCopy()
    const location = window.location.href

  return (
        <div className='flex gap-4 items-center relative'>
            {/* copy link */}
            <button
            className='flex gap-3 items-center text-primary'
            onClick={() => copy(location)}
            >
                <MdContentCopy className='text-lg' />
                {message && 
                    <div className='absolute -bottom-16 left-0 w-full h-full'>
                        <div className='bg-green p-2 text-white rounded-md'>
                            {message}
                        </div>
                    </div>
                }
            </button>
            <a className='flex gap-3 items-center text-primary' href={`https://twitter.com/share?url=${location}`}>
                <FaTwitter className='text-lg' />
            </a>
            <a className='flex gap-3 items-center text-primary relative' href={`https://www.facebook.com/sharer/sharer.php?u=${location}`}>
                <FaFacebookF className='text-lg' />
            </a>
            <a className='flex gap-3 items-center text-primary' href={`https://api.whatsapp.com/send?text=${location}`}>
                <AiOutlineWhatsApp className='text-lg' />
            </a>
            <a className='flex gap-3 items-center text-primary' href={`https://www.linkedin.com/shareArticle?mini=true&url=${location}&title=Claim%20Your%20Name&summary=&source=`}>
                <AiOutlineLinkedin className='text-lg' />
            </a>
        </div>
  )
}

export default Share