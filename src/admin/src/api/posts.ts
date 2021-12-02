import { PostCategories, PostType, Response } from "types/api";
import {
  deleteAuthenticatedApi,
  getAuthenticatedApi,
  postAuthenticatedApi,
  putAuthenticatedApi,
} from "./apiGenerator";

//
interface GetPostsResponse {
  posts: PostType[];
}
//
interface GetPostResponse {
  post: PostType;
}
// create post
interface CreatePostRequest {
  category: PostCategories;
}

interface CreatePostResponse {
  success: boolean;
  post_id: string;
}
// update post
interface UpdatePostRequest {
  post: PostType;
}
interface UpdatePostResponse {
  success: boolean;
  post: PostType;
}
// delete post
interface DeletePostResponse {
  success: boolean;
  deletedPost: PostType;
}
// Assign Document to post
interface AssignDocumentResponse {
  success: boolean;
  post: PostType;
}
// unassign document from post
interface UnassignDocumentResponse {
  success: boolean;
  post: PostType;
}

//!
//! get all post - start
export const getPosts = (
  auth_token: string,
  params?: Record<string, string | number>
): Promise<Response<GetPostsResponse>> =>
  getAuthenticatedApi<GetPostsResponse>({
    url: "/posts/all",
    params: params || {},
    auth_token,
  });
//! get all post - end
//!

//??????? POST CONTROLLERS - START
//!
//! get one post by id - start
export const getPostById = (
  post_id: string,
  auth_token: string
): Promise<Response<GetPostResponse>> =>
  getAuthenticatedApi<GetPostResponse>({
    url: `/posts/${post_id}`,
    params: {},
    auth_token,
  });
//! get one post by id - end
//!

//!
//! create post - start
export const createPost = (
  category: PostCategories,
  auth_token: string
): Promise<Response<CreatePostResponse>> =>
  postAuthenticatedApi<CreatePostRequest, CreatePostResponse>({
    url: `/posts`,
    params: {},
    auth_token,
    body: {
      category,
    },
  });
//! create post - end
//!

//!
//! update post - start
export const updatePost = (
  post: PostType,
  auth_token: string
): Promise<Response<UpdatePostResponse>> =>
  putAuthenticatedApi<UpdatePostRequest, UpdatePostResponse>({
    url: `/posts/${post.id}`,
    params: {},
    auth_token,
    body: {
      post,
    },
  });
//! update post - end
//!

//!
//! delete post - start
export const deletePost = (
  post_id: string,
  auth_token: string
): Promise<Response<DeletePostResponse>> =>
  deleteAuthenticatedApi<DeletePostResponse>({
    url: `/posts/${post_id}`,
    params: {},
    auth_token,
  });
//! delete post - end
//!
//??????? POST CONTROLLERS - END

//??????? DOCUMENTS CONTROLLERS - START
//!
//! assign document - start
export const assignDocumentFromPost = (
  document_id: string,
  post_id: string,
  auth_token: string
): Promise<Response<AssignDocumentResponse>> =>
  postAuthenticatedApi<unknown, AssignDocumentResponse>({
    url: `/documents/assign-document/${document_id}/${post_id}`,
    params: {},
    body: {},
    auth_token,
  });
//! assign document - end
//!

//!
//! unassign document - start
export const unassignDocumentFromPost = (
  document_id: string,
  post_id: string,
  auth_token: string
): Promise<Response<UnassignDocumentResponse>> =>
  deleteAuthenticatedApi<UnassignDocumentResponse>({
    url: `/documents/unassign-document/${document_id}/${post_id}`,
    params: {},
    auth_token,
  });
//! unassign document - end
//!
//??????? DOCUMENTS CONTROLLERS - END

//??????? COVER CONTROLLERS - START
//!
//! set cover - start
export const setCoverOfPost = (
  document_id: string,
  post_id: string,
  auth_token: string
): Promise<Response<AssignDocumentResponse>> =>
  postAuthenticatedApi<unknown, AssignDocumentResponse>({
    url: `/documents/set-cover/${document_id}/${post_id}`,
    params: {},
    body: {},
    auth_token,
  });
//! set cover - end
//!

//!
//! unset cover - start
export const unsetCoverOfPost = (
  document_id: string,
  auth_token: string
): Promise<Response<UnassignDocumentResponse>> =>
  deleteAuthenticatedApi<UnassignDocumentResponse>({
    url: `/documents/unset-cover/${document_id}`,
    params: {},
    auth_token,
  });
//! unset cover - end
//!
//??????? COVER CONTROLLERS - END
