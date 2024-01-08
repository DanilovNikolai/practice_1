import React from "react";
// components
import TodoItem from "../TodoItem";
// react-transition-group
import { TransitionGroup, CSSTransition } from "react-transition-group";
// styles
import styles from "./TodosList.module.scss";

export default function TodosList({ todos, title, number, onTodoRemove }) {
  if (!todos.length) {
    return <h1>Список задач пуст</h1>;
  }

  return (
    <ul className={styles.todoList}>
      {title}: {number}
      <TransitionGroup>
        {todos.map((todo) => (
          <CSSTransition key={todo.id} timeout={500} classNames="todo">
            <TodoItem todo={todo} onTodoRemove={onTodoRemove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}
