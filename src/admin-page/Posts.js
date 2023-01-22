import React from 'react';
import { getScreams } from '../data/screams';
import PaginatedTable from './admin-page-components/PaginatedTable';

const Posts = () => {
  return (
    <PaginatedTable 
      head={["Text"]}
      type={"post"}
      getItems={getScreams} 
      recordsPerPage={8}
    /> 
  )
}

export default Posts;