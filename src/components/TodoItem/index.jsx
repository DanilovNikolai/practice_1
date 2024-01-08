import React from "react";
// UI
import Button from "../UI/Button";
// react-router-dom
import { useNavigate } from "react-router-dom";
// styles
import styles from "./TodoItem.module.scss";

export default function TodoItem({ todo, onTodoRemove }) {
  const navigate = useNavigate();

  return (
    <li className={styles.todoItem}>
      <div className={styles.todoBody}>
        <div className={styles.todoText}>
          {todo.id}.{" "}
          {todo.title.length > 50
            ? `${todo.title.substring(0, 50)}...`
            : todo.title}
        </div>
        <div className={styles.todoDescription}>
          {todo.body.length > 70
            ? `${todo.body.substring(0, 70)}...`
            : todo.body}
        </div>
      </div>
      <div className={styles.todoButton}>
        <Button onClick={() => navigate(`/todos/${todo.id}`)}>
          <span>Comments</span>
        </Button>
        <Button onClick={() => onTodoRemove(todo)}>
          <span>Delete</span>
        </Button>
      </div>
    </li>
  );
}
