import React, { useEffect, useState } from "react";
// react-router-dom
import { useParams } from "react-router-dom";
// custom hooks
import useFetching from "../../hooks/useFetching";
// API
import TodoService from "../../API/TodoService";
// UI
import Loader from "../UI/Loader";
import Navbar from "../UI/Navbar";
// styles
import styles from "./TodoComments.module.scss";

function TodoComments() {
  const params = useParams();
  const [todo, setTodo] = useState({});
  const [comments, setComments] = useState([]);

  // получаем объект с постом
  const [fetchTodoById, isLoading, error] = useFetching(async () => {
    const response = await TodoService.getByID(params.id);
    console.log(response.data);
    setTodo(response.data);
  });

  // получаем объект с комментарием
  const [fetchComments, isCommentLoading, CommentError] = useFetching(
    async () => {
      const response = await TodoService.getCommentsById(params.id);
      console.log(response.data);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchTodoById();
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
          <div className={styles.postText}>{todo.body}</div>
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

export default TodoComments;
