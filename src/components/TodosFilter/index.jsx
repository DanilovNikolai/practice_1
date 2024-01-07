import React from "react";
import Select from "../UI/Select";
import Input from "../UI/Input";

export default function TodosFilter({ filter, setFilter }) {
  return (
    <div>
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
      <Input
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        value={filter.search}
        placeholder="Поиск по списку"
      />
    </div>
  );
}
