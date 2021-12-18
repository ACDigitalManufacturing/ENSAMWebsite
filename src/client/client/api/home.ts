import { getBackendUnauthenticatedApi } from "api/apiGenerator";
import { CustomCardTwoType } from "components/cards/CustomCardTwo";
import { PostType } from "Types/api";

export const getOfficialPressReleases = () =>
  getBackendUnauthenticatedApi<{
    posts: PostType[];
  }>("/home/official-press-releases", {});

export const getNoticeToStudents = () =>
  getBackendUnauthenticatedApi<{ posts: PostType[] }>(
    "/home/notice-to-students",
    {}
  );

export const getTheyTalkAboutUs = () =>
  getBackendUnauthenticatedApi<CustomCardTwoType[]>(
    "/home/they-talk-about-us",
    {}
  );
export const getPartners = () =>
  getBackendUnauthenticatedApi<CustomCardTwoType[]>("/home/partners", {});
