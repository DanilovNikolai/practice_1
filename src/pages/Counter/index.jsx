import React, { useState } from "react";
// components
import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";
import Navbar from "../../components/UI/Navbar";
// styles
import styles from "./Counter.module.scss";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  function handleButtonIncrement() {
    setCount((prevCount) => {
      if (prevCount >= 9) {
        setModalVisible(true);
      }
      return prevCount + 1;
    });
  }

  function handleButtonDecrement() {
    setCount((prevCount) => {
      if (prevCount <= -9) {
        setModalVisible(true);
      }
      return prevCount - 1;
    });
  }

  function handleButtonClear() {
    setCount(0);
    setModalVisible(false);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  return (
    <>
      <Navbar />
      <h1 className={styles.title}>
        Счетчик:{" "}
        <span
          className={
            count < 10 && count > -10
              ? styles.countNumber
              : `${styles.countNumber} ${styles.red}`
          }
        >
          {count}
        </span>
      </h1>
      <div className={styles.container}>
        <Button style={{ padding: "5px 25px" }} onClick={handleButtonIncrement}>
          +
        </Button>
        <Button style={{ padding: "5px 25px" }} onClick={handleButtonDecrement}>
          -
        </Button>
        <Button onClick={handleButtonClear}>Clear</Button>
        {isModalVisible && (
          <Modal visible={isModalVisible} closeModal={handleCloseModal}>
            Хватит кликать!
            <Button onClick={() => setModalVisible(false)}>
              Хорошо, больше не буду!
            </Button>
          </Modal>
        )}
      </div>
    </>
  );
}
