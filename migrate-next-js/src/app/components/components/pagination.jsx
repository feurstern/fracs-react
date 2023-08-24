import React from "react";

const Pagination = ({ postPerPage, totalPost, currentPage, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="flex flex-1 pagination items-end justify-end px-3 mb-2 h-8 leading-tight">
        {pageNumber.map((number) => {
          return currentPage == number ? (
            <a
              key={number}
              className={`bg-blue-500 border border-black-600`}
              onClick={() => {
                paginate(number);
              }}
            >
              <li className="page-item m-2">
                <span className="text-white font-bold">{number}</span>
              </li>
            </a>
          ) : (
            <a
              key={number}
              className={`bg-red-500 border border-black-600`}
              onClick={() => {
                paginate(number);
              }}
            >
              <li className="page-item m-2 text-white font-bold text-center items-center align-center">
                {number}
              </li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
