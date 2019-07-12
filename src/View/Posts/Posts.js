import React from 'react'
import { connect } from 'react-redux'
import Post from './Components/Post.js'
import './Posts.css'

function Posts(props) {
  return (
    <div className="Posts">
      <header className="Posts-header">
        <h1>Posts</h1>
      </header>
      <div className="Post-Holder">
        {props.posts.map((post) => {
          return <Post id={post.id} title={post.title} userId={post.userId} author={props.users.find( u => u.id == post.userId ).username} postBody={post.body} />
        })}
      </div>
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
