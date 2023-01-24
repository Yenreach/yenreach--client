import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLocation } from 'react-router-dom'


const ProtectedRoutes = ({ children }) => {
  const { user } = useAuthContext()
  const location = useLocation()

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