import React, { useState, useEffect } from 'react';
import ResultTable from './ResultTable';
import PaginationWrapper from '../../contents/PaginationWrapper';

const PaginatedTable = ({head, type, getItems, recordsPerPage}) => {
  const [posts, setPosts] = useState();
  const [refresh, setRefresh] = useState(false);

  return (    
    <>
      <ResultTable 
        items={posts}
        head={head}
        type={type}
        setRefresh={setRefresh}
      />
      <PaginationWrapper 
        refresh={refresh}
        getItems={getItems}
        posts={posts}
        setPosts={setPosts}
        recordsPerPage={recordsPerPage}
      />
    </>
  )
}

export default PaginatedTable;