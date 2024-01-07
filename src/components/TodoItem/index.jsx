import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

export default function TodoItem({ todo, onTodoRemove }) {
  const navigate = useNavigate();

  return (
    <li className="todo-item">
      <div className="todo-body">
        <div className="todo-text">
          {todo.id}. {todo.title}
        </div>
        <div className="todo-description">{todo.body}</div>
      </div>
      <div className="todo-button">
        <Button onClick={() => navigate(`/todos/${todo.id}`)}>Comments</Button>
        <Button onClick={() => onTodoRemove(todo)}>Delete</Button>
      </div>
    </li>
  );
}
