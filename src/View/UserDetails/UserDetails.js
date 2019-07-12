import React from 'react';
import './UserDetails.css';

function UserDetails({ match }) {
  return (
    <div className="UserDetails">
      <h1>UserDetails id: {match.params.id}</h1>
    </div>
  );
}

export default UserDetails;
