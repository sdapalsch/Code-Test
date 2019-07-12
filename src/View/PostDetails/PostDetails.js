import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import Comment from './Components/Comment.js'
import './PostDetails.css'

function PostDetails(props) {
  console.log(props.match.params.id)
  console.log(props.posts)
  let post = props.posts.find(p => p.id == props.match.params.id)
  console.log(post)
  let author = props.users.find(u => u.id == post.userId)
  return (
    <div className="PostDetails">
      <header>
        <Link to="/">Home</Link>
        <h2 className="Post-title">{post.title}</h2>
      </header>
      <span>by <Link className="Post-author" to={"/user/" + post.userId}>{author.username}</Link></span>
      <p className="Post-body">{post.body}</p>
      <h2>Comments</h2>
      <div className="Comment-holder">
        {props.comments.map((comment) => {
          return <Comment name={comment.name} email={comment.email} commentBody={comment.body} />
        })}
      </div>
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
