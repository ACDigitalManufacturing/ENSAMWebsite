import { NextPage } from "next";
import Router, { useRouter } from "next/router";
import Main from "layouts/Main";

import { DocumentMeta, PostType } from "Types/api";

import { getPostByIdFromBackend } from "api/onServer/posts";

import left from "assets/icons/arrows/left";
import document_icon from "assets/icons/document";

import styles from "styles/pages/post/singlePost.module.scss";
import { postToJson } from "utils/Posts";
import { defaultPostHero } from "routes/routes";
import { useEffect, useState } from "react";
import { getDocumentMeta } from "api/onServer/documents";
import calendar from "assets/icons/calendar";

interface Props {
  post: PostType;
}

const SinglePost: NextPage<any> = ({ post }: Props) => {
  const [documents, setDocuments] = useState<DocumentMeta[]>([]);
  const router = useRouter();

  const fetchDocumentsMeta = async () => {
    const newDocuments = [];

    for (const key in post.documents) {
      const documentId = post.documents[key];
      const { response, errors } = await getDocumentMeta(documentId);
      if (errors || !response) {
        continue;
      }
      newDocuments.push(response.document);
    }

    setDocuments(newDocuments);
  };

  useEffect(() => {
    fetchDocumentsMeta();
  }, []);

  return (
    <Main>
      <>
        <span className={styles.navPadding}></span>
        <div className={styles.singlePostPageWrapper}>
          <button className={styles.backButton} onClick={router.back}>
            {left}Précedent
          </button>

          <div className={styles.heroSection}>
            <h1>{post.title}</h1>
            <h4>
              {calendar}
              {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h4>
            <div className={styles.imageWrapper}>
              <img src={post.cover || defaultPostHero} alt="hero image" />
            </div>
          </div>

          <main dangerouslySetInnerHTML={{ __html: post.content }}></main>

          <div className={styles.filesWrapper}>
            {documents.map((document, key) => (
              <a key={key} href={document.link} download={true}>
                <span className={styles.iconWrapper}>{document_icon}</span>
                <span className={styles.filenameWrapper}>
                  <span className={styles.pdfIcon}>PDF</span>
                  {document.filename.length > 15
                    ? document.filename.slice(0, 13) + "..."
                    : document.filename}
                </span>
              </a>
            ))}
          </div>
        </div>
      </>
    </Main>
  );
};

SinglePost.getInitialProps = async ({ query, res }) => {
  try {
    const { postId } = query;

    if (!postId || postId instanceof Array) {
      return res
        ? res.writeHead(307, { Location: "/" }).end()
        : Router.replace("/");
    }

    const { response, errors } = await getPostByIdFromBackend(postId);

    if (errors || !response || !response.post) {
      return res
        ? res.writeHead(307, { Location: "/" }).end()
        : Router.replace("/");
    }

    return { post: postToJson(response.post) };
  } catch (error) {
    return res
      ? res.writeHead(307, { Location: "/" }).end()
      : Router.replace("/");
  }
};

export default SinglePost;
