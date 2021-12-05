import styles from "./styles/createPostHeader.module.scss";
import UploadCover from "./UploadCover";
import { useState } from "react";

interface Props {
  category: string | undefined;
}

const CreatePostHeader = ({ category }: Props): JSX.Element => {
  const [file, setFile] = useState([]);
  console.log(file);

  // eslint-disable-next-line
  const onSuccess = (savedFile: any) => {
    setFile(savedFile);
  };

  return (
    <div className={styles.createPostHeader}>
      <UploadCover onSuccess={onSuccess} />

      <div className={styles.createPostData}>
        <input type="text" placeholder="Title" required />
        <input
          type="text"
          defaultValue={category}
          placeholder="category"
          required
        />
        <div className={styles.createPostActions}>
          <button>Publier</button>
          <button>Annuler</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostHeader;
