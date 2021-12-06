import { PostCategories, PostStatuses, PostType } from "types/api";

export const emptyPost = (category: PostCategories): PostType => ({
  id: "",
  title: "",
  content: "",

  cover: "",
  documents: [],

  category,
  status: PostStatuses.not_saved,

  createdAt: new Date().toLocaleDateString(),
  updatedAt: new Date().toLocaleDateString(),
});
