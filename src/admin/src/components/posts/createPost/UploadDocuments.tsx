import { createDocument } from "api/documents";
// import { getHost } from "api/getHost";
import { assignDocumentFromPost, unassignDocumentFromPost } from "api/posts";
import close from "assets/icons/close";
import upload from "assets/icons/upload";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { rootStateType } from "store/reducers";
import { PostType } from "types/api";

import styles from "./styles/uploadDocument.module.scss";

interface Params {
  post: PostType;
  setPost: React.Dispatch<React.SetStateAction<PostType>>;
}

const UploadDocuments = ({ post, setPost }: Params): JSX.Element => {
  const { auth_token } = useSelector((state: rootStateType) => state.admin);
  const [file, setFile] = useState<File | null>(null);

  // console.log(file);
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
    const data = new FormData();

    if (!file) {
      return;
    }

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

    const { response: assignDocumentResponse, errors: assignDocumentError } =
      await assignDocumentFromPost(response?.document.id, post.id, auth_token);

    if (assignDocumentError) {
      return assignDocumentError.forEach(({ message }) => {
        toast.error(message);
      });
    }

    if (!assignDocumentResponse?.post) {
      return toast.error("Something Wrong with the file");
    }
    toast.success("File Uploaded Successfully");
    console.log(assignDocumentResponse.post);

    setPost({ ...post, documents: assignDocumentResponse.post.documents });
    setFile(null);
  };
  //! Function -- END

  //! Function -- START
  // const getDocumentName = (id: string) => {
  //   if (!post.documents) {
  //     return;
  //   }
  //      `${getHost()}/documents/${id}`;

  // };
  //! Function -- END

  //! Function -- START
  const handleDelete = async (id: string) => {
    const { response, errors } = await unassignDocumentFromPost(
      id,
      post.id,
      auth_token
    );

    if (errors) {
      return errors.forEach(({ message }) => {
        toast.error(message);
      });
    }

    if (!response?.post) {
      return toast.error("Something Wrong with the file");
    }

    setPost(response.post);
  };
  //! Function -- END

  return (
    <div className={styles.uploadDocumentWrapper}>
      <div className={styles.header}>
        <h2>Documents</h2>
        <div className={styles.formGroup}>
          <label htmlFor="fileInput" className={styles.fileUpload}>
            {upload} Choisir un fichier PDF
          </label>
          <input
            id="fileInput"
            accept="application/pdf"
            type="file"
            onChange={onInputChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className={styles.uploadedDocuments}>
        {file ? (
          <div className={styles.card}>
            {file.name}
            <button onClick={onSubmit} className={styles.addDocument}>
              Add Document
            </button>
          </div>
        ) : null}
        {post?.documents.map((document) => (
          <div key={document} className={styles.card}>
            <div>{document}</div>
            <button onClick={() => handleDelete(document)}>{close}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadDocuments;
