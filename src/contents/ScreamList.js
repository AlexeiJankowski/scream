import React from 'react';

import './ScreamList.css';

const ScreamList = ({posts}) => {
  if(posts && posts != null) {
    return (
      <>
        <h2>Latest Screams</h2>
        {posts.map((post, index) => {
          return (
            <article key={`${index}sl`} className="scream">
              {post.text}
            </article>
          )
        })}
      </>      
    )
  }  
}

export default ScreamList;