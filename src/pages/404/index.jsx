import React from "react";
import { Link } from "react-router-dom";
import styles from "../../components/UI/Navbar/Navbar.module.scss";

function PageNotFound() {
  return (
    <div>
      <h1>
        <span style={{ color: "red" }}>404</span> PAGE NOT FOUND
      </h1>
      <Link to="/" className={styles.NavbarLink}>
        RETURN TO HOMEPAGE
      </Link>
    </div>
  );
}

export default PageNotFound;
