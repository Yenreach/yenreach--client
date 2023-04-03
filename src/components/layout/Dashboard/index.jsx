import React from 'react'
import ProtectedRoutes from '../../ProtectedRoutes'
import SideNav from '../../users/SideNav'
import { useParams } from 'react-router-dom'


const index = ({ children }) => {
  const { id } = useParams()
  // console.log("dashboard business id", id)
  return (
    <ProtectedRoutes>
      <div className='flex bg-footer-bg overflow-hidden h-screen w-full'>
        <SideNav id={id} />
        {children}
      </div>
    </ProtectedRoutes>
  )
}

export default index