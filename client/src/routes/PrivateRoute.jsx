import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const [isAuth, setIsAuth] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }, [])

  if (isAuth === null) return <div>Loading...</div>

  return isAuth ? <Outlet /> : <Navigate to="/signin" />
}

export default PrivateRoute
