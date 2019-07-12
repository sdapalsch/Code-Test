import React from 'react'
import { Link } from "react-router-dom"

export default function Comment(props) {
  return (
    <div className="Comment">
      <p className="Comment-name">Name: {props.name}</p>
      <p className="Comment-email">Email: {props.email}</p>
      <p className="Comment-body">{props.commentBody}</p>
    </div>
  )
}
