import React from "react";
// logo
import logo from "./logo.svg";
// styles
import styles from "./Loader.module.scss";

function Loader() {
  return <img src={logo} className={styles.AppLogo} alt="logo" />;
}

export default Loader;
