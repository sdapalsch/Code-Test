import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Posts from './View/Posts/Posts.js';
import PostDetails from './View/PostDetails/PostDetails.js';
import UserDetails from './View/UserDetails/UserDetails.js';

function App() {
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
  );
}

export default App;
