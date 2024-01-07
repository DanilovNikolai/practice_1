import React from "react";
import TodoItem from "../TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function TodosList({ todos, title, number, onTodoRemove }) {
  if (!todos.length) {
    return <h1>Список задач пуст</h1>;
  }

  return (
    <ul
      className="todo-list"
      style={{ color: "yellowgreen", fontSize: "20px" }}
    >
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
