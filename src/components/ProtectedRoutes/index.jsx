import React from 'react'
import { Route, useNavigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '/src/hooks/useAuthContext'


const ProtectedRoutes = ({ children }) => {
  const { user } = useAuthContext()
  const location = useLocation()
  // console.log("location", location)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: location } })
    }
  }, [user])

  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoutes