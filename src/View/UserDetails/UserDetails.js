import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './UserDetails.css'

function UserDetails(props) {
  return (
    <div className="UserDetails">
      <Link to="/">Home</Link>
      <h1>UserDetails id: {props.match.params.id}</h1>
    </div>
  )
}

let connectedUserDetails = connect((state, ownProps) => {
  return {
    ...ownProps,
    users: state.users
  }
})(UserDetails)

export default connectedUserDetails
