export enum localRoutes {
  loginPage = "/auth/login",
  dashboard = "/",
  officialReleases = "/official-releases",
  noticeToStudents = "/notice-to-students",
  allPosts = "/all-posts",
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
  officialReleases = "/create-post/communique",
  noticeToStudents = "/create-post/avisetudiant",
}

export default localRoutes;
