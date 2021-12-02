import { Route, Navigate, Routes } from "react-router-dom";

//! !
//! ! pages - start
import Index from "pages/Index";
import localRoutes from "./routes";

import NoticeToStudents from "pages/NoticeToStudents";
import Agenda from "pages/Agenda";
import OfficialRealeses from "pages/OfficialRealeses";
//! ! pages - end
//! !

const Dashboard = function (): JSX.Element {
  return (
    <Routes>
      {/* Routes */}
      <Route path={localRoutes.dashboard} element={<Index />} />
      <Route
        path={localRoutes.officialReleases}
        element={<OfficialRealeses />}
      />
      <Route
        path={localRoutes.noticeToStudents}
        element={<NoticeToStudents />}
      />
      <Route path={localRoutes.agenda} element={<Agenda />} />

      {/* Redirection */}
      <Route path="*" element={<Navigate to={localRoutes.dashboard} />} />
    </Routes>
  );
};

export default Dashboard;
