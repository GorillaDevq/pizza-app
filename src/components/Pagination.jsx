import React from "react";
import ReactPaginate from "react-paginate";

export default function Paginate(props) {
  return(
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={() => 2}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
      className="navigation__container"
    />
  )
}