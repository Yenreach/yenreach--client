import React from 'react'
import { Route, useNavigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '/src/hooks/useAuthContext'


const ProtectedRoutes = ({ children }) => {
  const { user } = useAuthContext()
  const location = useLocation()
  console.log("location", location)
  const navigate = useNavigate()

  if (!user) {
    return navigate('/login', { state: { from: location } })
    // return <Navigate to={{ pathname: '/login', state: { from: location } }} />
  }

  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoutes