import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './PostDetails.css'

function PostDetails(props) {
  return (
    <div className="PostDetails">
      <Link to="/">Home</Link>
      <h1>PostDetails id: {props.match.params.id}</h1>
    </div>
  )
}

let connectedPostDetails = connect((state, ownProps) => {
  return {
    ...ownProps,
    posts: state.posts,
    comments: state.comments,
    users: state.users
  }
})(PostDetails)

export default connectedPostDetails
