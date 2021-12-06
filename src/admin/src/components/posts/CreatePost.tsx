import { useLocation, useNavigate, useParams } from "react-router";
import TextEditor from "./createPost/TextEditor";
import styles from "./styles/createPost.module.scss";
import CreatePostHeader from "./createPost/CreatePostHeader";
import UploadDocuments from "./createPost/UploadDocuments";
import { useEffect, useState } from "react";
import { rootStateType } from "store/reducers";
import {
  createPost,
  deletePost,
  getPostById,
  unsetCoverOfPost,
  updatePost,
} from "api/posts";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getQueryParams } from "utils/urlParser";
import { Categories, PostCategories, PostStatuses, PostType } from "types/api";
import { emptyPost } from "utils/posts";
import localRoutes from "routes/routes";

const CreatePost = (): JSX.Element => {
  const { category } = useParams();

  const postCategory =
    category === Categories.OfficialReleases
      ? PostCategories.OfficialReleases
      : PostCategories.NoticeToStudent;

  const { postId } = getQueryParams();

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const { auth_token } = useSelector((state: rootStateType) => state.admin);

  const [post, setPost] = useState<PostType>(emptyPost(postCategory));

  //! Function - START
  const handleCreatePost = async () => {
    const { response, errors } = await createPost(postCategory, auth_token);
    if (errors) {
      return errors.forEach(({ message }) => {
        toast.error(message);
      });
    }

    if (!response?.post) {
      return toast.error("Something went wrong");
    }

    navigate(`${pathname}?postId=${response.post.id}`);
    setPost({ ...post, id: response.post.id });
  };
  //! Function - END

  //! Function - START
  const intializePost = async () => {
    const { response, errors } = await getPostById(postId, auth_token);

    if (errors) {
      return errors.forEach(({ message }) => {
        toast.error(message);
      });
    }

    if (!response?.post) {
      return toast.error("Something went wrong");
    }

    setPost(response.post);
  };
  //! Function - END

  // posts controllers

  const onPublish = async () => {
    // save post as live

    const { response, errors } = await updatePost(
      { ...post, status: PostStatuses.live },
      auth_token
    );

    if (errors) {
      return errors.forEach(({ message }) => {
        toast.error(message);
      });
    }

    if (!response?.post) {
      return toast.error("Something Went Wrong");
    }

    console.log(response.post);
    toast.success("Post has been published successfully");

    navigate(
      category == Categories.OfficialReleases
        ? localRoutes.officialReleases
        : localRoutes.noticeToStudents
    );
  };

  const onDraft = async () => {
    const { response, errors } = await updatePost(
      { ...post, status: PostStatuses.draft },
      auth_token
    );

    if (errors) {
      return errors.forEach(({ message }) => {
        toast.error(message);
      });
    }

    if (!response?.post) {
      return toast.error("Something Went Wrong");
    }

    console.log(response.post);
    toast.success("Post saved as a draft");

    navigate(
      category == Categories.OfficialReleases
        ? localRoutes.officialReleases
        : localRoutes.noticeToStudents
    );
  };

  //! Function - START
  const onCancel = async () => {
    if (post.status === PostStatuses.not_saved) {
      if (post.cover) {
        const { response: responseUnsetCover, errors: errorsUnsetCover } =
          await unsetCoverOfPost(post.id, auth_token);
        if (errorsUnsetCover) {
          return errorsUnsetCover.forEach(({ message }) => {
            toast.error(message);
          });
        }

        if (!responseUnsetCover?.post) {
          return toast.error("Something Wrong");
        }
      }
      const { response, errors } = await deletePost(post.id, auth_token);

      if (errors) {
        return errors.forEach(({ message }) => {
          toast.error(message);
        });
      }

      if (!response?.deletedPost) {
        return toast.error("Something Wrong");
      }
    }
    navigate(
      category == Categories.OfficialReleases
        ? localRoutes.officialReleases
        : localRoutes.noticeToStudents
    );
  };

  //! Function - END

  useEffect(() => {
    if (!postId) {
      handleCreatePost();
    } else {
      intializePost();
    }
  }, []);

  return (
    <div className={styles.createPostWrapper}>
      <CreatePostHeader
        {...{
          //! params
          category,
          post,
          setPost,

          //! controllers
          onPublish,
          onDraft,
          onCancel,
        }}
      />
      <TextEditor setPost={setPost} post={post} />
      <UploadDocuments
        {...{
          //! params
          post,
          setPost,
        }}
      />
    </div>
  );
};

export default CreatePost;
