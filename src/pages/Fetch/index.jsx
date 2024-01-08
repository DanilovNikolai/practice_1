import React, { useEffect, useState } from "react";
// components
import Button from "../../components/UI/Button";
import Navbar from "../../components/UI/Navbar";
// style
import styles from "./Fetch.module.scss";

export default function Fetch() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("component did mount");
    fetch(`https://jsonplaceholder.typicode.com/${type}?_start=0&_limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [type]);

  return (
    <>
      <Navbar />
      <div className={styles.optionsContainer}>
        <h2>Получаем данные: {type}</h2>
        <Button onClick={() => setType("users")}>Users</Button>
        <Button onClick={() => setType("todos")}>Todos</Button>
        <Button onClick={() => setType("posts")}>Posts</Button>
      </div>
      <div className={styles.listContainer}>
        {type === "users" && (
          <ul>
            {data.length !== 0 &&
              data.map((item, index) => (
                <li className={styles.itemUsers} key={index}>
                  {item.id}. {item.name}
                </li>
              ))}
          </ul>
        )}
      </div>
      <div className={styles.listContainer}>
        {(type === "todos" || type === "posts") && (
          <ul>
            {data.length !== 0 &&
              data.map((item, index) => (
                <li className={styles.itemTodos} key={index}>
                  {item.id}. {item.title}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
}
