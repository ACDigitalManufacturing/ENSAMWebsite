import styles from "./styles/createPostHeader.module.scss";
import UploadCover from "./UploadCover";
import { PostType } from "types/api";

interface Props {
  category: string | undefined;
  post: PostType;
  setPost: React.Dispatch<React.SetStateAction<PostType>>;
  onPublish: () => void;
  onDraft: () => void;
  onCancel: () => void;
}

const CreatePostHeader = ({
  category,
  post,
  setPost,
  onPublish,
  onDraft,
  onCancel,
}: Props): JSX.Element => {
  const onSuccess = (savedFile: PostType) => {
    setPost({ ...post, cover: savedFile.cover });
  };

  const handleTitleChange = (title: string) => {
    setPost({ ...post, title });
  };

  return (
    <div className={styles.createPostHeader}>
      <UploadCover
        {...{
          onSuccess,
          post,
          setPost,
        }}
      />

      <div className={styles.createPostData}>
        <input
          type="text"
          placeholder="Title"
          required
          value={post.title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
        <input
          type="text"
          defaultValue={category}
          placeholder="Category"
          required
        />
        <div className={styles.createPostActions}>
          <button onClick={onPublish} className={styles.publish}>
            Publier
          </button>
          <button onClick={onDraft} className={styles.draft}>
            Bruillion
          </button>
          <button onClick={onCancel} className={styles.cancel}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostHeader;
