export enum localRoutes {
  loginPage = "/auth/login",
  dashboard = "/",
  officialReleases = "/official-releases",
  noticeToStudents = "/notice-to-students",
  agenda = "/agenda",
}

export enum authenticationRoutes {
  loginPage = "login",
}

export enum layoutRoutes {
  main = "/*",
  authentication = "/auth/*",
}

export default localRoutes;
