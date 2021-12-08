import { useLocation, useNavigate, useParams } from "react-router";
import TextEditor from "./createPost/TextEditor";
import styles from "./styles/createPost.module.scss";
import CreatePostHeader from "./createPost/CreatePostHeader";
import UploadDocuments from "./createPost/UploadDocuments";
import { useEffect, useState } from "react";
import { rootStateType } from "store/reducers";
import { createPost, deletePost, getPostById, updatePost } from "api/posts";
import { useSelector } from "react-redux";
import { getQueryParams } from "utils/urlParser";
import { Categories, PostCategories, PostStatuses, PostType } from "types/api";
import { emptyPost } from "utils/posts";
import localRoutes from "routes/routes";
import { getApiResponse, unassignCover } from "utils/apiConnection";

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
  const navigateToOverview = () => {
    navigate(
      category == Categories.OfficialReleases
        ? localRoutes.officialReleases
        : localRoutes.noticeToStudents
    );
  };
  //! Function - END

  //! Function - START
  const handleCreatePost = async () => {
    const { response, errors } = await createPost(postCategory, auth_token);

    getApiResponse(
      { response, errors },
      { responseMessage: "", noResponseMessage: "Something went wrong" }
    );

    if (response?.post) {
      navigate(`${pathname}?postId=${response.post.id}`);
      setPost({ ...post, id: response.post.id });
    }
  };
  //! Function - END

  //! Function - START
  const intializePost = async () => {
    const { response, errors } = await getPostById(postId, auth_token);

    getApiResponse(
      { response, errors },
      { responseMessage: "", noResponseMessage: "Something went wrong" }
    );

    if (response?.post) {
      setPost(response.post);
    }
  };
  //! Function - END

  //? posts controllers
  //! Function - START

  const onPublish = async () => {
    // save post as live
    const { response, errors } = await updatePost(
      { ...post, status: PostStatuses.live },
      auth_token
    );

    getApiResponse(
      { response, errors },
      {
        responseMessage: "Post has been published successfully",
        noResponseMessage: "Something went wrong",
      }
    );

    if (response?.post) {
      navigateToOverview();
    }
  };

  //! Function - END

  //! Function - START

  const onDraft = async () => {
    const { response, errors } = await updatePost(
      { ...post, status: PostStatuses.draft },
      auth_token
    );

    getApiResponse(
      { response, errors },
      {
        responseMessage: "Post saved as a draft",
        noResponseMessage: "Something went wrong",
      }
    );

    if (response?.post) {
      navigateToOverview();
    }
  };

  //! Function - START
  const onCancel = async () => {
    if (post.status === PostStatuses.not_saved) {
      if (post.cover) {
        unassignCover(post.id, auth_token);
      }
      const { response, errors } = await deletePost(post.id, auth_token);

      getApiResponse(
        { response, errors },
        {
          responseMessage: "Post has been deleted Successfully",
          noResponseMessage: "Something went wrong",
        }
      );
    }
    navigateToOverview();
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
