import React from "react";
import logo from "./logo.svg";
import styles from "./Loader.module.scss";

function Loader() {
  return <img src={logo} className={styles.AppLogo} alt="logo" />;
}

export default Loader;
