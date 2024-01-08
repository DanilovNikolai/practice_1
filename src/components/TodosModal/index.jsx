import React, { useState } from "react";
// UI
import Button from "../UI/Button";
import Input from "../UI/Input";
// styles
import styles from "./TodosModal.module.scss";

export default function TodosModal({ onTodoCreate, todos }) {
  const [value, setValue] = useState({ title: "", body: "" });

  function addNewTodo(e) {
    e.preventDefault();
    const newTodo = { ...value, id: todos.length + 1 };
    if (value.title && value.body !== "") {
      onTodoCreate(newTodo);
      setValue({ title: "", body: "" });
    } else {
      return;
    }
  }

  return (
    <div className={styles.todoModalContainer}>
      <div className={styles.title}>Добавить список дел:</div>
      <form className={styles.todoForm}>
        <Input
          placeholder="Добавьте название"
          value={value.title}
          onChange={(e) => setValue({ ...value, title: e.target.value })}
        />
        <Input
          placeholder="Добавьте описание"
          value={value.body}
          onChange={(e) => setValue({ ...value, body: e.target.value })}
        />
        <Button onClick={addNewTodo}>Добавить</Button>
      </form>
    </div>
  );
}
