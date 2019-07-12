import React from 'react'
import { Link } from "react-router-dom"

export default function Comment(props) {
  return (
    <div className="Comment">
      <p><span className="Comment-name">Name: {props.name}</span><br /><span className="Comment-email">Email: {props.email}</span></p>

      <p className="Comment-body">{props.commentBody}</p>
    </div>
  )
}
