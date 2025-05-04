import React, { useEffect } from 'react'
import useImage from '/src/hooks/useImage'
import Computer from '/src/assets/computer.svg'
import usePost from '/src/hooks/usePost'
import {  updateBusinessPhoto } from '../../services/CommonService'
import DefaultImage from './DefaultImage'



const Image = ({ url, name, alt, className, data }) => {
  // const { data, error, isLoading, isSuccess, mutate, status } = usePost({ api: updateBusinessPhoto, showSuccessMessage: true })

  // const { url, downloadImage } = useImage()
  // const imgName = business?.photos?.length > 0 ? business.photos[0]?.filepath?.split("/")[4] : name+".jpg"

  // useEffect(() => {
  //   if (!business?.profileImg && !url) {
  //     downloadImage(imgName)
  //   } else if (!business?.profileImg && url) {
  //     mutate({ verify_string: business?.verify_string, profileImg: url })
  //     console.log("business?.profileImg", url, business?.profileImg)
  //   } else {
  //     console.log("not responding")
  //   }
  // }, [url])
  // console.log("url", url, business)
  return (
    <>
    {url ? 
      <DefaultImage className={className} obj_name={name}>
        <img src={url.replace("mediatoken", "media&token")} className={`absolute w-full h-full ${className}`} />
      </DefaultImage>
      :
      // url ?
      // <img src={url} alt={alt} className={className} />
      // :
      <DefaultImage className={className} obj_name={name} />
    }

    </>
  )
}

export default Image


    {/* {url ? 
      <img src={url} alt={alt} className={className} />
      :
      <img src={Computer} alt="" className='object-cover object-center rounded-xl h-28' />
    } */}