// eslint-disable-next-line
export interface Response<TResponse = any> {
  response?: TResponse;
  errors?: CustomError[];
}

export interface CustomError {
  message: string;
  field?: string;
}

export enum PostCategories {
  NoticeToStudent = 0,
  OfficialReleases = 1,
}
export enum PostStatuses {
  live = 0,
  draft = 1,
  not_saved = 2,
}

export interface PostType {
  id: string;
  title: string;
  content: string;

  cover: string | null;
  documents: string[];

  category: PostCategories;
  status: PostStatuses;
}
export interface DocumentMeta {
  id: string;
  filename: string;
  contentType: string;
}
