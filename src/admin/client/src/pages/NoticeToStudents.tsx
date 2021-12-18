import PostsOverview from "components/posts/PostsOverview";
import Dashboard from "layouts/Dashboard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { createPost } from "routes/routes";
import { rootStateType } from "store/reducers";
import { PostCategories, PostType } from "types/api";
import { fetchPosts } from "utils/apiConnection";

const NoticeToStudents = (): JSX.Element => {
  const { auth_token } = useSelector((state: rootStateType) => state.admin);

  const [posts, setPosts] = useState<PostType[]>([]);

  // const fetchPosts = async () => {
  //   const { response, errors } = await getPosts(auth_token, {
  //     limit: 50,
  //     category: PostCategories.NoticeToStudent,
  //   });

  //   getApiResponse(
  //     { response, errors },
  //     {
  //       responseMessage: "Post has been deleted Successfully",
  //       noResponseMessage: "Something went wrong",
  //     }
  //   );

  //   if (response?.posts) {
  //     setPosts(response.posts);
  //   }
  // };

  const onPostDelete = () => {
    fetchPosts(auth_token, setPosts, PostCategories.NoticeToStudent);
  };

  useEffect(() => {
    fetchPosts(auth_token, setPosts, PostCategories.NoticeToStudent);
  }, []);

  return (
    <Dashboard>
      <PostsOverview
        onDelete={onPostDelete}
        title="Avis aux étudiants"
        posts={posts}
        category={createPost.noticeToStudents}
      />
    </Dashboard>
  );
};

export default NoticeToStudents;
