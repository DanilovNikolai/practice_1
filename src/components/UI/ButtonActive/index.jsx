import React from "react";
import styles from "./ButtonActive.module.scss";

export default function ButtonActive({ children, ...props }) {
  return (
    <button className={styles.myButtonActive} {...props}>
      {children}
    </button>
  );
}