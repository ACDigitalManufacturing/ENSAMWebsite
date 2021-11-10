import { getUnauthenticatedApi } from "api/apiGenerator";
import { CustomCardOneType } from "components/cards/CustomCardOne";

export const getOfficialPressReleases = () =>
  getUnauthenticatedApi<CustomCardOneType[]>()(
    "api/web/official-press-releases",
    {}
  );

export const getNoticeToStudents = () =>
  getUnauthenticatedApi<CustomCardOneType[]>()(
    "api/web/notice-to-students",
    {}
  );
