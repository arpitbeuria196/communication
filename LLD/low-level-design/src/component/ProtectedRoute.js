import React from 'react'
import { Outlet,Navigate} from 'react-router-dom';
import Login from './Login';

const ProtectedRoute = () => {
    const isAuthenticated = true;
    
  return (
    <div>
      {isAuthenticated ? <Outlet/>:  <Navigate to="/login" replace />}  
    </div>
  )
}

export default ProtectedRoute
