import React, { useState } from "react";
import { PaginationProps } from "./Pagination.type";
import { DOTS, usePaginationRange } from "hooks/usePaginationHook";

const Pagination = ({
  data,
  title,
  buttonConst,
  contentPerPage,
}: PaginationProps) => {
  const [totalPageCount] = useState(Math.ceil(data.length) / contentPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginationRange: any = usePaginationRange({
    totalPageCount,
    buttonConst,
    siblingCount: 1,
    currentPage,
  });

  console.log(paginationRange);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }
  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  return (
    <div className="pagination">
      <button
        onClick={goToPreviousPage}
        className={` prev ${currentPage === 1 ? "disabled" : ""}`}
      >
        {"<"}
      </button>
      {paginationRange.map((item: any, index: any) => {
        if (item === DOTS) {
          return (
            <button key={index} className={`paginationItem`}>
              &#8230;
            </button>
          );
        }
        return (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        );
      })}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === totalPageCount ? "disabled" : ""}`}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
