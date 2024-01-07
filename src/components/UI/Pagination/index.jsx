import React from "react";
import getPagination from "../../../utils/pagesArray";

function Pagination({ totalPages, page, changePage }) {
  const pagesArray = getPagination(totalPages);

  return (
    <div className="todo-page-wrapper">
      {pagesArray.map((p) => (
        <span
          key={p}
          className={page === p ? "todo-page-btn-active" : "todo-page-btn"}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
}

export default Pagination;
