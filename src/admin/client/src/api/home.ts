// import { getUnauthenticatedApi } from "api/apiGenerator";
import { Admin } from "types/Admin";
import { Response } from "types/api";

interface Props {
  username: string;
  password: string;
}
interface LoginResponse {
  auth_token: string;
  admin: Admin;
}

export const LoginAPI = async ({
  username,
  password,
}: Props): Promise<Response<LoginResponse>> => {
  await new Promise((res) => setTimeout(res, 500));
  if (username !== "admin" && password !== "admin") {
    return {
      errors: [{ message: "invalid credential" }],
    };
  }
  return {
    response: {
      auth_token: "",
      admin: {
        username,
        email: "admin@ensam-casa.ma",
      },
    },
  };
};
