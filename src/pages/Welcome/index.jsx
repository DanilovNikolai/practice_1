import React from "react";
// components
import Navbar from "../../components/UI/Navbar";
// styles
import styles from "./Welcome.module.scss";

function Welcome() {
  return (
    <>
      <Navbar />
      <h1 className={styles.title}>Welcome! :)</h1>
    </>
  );
}

export default Welcome;
