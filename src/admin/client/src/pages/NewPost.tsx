import CreatePost from "components/posts/CreatePost";
import Dashboard from "layouts/Dashboard";

const NewPost = (): JSX.Element => {
  return (
    <Dashboard>
      <CreatePost />
    </Dashboard>
  );
};

export default NewPost;
