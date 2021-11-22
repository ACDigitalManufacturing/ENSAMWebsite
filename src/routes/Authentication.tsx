import { Route, Navigate, Routes } from "react-router-dom"

//! !
//! ! pages - start
import Login from "pages/auth/Login"
import localRoutes, { authenticationRoutes } from "./routes"
//! ! pages - end
//! !

const Authentication = function (): JSX.Element {
  return (
    <Routes>
      {/* Routes */}
      <Route path={authenticationRoutes.loginPage} element={<Login />} />

      {/* Redirection */}
      <Route path="*" element={<Navigate to={localRoutes.loginPage} />} />
    </Routes>
  )
}

export default Authentication
