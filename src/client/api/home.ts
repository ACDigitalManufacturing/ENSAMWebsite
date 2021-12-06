import { getUnauthenticatedApi } from "api/apiGenerator";
import { CustomCardTwoType } from "components/cards/CustomCardTwo";
import { PostType } from "Types/api";

export const getOfficialPressReleases = () =>
  getUnauthenticatedApi<{
    posts: PostType[];
  }>("api/home/official-press-releases", {});

export const getNoticeToStudents = () =>
  getUnauthenticatedApi<{ posts: PostType[] }>(
    "api/home/notice-to-students",
    {}
  );

export const getTheyTalkAboutUs = () =>
  getUnauthenticatedApi<CustomCardTwoType[]>("api/home/they-talk-about-us", {});
export const getPartners = () =>
  getUnauthenticatedApi<CustomCardTwoType[]>("api/home/partners", {});
