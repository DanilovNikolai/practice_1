import React, { useState } from "react";
// components
import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";
import Navbar from "../../components/UI/Navbar";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(true);

  function handleButtonIncrement() {
    setCount(count + 1);
  }

  function handleButtonDecrement() {
    setCount(count - 1);
  }

  function handleButtonClear() {
    setCount(0);
  }

  return (
    <>
      <Navbar />
      <h1>Счетчик: {count}</h1>
      <div>
        <Button style={{ padding: "5px 25px" }} onClick={handleButtonIncrement}>
          +
        </Button>
        <Button style={{ padding: "5px 25px" }} onClick={handleButtonDecrement}>
          -
        </Button>
        <Button onClick={handleButtonClear}>Clear</Button>
        {count >= 10 && (
          <Modal visible={modal}>
            Хватит кликать!
            <Button onClick={() => setModal(false)}>
              Хорошо, больше не буду!
            </Button>
          </Modal>
        )}
      </div>
    </>
  );
}
