import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// styles
import styles from "./404.module.scss";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        <span>404</span> PAGE NOT FOUND
      </h1>
      <Link to="/" className={styles.NavbarLink}>
        RETURN TO HOMEPAGE
      </Link>
    </div>
  );
}

export default PageNotFound;
