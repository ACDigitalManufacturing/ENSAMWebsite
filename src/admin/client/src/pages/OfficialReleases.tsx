import PostsOverview from "components/posts/PostsOverview";
import Dashboard from "layouts/Dashboard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { createPost } from "routes/routes";
import { rootStateType } from "store/reducers";
import { PostCategories, PostType } from "types/api";
import { fetchPosts } from "utils/apiConnection";

const OfficialReleases = (): JSX.Element => {
  const { auth_token } = useSelector((state: rootStateType) => state.admin);

  const [posts, setPosts] = useState<PostType[]>([]);

  // const fetchPosts = async () => {
  //   const { response, errors } = await getPosts(auth_token, {
  //     limit: 50,
  //     category: PostCategories.OfficialReleases,
  //   });

  //   if (errors) {
  //     return errors.forEach(({ message }) => {
  //       toast.error(message);
  //     });
  //   }

  //   if (!response?.posts) {
  //     return toast.error("Something Wrong with the file");
  //   }

  //   console.log(response.posts);
  //   setPosts(response.posts);
  //   // await loadMorePosts();
  // };

  // const onPostDelete = () => {
  //   fetchPosts();
  // };

  // const loadMorePosts = async () => {
  //   const { response, errors } = await getPosts(auth_token, {
  //     skip: posts.length,
  //     limit:50
  //   });

  //   if (errors) {
  //     return errors.forEach(({ message }) => {
  //       toast.error(message);
  //     });
  //   }

  //   if (!response?.posts) {
  //     return toast.error("Something Wrong with the file");
  //   }

  //   console.log(response.posts);
  //   setPosts((prev) => [...prev, ...response.posts]);
  // };

  const onPostDelete = () => {
    fetchPosts(auth_token, setPosts, PostCategories.OfficialReleases);
  };

  useEffect(() => {
    fetchPosts(auth_token, setPosts, PostCategories.OfficialReleases);
  }, []);

  return (
    <Dashboard>
      <PostsOverview
        onDelete={onPostDelete}
        title="Communiqués Officiels"
        posts={posts}
        category={createPost.officialReleases}
      />
    </Dashboard>
  );
};

export default OfficialReleases;

// const dummyData: Content[] = [
//   {
//     title: "Lorem ipsum dolor sit amet consectetur",
//     date: 1631110890578,
//     image: "/images/Restored_web_version.jpg",
//     category: "communiqué",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet consectetur",
//     date: 1631110890578,
//     image: "/images/Restored_web_version.jpg",
//     category: "communiqué",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet consectetur",
//     date: 1631110890578,
//     image: "/images/Restored_web_version.jpg",
//     category: "communiqué",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet consectetur",
//     date: 1631110890578,
//     image: "/images/Restored_web_version.jpg",
//     category: "communiqué",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet consectetur",
//     date: 1631110890578,
//     image: "/images/Restored_web_version.jpg",
//     category: "communiqué",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet consectetur",
//     date: 1631110890578,
//     image: "/images/Restored_web_version.jpg",
//     category: "communiqué",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet consectetur",
//     date: 1631110890578,
//     image: "/images/Restored_web_version.jpg",
//     category: "communiqué",
//   },
// ];
