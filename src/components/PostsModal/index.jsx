import React, { useState } from "react";
// UI
import Button from "../UI/Button";
import Input from "../UI/Input";
// styles
import styles from "./PostsModal.module.scss";

export default function PostsModal({ onPostCreate, posts }) {
  const [value, setValue] = useState({ title: "", body: "" });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = { ...value, id: posts.length + 1 };
    if (value.title && value.body !== "") {
      onPostCreate(newPost);
      setValue({ title: "", body: "" });
    } else {
      return;
    }
  }

  return (
    <div className={styles.postModalContainer}>
      <div className={styles.title}>Добавить список дел:</div>
      <form className={styles.postForm}>
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
        <Button onClick={addNewPost}>Добавить</Button>
      </form>
    </div>
  );
}
