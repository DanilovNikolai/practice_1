import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../../hooks/useFetching";
import TodoService from "../../API/TodoService";
import Loader from "../UI/Loader";
import Navbar from "../UI/Navbar";

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
      <h1 style={{ color: "teal" }}>Post # {params.id}</h1>
      {isLoading ? <Loader /> : <div>{todo.body}</div>}
      <h2 style={{ color: "teal" }}>Comments:</h2>
      {isCommentLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id}>
              <h3 style={{ color: "yellowgreen" }}>{comment.email}</h3>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default TodoComments;
