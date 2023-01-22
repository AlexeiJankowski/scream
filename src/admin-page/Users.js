import React from 'react';
import { getUsers } from '../data/users';
import PaginatedTable from './admin-page-components/PaginatedTable';

const Users = () => {
  return (   
    <PaginatedTable 
      head={["Email"]}
      type={"user"} 
      getItems={getUsers} 
      recordsPerPage={10}
    /> 
  )
}

export default Users;