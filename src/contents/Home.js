import React, { useState } from 'react';

import { getScreams } from '../data/screams';

import PostScream from './PostScream';
import ScreamList from './ScreamList';
import PaginationWrapper from './PaginationWrapper';

import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState();
  // It could be PaginatedTable Component, but I've missed with ScreamList structure choise...

  return (
    <main>
      <div className="container">
        {/* Post new post component */}
        <PostScream />
        {/* List of posted elements */}
        <ScreamList 
          posts={posts}
        />
        {/* Pagination 'slightly' binded with post generation */}
        <PaginationWrapper 
          getItems={getScreams}
          posts={posts}
          setPosts={setPosts}
          recordsPerPage={4}
        />
      </div>
    </main>
  )
}

export default Home;