import { getUnauthenticatedApi } from "api/apiGenerator";
import { CustomCardOneType } from "components/cards/CustomCardOne";
import { CustomCardTwoType } from "components/cards/CustomCardTwo";

export const getOfficialPressReleases = () =>
  getUnauthenticatedApi<CustomCardOneType[]>()(
    "api/web/official-press-releases",
    {},
  );

export const getNoticeToStudents = () =>
  getUnauthenticatedApi<CustomCardOneType[]>()(
    "api/web/notice-to-students",
    {},
  );

export const getTheyTalkAboutUs = () =>
  getUnauthenticatedApi<CustomCardTwoType[]>()(
    "api/web/they-talk-about-us",
    {},
  );
