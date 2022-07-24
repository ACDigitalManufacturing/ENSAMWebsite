import Styles from "styles/SinglePost.module.scss";

const SinglePost = () => {
  return (
    <div className={Styles.SinglePostWrapper}>
      <button>Précedent</button>
      <h1>Title</h1>
      <img src="" alt="Thumbnail" />
      <span>Date</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nemo!
      </p>
    </div>
  );
};

export default SinglePost;
