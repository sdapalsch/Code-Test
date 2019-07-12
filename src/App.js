import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Posts from './View/Posts/Posts.js'
import PostDetails from './View/PostDetails/PostDetails.js'
import UserDetails from './View/UserDetails/UserDetails.js'
import Loading from './View/Loading.js'
import { connect } from 'react-redux'
import './App.css'

function App(props) {
  return (
    props.loading ? renderLoading() : renderApp()
  )
}

let renderLoading = () => {
  return (
    <Loading />
  )
}

let renderApp = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/user/:id" component={UserDetails} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

let connectedApp = connect((state, ownProps) => {
  return {
    ...ownProps,
    loading: state.loading
  }
})(App)

export default connectedApp
