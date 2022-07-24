export enum localRoutes {
  home = "/",
  formation = "nos-formations",
  underRecontruction = "/under-reconstruction",
  error404 = "/404",
}

export enum mainNavLinks {}

export enum school {
  presentation = "/presentation",
  directorWord = "/under-reconstruction",
  officialPressReleases = "/under-reconstruction",
  professionalBody = "/under-reconstruction",
  recruitmentAndInternship = "/under-reconstruction",
  internalRegulations = "/under-reconstruction",
  tenders = "/under-reconstruction",
  agenda = "/under-reconstruction",
}

export enum formation {
  index = "nos-formations",
  preparatoryYears = "/under-reconstruction",
  engineeringCycle = "/under-reconstruction",
  universityLicense = "/under-reconstruction",
  universityMaster = "/under-reconstruction",
}

export enum studentLife {
  clubs = "/under-reconstruction",
  noticeToStudents = "/under-reconstruction",
}

export enum research {
  teamsAndLaboratories = "/under-reconstruction",
  doctoralStudies = "/under-reconstruction",
  ensamProjects = "/under-reconstruction",
  incubator = "/under-reconstruction",
  scientificManifestation = "/under-reconstruction",
  scientificPartnerships = "/under-reconstruction",
}

export enum historyOfScience {
  historyOfScience = "/under-reconstruction",
}

export enum companies {
  callsForProjects = "/under-reconstruction",
  internshipAndIntegration = "/under-reconstruction",
}

export enum laureates {
  associationOfENSAMLaureates = "/under-reconstruction",
  graduationCeremonies = "/under-reconstruction",
}

export enum covid {
  informationAndResources = "/under-reconstruction",
}

export enum Webmasters {
  webmasters = "/web-masters",
}

export const postRoute = (postId: string) => `/post/${postId}`;
export const getDocumentDownloadLink = (docId: string) =>
  `/api/document/${docId}`;

export const defaultPostHero = "/school/Restored_web_version.jpg";
