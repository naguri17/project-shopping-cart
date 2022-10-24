import React from "react";
import classNames from "classnames";

const Pagination = ({
  productsPerPage,
  totalProducts,
  handlePagination,
  currentPage,
}) => {
  const pageCount = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="mt-5 py-10 border-b-[1px]">
      <div className="pagination flex flex-row items-center justify-center gap-3">
        {Array.from({ length: pageCount }).map((_, index) => (
          <div key={index} className="page-item">
            <button
              onClick={() => handlePagination(index)}
              className={classNames(
                "page-link border-2 border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400",
                {
                  "bg-red-100": currentPage === index,
                }
              )}
            >
              {index + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
