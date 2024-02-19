import React, { useState, useEffect}from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, setPageNumber }) => {
  let [width, setWidth] =useState(window.innerWidth);
  
  let updateDimension=()=>{
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize', updateDimension);
    return()=> window.removeEventListener('resize', updateDimension);
  },[]);
  return (
    <>
    <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        pageCount={info?.pages}
        marginPagesDisplayed={width <576 ? 1 : 2}
        pageRangeDisplayed={width <576 ? 1 : 2}
        onPageChange={(data)=>{
            setPageNumber(data.selected +1);
        }}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
      </>
    
  );
};
export default Pagination;
