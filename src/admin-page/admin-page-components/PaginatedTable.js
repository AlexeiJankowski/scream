import React, { useState } from 'react';
import ResultTable from './ResultTable';
import PaginationWrapper from '../../contents/PaginationWrapper';

const PaginatedTable = ({head, type, getItems, recordsPerPage}) => {
  const [posts, setPosts] = useState();

  return (    
    <>
      <ResultTable 
        items={posts}
        head={head}
        type={type}
      />
      <PaginationWrapper 
        getItems={getItems}
        posts={posts}
        setPosts={setPosts}
        recordsPerPage={recordsPerPage}
      />
    </>
  )
}

export default PaginatedTable;