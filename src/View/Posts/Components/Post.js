import React from 'react'
import { Link } from "react-router-dom"

export default function Post(props) {
  return (
    <div className="Post">
      <Link className="Post-title" to={"/post/" + props.id}>{props.title}</Link>
      <span>by <Link className="Post-author" to={"/user/" + props.userId}>{props.author}</Link></span>
      <p className="Post-body">{props.postBody}</p>
    </div>
  )
}
