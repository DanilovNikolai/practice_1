import React from "react";
// components
import PostItem from "../PostItem";
// react-transition-group
import { TransitionGroup, CSSTransition } from "react-transition-group";
// styles
import styles from "./PostsList.module.scss";

export default function PostsList({ posts, title, number, onPostRemove }) {
  if (!posts.length) {
    return <h1>Список задач пуст</h1>;
  }

  return (
    <ul className={styles.postList}>
      {title}: {number}
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem post={post} onPostRemove={onPostRemove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}
