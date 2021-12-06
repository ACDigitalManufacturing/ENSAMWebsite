import { getPosts } from "api/posts";
import PostsOverview from "components/posts/PostsOverview";
import Dashboard from "layouts/Dashboard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createPost } from "routes/routes";
import { rootStateType } from "store/reducers";
import { PostCategories, PostType } from "types/api";

const NoticeToStudents = (): JSX.Element => {
  const { auth_token } = useSelector((state: rootStateType) => state.admin);

  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = async () => {
    const { response, errors } = await getPosts(auth_token, {
      limit: 50,
      category: PostCategories.NoticeToStudent,
    });

    if (errors) {
      return errors.forEach(({ message }) => {
        toast.error(message);
      });
    }

    if (!response?.posts) {
      return toast.error("Something Wrong with the file");
    }

    console.log(response.posts);
    setPosts(response.posts);
    // await loadMorePosts();
  };

  const onPostDelete = () => {
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Dashboard>
      <PostsOverview
        onDelete={onPostDelete}
        title="Avis aux étudiants"
        cards={posts}
        category={createPost.noticeToStudents}
      />
    </Dashboard>
  );
};

export default NoticeToStudents;
