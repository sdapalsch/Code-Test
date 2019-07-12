import React from 'react'
import { connect } from 'react-redux'
import './Posts.css'

function Posts(props) {
  return (
    <div className="Posts">
      <header className="Posts-header">
        <h1>Posts</h1>
      </header>
    </div>
  )
}

let connectedPosts = connect((state, ownProps) => {
  return {
    ...ownProps,
    posts: state.posts,
    users: state.users
  }
})(Posts)

export default connectedPosts
