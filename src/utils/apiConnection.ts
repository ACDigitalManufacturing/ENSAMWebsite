import { PostType } from "./../../../client/Types/api";
import { getPosts, unsetCoverOfPost } from "./../api/posts";
import { Response } from "../../../client/Types/api";
import { toast } from "react-toastify";

interface ErrorMessage {
  responseMessage: string;
  noResponseMessage: string;
}

// eslint-disable-next-line
export const getApiResponse: (arg0: Response, arg1: ErrorMessage) => any = (
  { response, errors }: Response,
  { responseMessage, noResponseMessage }: ErrorMessage
) => {
  if (errors) {
    return errors.forEach(({ message }) => {
      toast.error(message);
    });
  }

  if (!response) {
    return toast.error(noResponseMessage);
  }

  if (responseMessage !== "") {
    toast.success(responseMessage);
  }
};

// eslint-disable-next-line
export const unassignCover: (id: string, auth_token: string) => any = async (
  id: string,
  auth_token: string
) => {
  const { response, errors } = await unsetCoverOfPost(id, auth_token);

  getApiResponse(
    { response, errors },
    {
      responseMessage: "",
      noResponseMessage: "Something went wrong",
    }
  );
};

export const fetchPosts: (
  auth_token: string,
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>,
  category: number | string
) => void = async (
  auth_token: string,
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>,
  category: number | string
) => {
  const { response, errors } = await getPosts(auth_token, {
    limit: 50,
    category: category,
  });

  getApiResponse(
    { response, errors },
    {
      responseMessage: "",
      noResponseMessage: "Something went wrong",
    }
  );

  if (response?.posts) {
    setPosts(response.posts);
  }
};
