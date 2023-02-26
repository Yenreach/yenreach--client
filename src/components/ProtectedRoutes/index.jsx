import React from 'react'
import { Route, Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'


const ProtectedRoutes = ({ children }) => {
  const { user } = useAuthContext()
  const location = useLocation()
  // console.log("location", location)

  if (!user) {
    return <Navigate to={{ pathname: '/login', state: { from: location } }} />
  }


  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoutes