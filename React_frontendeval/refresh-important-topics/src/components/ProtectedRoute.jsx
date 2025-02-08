import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthenticated = true;
  return (
    <div>{ isAuthenticated ? <Outlet/> : <Navigate to= "/"/>}</div>
  )
}

export default ProtectedRoute