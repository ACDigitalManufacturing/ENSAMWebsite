import { Route, Navigate, Routes } from "react-router-dom";

//! !
//! ! pages - start
import Index from "pages/Index";
import localRoutes from "./routes";

import NoticeToStudents from "pages/NoticeToStudents";
import Agenda from "pages/Agenda";
import OfficialReleases from "pages/OfficialReleases";
import NewPost from "pages/NewPost";
import AllPosts from "pages/AllPosts";

//! ! pages - end
//! !

const Dashboard = function (): JSX.Element {
  return (
    <Routes>
      {/* Routes */}
      <Route path={localRoutes.dashboard} element={<Index />} />
      <Route
        path={localRoutes.officialReleases}
        element={<OfficialReleases />}
      />
      <Route
        path={localRoutes.noticeToStudents}
        element={<NoticeToStudents />}
      />
      <Route path={localRoutes.allPosts} element={<AllPosts />} />
      <Route path={localRoutes.agenda} element={<Agenda />} />
      <Route path={localRoutes.createPost} element={<NewPost />} />

      {/* Redirection */}
      <Route path="*" element={<Navigate to={localRoutes.dashboard} />} />
    </Routes>
  );
};

export default Dashboard;
