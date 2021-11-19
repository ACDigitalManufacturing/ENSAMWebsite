import { Route, Navigate, Routes } from "react-router-dom";

//!!
//!! pages - start
import Index from "pages/Index";
import localRoutes from "./routes";
//!! pages - end
//!!

function Dashboard(): JSX.Element {
  return (
    <Routes>
      {/* Routes */}
      <Route path={localRoutes.dashboard} element={<Index />} />

      {/* Redirection */}
      <Route path="*" element={<Navigate to={localRoutes.dashboard} />} />
    </Routes>
  );
}

export default Dashboard;
