import { getUnauthenticatedApi } from "api/apiGenerator";
import { CustomCardOneType } from "components/cards/CustomCardOne";

export const getOfficialPressReleases = getUnauthenticatedApi<
  CustomCardOneType[]
>()("api/web/get/", {});
