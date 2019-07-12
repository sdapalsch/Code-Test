import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './UserDetails.css'

function UserDetails(props) {
  let user = props.users.find(p => p.id == props.match.params.id)
  return (
    <div className="UserDetails">
      <header className="UserDetails-header">
        <Link to="/">Home</Link>
        <h2 className="User-name">{user.name}</h2>
      </header>
      <div className="User-info-holder">
        <span>Username: {user.username}</span>
        <span>Email: {user.email}</span>
        <span>Phone: {user.phone}</span>
        <span>Website: {user.website}</span>
        <span className="User-info-heading">Address</span>
        <span>Street: {user.address.street}</span>
        <span>Suite: {user.address.suite}</span>
        <span>City: {user.address.city}</span>
        <span>Zipcode: {user.address.zipcode}</span>
        <span>Geo: [Lat:{user.address.geo.lat}, Lng:{user.address.geo.lng}]</span>
        <span className="User-info-heading">Company</span>
        <span>Name: {user.company.name}</span>
        <span>CatchPhrase: {user.company.catchPhrase}</span>
        <span>BS: {user.company.bs}</span>
      </div>
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
