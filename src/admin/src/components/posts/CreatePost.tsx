import { useParams } from "react-router";
import TextEditor from "./createPost/TextEditor";
import styles from "./styles/createPost.module.scss";
import CreatePostHeader from "./createPost/CreatePostHeader";
import UploadDocuments from "./createPost/UploadDocuments";

const CreatePost = (): JSX.Element => {
  const params = useParams();

  return (
    <div className={styles.createPostWrapper}>
      <CreatePostHeader category={params.category} />
      <TextEditor />
      <UploadDocuments />
    </div>
  );
};

export default CreatePost;
