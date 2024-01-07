import React, { useEffect, useState } from "react";
// components
import Button from "../../components/UI/Button";
import Navbar from "../../components/UI/Navbar";

export default function Fetch() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);

  const style = {
    marginTop: "5px",
    borderRadius: "5px",
    fontSize: "14px",
    listStyleType: "none",
    backgroundColor: "#282c34",
    color: "yellowgreen",
    border: "1px solid yellowgreen",
    padding: "0px 10px",
  };

  useEffect(() => {
    console.log("component did mount");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [type]);

  return (
    <>
      <Navbar />
      <div>
        <h2>Получаем данные: {type}</h2>
        <Button onClick={() => setType("users")}>Users</Button>
        <Button onClick={() => setType("todos")}>Todos</Button>
        <Button onClick={() => setType("posts")}>Posts</Button>
      </div>
      {type === "users" && (
        <ul>
          {data.length !== 0 &&
            data.map((item, index) => (
              <li style={style} key={index}>
                {item.name}
              </li>
            ))}
        </ul>
      )}
      {(type === "todos" || type === "posts") && (
        <ul>
          {data.length !== 0 &&
            data.map((item, index) => (
              <li style={style} key={index}>
                {item.title}
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
