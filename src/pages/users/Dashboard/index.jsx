import React from 'react'
import SideNav from '../../../components/users/SideNav'
import Home from '../../../components/users/Home'
import Business from '../../../components/users/Business'
import CreateBusiness from '../../../components/users/CreateBusiness'


const index = () => {
  return (
    <div className='flex bg-footer-bg'>
      <SideNav />
      {/* <Home /> */}
      {/* <Business /> */}
      <CreateBusiness />
    </div>
  )
}

export default index