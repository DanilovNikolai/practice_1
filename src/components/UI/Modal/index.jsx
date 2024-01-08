import React from "react";
// styles
import styles from "./Modal.module.scss";

export default function Modal({ children, visible, closeModal }) {
  const rootClasses = [styles.myModal];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => closeModal(false)}>
      <div
        className={styles.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
