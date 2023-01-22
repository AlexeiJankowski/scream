import React, { useState } from 'react';

import { postScream } from '../data/screams';

import './PostScream.css';

const PostScream = () => {
  const [post, setPost] = useState('');

  const onChangeHandler = e => {
    if (e.target.value != null && e.target.value !== '') {
      setPost(e.target.value);
    }    
  }

  const onSubmitHandler = e => {
    e.preventDefault();    
    if(post != null) {
      console.log('value >>> ', post)
      postScream({"post": post});
    }        
  }

  return (
    <div className="scream-wrapper">
      <form>
        <textarea 
          className="scream-input"
          rows="10"
          onChange={onChangeHandler}
          value={post ? post : ''}
          ></textarea>
        <button 
          className="btn btn--scream-submit" 
          type="submit"
          onClick={onSubmitHandler}>Scream!</button>
      </form>
    </div>
  )
}

export default PostScream;