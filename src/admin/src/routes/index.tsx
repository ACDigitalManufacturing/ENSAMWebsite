import { Route, Routes } from "react-router-dom"

import NotAuth from "services/NotAuth"
import RequireAuth from "services/RequireAuth"

// Routes - start
import Authentication from "./Authentication"
import Dashboard from "./Dashboard"
import { layoutRoutes } from "./routes"
// Routes - end

const RootRoutes = function (): JSX.Element {
  return (
    <Routes>
      {/* Routes */}
      <Route
        path={layoutRoutes.authentication}
        element={<NotAuth component={Authentication} />}
      />

      <Route
        path={layoutRoutes.main}
        element={<RequireAuth component={Dashboard} />}
      />
    </Routes>
  )
}

export default RootRoutes
