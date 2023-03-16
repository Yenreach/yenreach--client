import React from 'react'
import useImage from '/src/hooks/useImage'
import Computer from '/src/assets/computer.svg'


const Image = ({ name, alt, className, business }) => {
  const { url, downloadImage } = useImage()
  const imgName = business?.photos?.length > 0 ? business.photos[0]?.filepath?.split("/")[4] : name+".jpg"
  downloadImage(imgName)
  // console.log("url", url, imgName)
  return (
    <>
    {url ? 
      <img src={url} alt={alt} className={className} />
      :
      <img src={Computer} alt="" className='object-cover object-center rounded-xl h-28' />
    }
    </>
  )
}

export default Image