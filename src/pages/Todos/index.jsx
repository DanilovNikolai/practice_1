import React, { useState, useEffect, useRef } from "react";
// custom hooks
import { useTodos } from "../../hooks/useTodos";
import useFetching from "../../hooks/useFetching";
import useObserver from "../../hooks/useObserver";
// API
import TodoService from "../../API/TodoService";
// utils
import getPageCount from "../../utils/pages";
// components
import TodosList from "../../components/TodosList";
import TodosModal from "../../components/TodosModal";
import TodosFilter from "../../components/TodosFilter";
import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";
import Loader from "../../components/UI/Loader";
import Navbar from "../../components/UI/Navbar";
// styles
import styles from "./Todos.module.scss";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [isModalVisible, setModalVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(7);
  const [page, setPage] = useState(1);
  const sortedAndSearchedTodos = useTodos(todos, filter.sort, filter.search);
  const lastElement = useRef();

  const [fetchTodos, isTodosLoading, todosError] = useFetching(async () => {
    const response = await TodoService.getAll(limit, page);
    setTodos([...todos, ...response.data]);
    const totalTodos = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalTodos, limit));
  });

  useObserver(lastElement, page < totalPages, isTodosLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchTodos();
  }, [page, limit]);

  function handleTodoCreate(todo) {
    setTodos([...todos, todo]);
    setModalVisible(false);
  }

  function handleTodoRemove(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  return (
    <>
      <Navbar />
      <div className={styles.todoContainer}>
        <Button onClick={() => setModalVisible(true)}>
          <span>Создать запись</span>
        </Button>
        <Modal visible={isModalVisible} closeModal={setModalVisible}>
          <TodosModal onTodoCreate={handleTodoCreate} todos={todos} />
        </Modal>
        <TodosFilter
          filter={filter}
          setFilter={setFilter}
          limit={limit}
          setLimit={setLimit}
        />
        {todosError && <h1 style={{ color: "red" }}>Произошла ошибка</h1>}
        <TodosList
          onTodoRemove={handleTodoRemove}
          todos={sortedAndSearchedTodos}
          title="Список дел"
          number="1"
        />
        <div ref={lastElement} />
        {isTodosLoading && <Loader />}
      </div>
    </>
  );
}
