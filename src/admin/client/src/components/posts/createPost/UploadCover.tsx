import { createDocument } from "api/documents";
import { useState } from "react";
import { useSelector } from "react-redux";
import { rootStateType } from "store/reducers";
import { AllowedTypesForCover, PostType } from "types/api";
import { toast } from "react-toastify";
import { setCoverOfPost, unsetCoverOfPost } from "api/posts";
import { getHost } from "api/getHost";

import styles from "./styles/uploadCover.module.scss";
import image from "assets/icons/image";
import upload from "assets/icons/upload";
import close from "assets/icons/close";

interface Params {
  post: PostType;
  onSuccess: (newPost: PostType) => void;
  setPost: React.Dispatch<React.SetStateAction<PostType>>;
}

const UploadCover = ({ onSuccess, post, setPost }: Params): JSX.Element => {
  const { auth_token } = useSelector((state: rootStateType) => state.admin);

  const allowedTypesForCover = Object.values(AllowedTypesForCover).join();

  const [file, setFile] = useState<File | null>(null);

  //! Function -- START
  // eslint-disable-next-line
  const onInputChange = async (e: any) => {
    if (!e.target.files.length) {
      return;
    }
    const file = e.target.files[0];

    setFile(file);
  };

  //! Function -- END

  //! Function -- START
  const onSubmit = async () => {
    if (!file) {
      return;
    }
    const data = new FormData();

    data.append("document", file);

    const { response, errors } = await createDocument(data, auth_token);

    if (errors) {
      return errors.forEach(({ message }) => {
        toast.error(message);
      });
    }

    if (!response?.document) {
      return toast.error("Something Wrong with the file");
    }

    const { response: setCoverResponse, errors: setCoverErrors } =
      await setCoverOfPost(response?.document.id, post.id, auth_token);

    if (setCoverErrors) {
      return setCoverErrors.forEach(({ message }) => {
        toast.error(message);
      });
    }
    if (!setCoverResponse?.success) {
      return toast.error("Server not responding correctly");
    }

    console.log(setCoverResponse);

    toast.success("Image Uploaded Successfully");
    onSuccess(setCoverResponse.post);
  };
  //! Function -- END

  //! Function -- START
  const handleUnsetCover = async (id: string | null) => {
    if (!id) {
      return;
    }

    const { response, errors } = await unsetCoverOfPost(id, auth_token);

    if (errors) {
      return errors.forEach(({ message }) => {
        toast.error(message);
      });
    }

    if (!response?.post) {
      return toast.error("Something Wrong with the file");
    }

    console.log(response.post);
    setFile(null);
    setPost({ ...post, cover: null });
  };
  //! Function -- END

  //! Function -- START
  const getPreviewSource = () => {
    if (file) {
      return URL.createObjectURL(file);
    } else if (!post.cover) {
      return "";
    } else {
      return `${getHost()}/documents/${post.cover}`;
    }
  };
  //! Function -- END

  return (
    <div className={styles.imageUploadContainer}>
      {file && !post.cover ? (
        <div className={styles.imageUploadWrapper}>
          <img src={getPreviewSource()} alt="" />
          <button onClick={onSubmit} className={styles.setCover}>
            Choisir cette image
          </button>
          <button className={styles.deleteCover} onClick={() => setFile(null)}>
            {close}
          </button>
        </div>
      ) : post.cover ? (
        <div className={styles.imageUploadWrapper}>
          <img src={getPreviewSource()} alt="" />
          <button
            className={styles.deleteCover}
            onClick={() => handleUnsetCover(post.id)}
          >
            {close}
          </button>
        </div>
      ) : (
        <div className={styles.formGroup}>
          <label htmlFor="fileInput" className={styles.imageUpload}>
            {image}
            <span>{upload} Choisir une image</span>
          </label>
          <input
            type="file"
            accept={allowedTypesForCover}
            id="fileInput"
            style={{ display: "none" }}
            onChange={onInputChange}
          />
        </div>
      )}

      {/* {post?.cover ? (
        <div>
          <button onClick={() => handleUnsetCover(post.id)}>
            Delete Cover
          </button>
        </div>
      ) : null} */}
    </div>
  );
};

export default UploadCover;
