export enum localRoutes {
  loginPage = "/auth/login",
  dashboard = "/",
  officialReleases = "/official-releases",
  noticeToStudents = "/notice-to-students",
  agenda = "/agenda",
  createPost = "/create-post/:category",
}

export enum authenticationRoutes {
  loginPage = "login",
}

export enum layoutRoutes {
  main = "/*",
  authentication = "/auth/*",
}

export enum createPost {
  officialReleases = "/communique",
  noticeToStudents = "/avisetudiant",
}

export default localRoutes;
