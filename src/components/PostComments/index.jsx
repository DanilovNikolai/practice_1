import React, { useEffect, useState } from "react";
// react-router-dom
import { useParams } from "react-router-dom";
// custom hooks
import useFetching from "../../hooks/useFetching";
// API
import postService from "../../API/PostService";
// UI
import Loader from "../UI/Loader";
import Navbar from "../UI/Navbar";
// styles
import styles from "./PostComments.module.scss";

function PostComments() {
  const params = useParams();
  const [post, setpost] = useState({});
  const [comments, setComments] = useState([]);

  // получаем объект с постом
  const [fetchpostById, isLoading, error] = useFetching(async () => {
    const response = await postService.getByID(params.id);
    console.log(response.data);
    setpost(response.data);
  });

  // получаем объект с комментарием
  const [fetchComments, isCommentLoading, CommentError] = useFetching(
    async () => {
      const response = await postService.getCommentsById(params.id);
      console.log(response.data);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchpostById();
    fetchComments();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.postTitle}>Post # {params.id}</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.postText}>{post.body}</div>
        )}
        <h2 className={styles.commentsTitle}>Comments:</h2>
        {isCommentLoading ? (
          <Loader />
        ) : (
          <div className={styles.commentsContainer}>
            {comments.map((comment) => (
              <div key={comment.id}>
                <h3 className={styles.emailTitle}>{comment.email} </h3>
                <p className={styles.text}>{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default PostComments;
