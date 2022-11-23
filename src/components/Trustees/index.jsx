import React from 'react'
import Company1 from '../../assets/companies/1.svg'
import Company2 from '../../assets/companies/2.svg'
import Company3 from '../../assets/companies/3.svg'
import Company4 from '../../assets/companies/4.svg'
import Company5 from '../../assets/companies/5.svg'
import Company6 from '../../assets/companies/6.svg'
import Company7 from '../../assets/companies/7.svg'
import Company8 from '../../assets/companies/8.svg'
import Company9 from '../../assets/companies/9.svg'
import Company10 from '../../assets/companies/10.svg'
import Company11 from '../../assets/companies/11.svg'
import Company12 from '../../assets/companies/12.svg'
import Company13 from '../../assets/companies/13.svg'
import Company14 from '../../assets/companies/14.svg'
import Company15 from '../../assets/companies/15.svg'
import Company16 from '../../assets/companies/16.svg'
import Company17 from '../../assets/companies/17.svg'


const index = () => {
  return (
    <div className='flex justify-center items-center gap-6 py-8 flex-col w-full px-14'>
        <div className='flex justify-center items-center gap-x-20 flex-wrap'>            
            <img src={Company1} alt="trusted company 1" />
            <img src={Company2} alt="trusted company 2" />
            <img src={Company3} alt="trusted company 3" />
            <img src={Company1} alt="trusted company 4" />
            <img src={Company1} alt="trusted company 5" />
            <img src={Company1} alt="trusted company 6" />
            <img src={Company7} alt="trusted company 7" />
            <img src={Company8} alt="trusted company 8" />
            <img src={Company9} alt="trusted company 9" />
        </div>
        <div className='flex justify-center items-center gap-x-20 flex-wrap'>
            <img src={Company10} alt="trusted company 10" />
            <img src={Company11} alt="trusted company 11" />
            <img src={Company12} alt="trusted company 12" />
            <img src={Company13} alt="trusted company 13" />
            <img src={Company14} alt="trusted company 14" />
            <img src={Company15} alt="trusted company 15" />
            <img src={Company16} alt="trusted company 16" />
            <img src={Company17} alt="trusted company 17" />
        </div>
    </div>
  )
}

export default index