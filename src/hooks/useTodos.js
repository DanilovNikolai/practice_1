import { useMemo } from "react";

export function useSortedTodos(todos, sort) {
  const sortedTodos = useMemo(() => {
    if (sort) {
      return [...todos].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else {
      return todos;
    }
  }, [sort, todos]);

  return sortedTodos;
}

export function useTodos(todos, sort, search) {
  const sortedTodos = useSortedTodos(todos, sort);

  const sortedAndSearchedTodos = useMemo(() => {
    return sortedTodos.filter((todo) =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortedTodos]);

  return sortedAndSearchedTodos;
}
