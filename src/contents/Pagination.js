import React, { useState, useEffect } from 'react';

import { choosePagination } from '../pagination/pagination';

import './Pagination.css';

const Pagination = ({numberOfPages, currentPage, setCurrentPage}) => {
  const [nextActive, setNextActive] = useState(true);
  const [prevActive, setPrevActive] = useState(true);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    currentPage <= 1 ? setPrevActive(false) : setPrevActive(true);
  },[currentPage]);

  useEffect(() => {
    numberOfPages <= currentPage ? setNextActive(false) : setNextActive(true);
  }, [currentPage, numberOfPages]);

  useEffect(() => {
    setPageNumbers(choosePagination(currentPage, numberOfPages));
  }, [currentPage, numberOfPages]);

  return (
    <div className="page-nav__container">
      {/* Prev Button */}
      <PaginationButton 
        text={<i className="fa-solid fa-angle-left"></i>}
        className="page-nav__next" 
        disabled={!prevActive}
        onClick={() => setCurrentPage(currentPage - 1)}
      />  

      {/* Button Block */}
      <ButtonBlock 
        pagesArray={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      {/* Next Button */}
      <PaginationButton 
        text={<i className="fa-solid fa-angle-right"></i>}
        className="page-nav__next" 
        disabled={!nextActive}
        onClick={() => setCurrentPage(currentPage + 1)}
      />  
    </div>
  )
}

const PaginationButton = ({className, disabled, onClick, text, isActive}) => {
  return (
    <button 
      type="button" 
      className={`${className} ${isActive ? 'active-button' : ''}`}
      disabled={disabled}
      onClick={onClick}
      >
      {text}
    </button>
  )
}

const ButtonBlock = ({pagesArray, currentPage, setCurrentPage}) => {
  return (
    <>
      {pagesArray.map((pageNumber, index) => {
        return (
          <>
            <PaginationButton 
              key={`${index}pb`}
              text={pageNumber}
              className="page-nav__button"
              onClick={() => setCurrentPage(pageNumber)}
              isActive={currentPage === pageNumber ? true : false} 
            />
          </>
        )
      })
    }
    </>
  )
}



export default Pagination;