import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaginationComponent = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1); 

  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
     if(pageNumber === 1) navigate("/page1");
    if(pageNumber === 2) navigate("/page2");
        setCurrentPage(pageNumber);

  };

  return (
    <div className="pagination-wrapper">
      <span>Page {currentPage} of {totalPages}</span>
      <Pagination className="custom-pagination">
        <Pagination.Prev
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
