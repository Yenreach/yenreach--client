import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BusinessIcon from '../../assets/businesses/business.svg'

const index = () => {
  return (
    <>
        <Header />
        <div className="tab">
            <div className="business">
                <img src={BusinessIcon} alt="" />
                <span className=''>Business</span>
            </div>
        </div>
    </>
  )
}   

export default index