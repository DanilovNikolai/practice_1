import React from "react";
// UI
import Select from "../UI/Select";
import Input from "../UI/Input";
// styles
import styles from "./PostsFilter.module.scss";

export default function PostsFilter({ filter, setFilter, limit, setLimit }) {
  return (
    <div className={styles.postsFilterContainer}>
      <Select
        defaultValue="Сортировка"
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
      <Select
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во элементов"
        options={[
          { value: 5, name: "Показывать по 5" },
          { value: 10, name: "Показывать по 10" },
          { value: 20, name: "Показывать по 20" },
          { value: -1, name: "Показать все посты" },
        ]}
      />
      <Input
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        value={filter.search}
        placeholder="Поиск по списку"
      />
    </div>
  );
}
