import PostsOverview from "components/posts/PostsOverview";
import Dashboard from "layouts/Dashboard";
import { createPost } from "routes/routes";
import { Content } from "types/Content";

const OfficialReleases = (): JSX.Element => {
  return (
    <Dashboard>
      <PostsOverview
        title="Communiqués Officiels"
        cards={dummyData}
        category={createPost.officialReleases}
      />
    </Dashboard>
  );
};

export default OfficialReleases;

const dummyData: Content[] = [
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    date: 1631110890578,
    image: "/images/Restored_web_version.jpg",
    category: "communiqué",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    date: 1631110890578,
    image: "/images/Restored_web_version.jpg",
    category: "communiqué",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    date: 1631110890578,
    image: "/images/Restored_web_version.jpg",
    category: "communiqué",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    date: 1631110890578,
    image: "/images/Restored_web_version.jpg",
    category: "communiqué",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    date: 1631110890578,
    image: "/images/Restored_web_version.jpg",
    category: "communiqué",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    date: 1631110890578,
    image: "/images/Restored_web_version.jpg",
    category: "communiqué",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    date: 1631110890578,
    image: "/images/Restored_web_version.jpg",
    category: "communiqué",
  },
];
