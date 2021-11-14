import { getUnauthenticatedApi } from "api/apiGenerator";
import { CustomCardOneType } from "components/cards/CustomCardOne";
import { CustomCardTwoType } from "components/cards/CustomCardTwo";

export const getOfficialPressReleases = () =>
  getUnauthenticatedApi<CustomCardOneType[]>()(
    "api/home/official-press-releases",
    {},
  );

export const getNoticeToStudents = () =>
  getUnauthenticatedApi<CustomCardOneType[]>()(
    "api/home/notice-to-students",
    {},
  );

export const getTheyTalkAboutUs = () =>
  getUnauthenticatedApi<CustomCardTwoType[]>()(
    "api/home/they-talk-about-us",
    {},
  );
export const getPartners = () =>
  getUnauthenticatedApi<CustomCardTwoType[]>()("api/home/partners", {});
