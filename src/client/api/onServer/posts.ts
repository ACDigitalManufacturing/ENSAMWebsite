import { getBackendUnauthenticatedApi } from "api/apiGenerator";
import { PostType } from "Types/api";

export const getPostByIdFromBackend = (postId: string) =>
  getBackendUnauthenticatedApi<{ post: PostType }>(`/posts/${postId}`, {});
