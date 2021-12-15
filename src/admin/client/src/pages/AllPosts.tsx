import PostsOverview from "components/posts/PostsOverview";
import Dashboard from "layouts/Dashboard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { rootStateType } from "store/reducers";
import { PostType } from "types/api";
import { fetchPosts } from "utils/apiConnection";

const AllPosts = (): JSX.Element => {
  const { auth_token } = useSelector((state: rootStateType) => state.admin);

  const [posts, setPosts] = useState<PostType[]>([]);

  // TODO Work on categories and the logic for this section
  const onPostDelete = () => {
    fetchPosts(auth_token, setPosts, "");
  };

  useEffect(() => {
    fetchPosts(auth_token, setPosts, "");
  }, []);
  return (
    <Dashboard>
      <PostsOverview
        onDelete={onPostDelete}
        title="Toutes les publications"
        posts={posts}
        category=""
      />
    </Dashboard>
  );
};

export default AllPosts;
