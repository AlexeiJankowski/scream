import React, { useState, useEffect } from 'react';

import Pagination from './Pagination';

const PaginationWrapper = ({getItems, posts, setPosts, recordsPerPage}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const indexOfLastRecord = currentPageNumber * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;  

  const numberOfPagesCalc = (dataLength, recordsPerPage) => {
    return Math.ceil(dataLength / recordsPerPage);
  }  

  // Pagination calculations
  useEffect(() => {
    getItems()
      .then(res => {
        setNumberOfPages(numberOfPagesCalc(res.data.length, recordsPerPage));
        return res;
      })
      .then(res => setPosts(res.data.slice(indexOfFirstRecord, indexOfLastRecord))); 
  },[setPosts, getItems, recordsPerPage, indexOfFirstRecord, indexOfLastRecord]);

  return (
    <Pagination 
      numberOfPages={numberOfPages}
      currentPage={currentPageNumber}
      setCurrentPage={setCurrentPageNumber}
    />
  )
}

export default PaginationWrapper;