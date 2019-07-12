import React from 'react';
import './PostDetails.css';

function PostDetails({ match }) {
  return (
    <div className="PostDetails">
      <h1>PostDetails id: {match.params.id}</h1> 
    </div>
  );
}

export default PostDetails;
