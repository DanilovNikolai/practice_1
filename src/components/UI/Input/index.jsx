import React from "react";
import styles from "./Input.module.scss";

export default function Input({ placeholder, type = "text", ...props }) {
  return (
    <input
      className={styles.myInput}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  );
}
