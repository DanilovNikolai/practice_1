import React from "react";
// UI
import Button from "../UI/Button";
// react-router-dom
import { useNavigate } from "react-router-dom";
// styles
import styles from "./PostItem.module.scss";

export default function PostItem({ post, onPostRemove }) {
  const navigate = useNavigate();

  return (
    <li className={styles.postItem}>
      <div className={styles.postBody}>
        <div className={styles.postText}>
          {post.id}.{" "}
          {post.title.length > 50
            ? `${post.title.substring(0, 50)}...`
            : post.title}
        </div>
        <div className={styles.postDescription}>
          {post.body.length > 70
            ? `${post.body.substring(0, 70)}...`
            : post.body}
        </div>
      </div>
      <div className={styles.postButton}>
        <Button onClick={() => navigate(`/posts/${post.id}`)}>
          <span>Comments</span>
        </Button>
        <Button onClick={() => onPostRemove(post)}>
          <span>Delete</span>
        </Button>
      </div>
    </li>
  );
}
