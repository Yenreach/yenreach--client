import React from 'react'
import ProtectedRoutes from '../../ProtectedRoutes'
import SideNav from '../../users/SideNav'

const index = ({ children }) => {
  return (
    <ProtectedRoutes>
      <div className='flex bg-footer-bg overflow-hidden min-h-screen'>
        <SideNav />
        {children}
      </div>
    </ProtectedRoutes>
  )
}

export default index