import React, { useEffect } from 'react'


const Image = ({ url, name, alt, className, data }) => {


  return (
    <>
      {url ? 
         <div className={`${className} relative w-full h-full flex justify-center items-center text-wrap text-uppercase text-4xl rounded-t-2xl`}>
          <img src={url.replace("mediatoken", "media&token")} alt={alt} className={`absolute z-[2] w-full h-full rounded-t-2xl`} />
          <div className={`absolute bg-gray animate-pulse z-0 w-full h-full ${className}`}>
          </div>
        </div>
        :
        <div className={`${className} rounded-t-2xl relative w-full h-full flex justify-center items-center text-wrap text-uppercase text-4xl`}>
          <img src={''} alt={alt} className={`absolute z-[2] w-full h-full rounded-t-2xl bg-gray`} />
        </div>
      }
    </>
  )
}

export default Image
