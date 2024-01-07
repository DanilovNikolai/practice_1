import React, { useContext } from "react";
// components
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
// context
import { AuthContext } from "../../context/context";
// styles
import styles from "./Login.module.scss";

function Login() {
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);

  function loginSubmit(e) {
    e.preventDefault();
    setIsAuthorized(true);
    localStorage.setItem("auth", "true");
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Login in:</div>
      <form onSubmit={loginSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <Input type="text" placeholder="Введите логин" />
          <Input type="password" placeholder="Введите пароль" />
        </div>
        <Button>Войти</Button>
      </form>
    </div>
  );
}

export default Login;
