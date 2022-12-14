import React from 'react'
import SideNav from '../../../components/users/SideNav'
import Home from '../../../components/users/Home'
import Business from '../../../components/users/Business'
import CreateBusiness from '../../../components/users/CreateBusiness'
import BusinessCreatedSuccess from '../../../components/users/BusinessCreatedSuccess'
import EditBusiness from '../../../components/users/EditBusiness'


const index = ({ children }) => {
  return (
    <div className='flex bg-footer-bg'>
      <SideNav />
      {children}
    </div>
  )
}

export default index