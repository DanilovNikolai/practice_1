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
import TodosInput from "../../components/TodosInput";
import TodosFilter from "../../components/TodosFilter";
import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";
import Loader from "../../components/UI/Loader";
import Navbar from "../../components/UI/Navbar";
import Select from "../../components/UI/Select";
// styles
import "../../styles/Todos.scss";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [modal, setModal] = useState(false);
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

  function changePage(page) {
    setPage(page);
  }

  function handleTodoCreate(todo) {
    setTodos([...todos, todo]);
    setModal(false);
  }

  function handleTodoRemove(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  return (
    <>
      <Navbar />
      <div className="todo-container">
        <Button onClick={() => setModal(true)}>Создать запись</Button>
        <Modal visible={modal} setVisible={setModal}>
          <TodosInput onTodoCreate={handleTodoCreate} todos={todos} />
        </Modal>
        <TodosFilter filter={filter} setFilter={setFilter} />
        <Select
          value={limit}
          onChange={(value) => setLimit(value)}
          defaultValue="Кол-во элементов на странице"
          options={[
            { value: 5, name: "Показывать по 5" },
            { value: 10, name: "Показывать по 10" },
            { value: 20, name: "Показывать по 20" },
            { value: -1, name: "Показать все посты" },
          ]}
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
        {/* <Pagination totalPages={totalPages} page={page} changePage={changePage}/> */}
      </div>
    </>
  );
}
