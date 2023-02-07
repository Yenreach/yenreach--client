import React from 'react'
import ProtectedRoutes from '../../ProtectedRoutes'
import SideNav from '../../users/SideNav'
import Home from '../../../pages/users/Home'
import Business from '../../../pages/users/Business'
import CreateBusiness from '../../../pages/users/CreateBusiness'
import BusinessCreatedSuccess from '../../../pages/users/BusinessCreatedSuccess'
import EditBusiness from '../../../pages/users/EditBusiness'


const index = ({ children }) => {
  return (
    <ProtectedRoutes>
      <div className='flex bg-footer-bg'>
        <SideNav />
        {children}
      </div>
    </ProtectedRoutes>
  )
}

export default index