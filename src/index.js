import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './Redux/reducer.js'
import actionCreators from './Redux/actionCreators.js'

let store = createStore(reducer)

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
), document.getElementById('root'))

let postRequest = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())

let commentRequest = fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())

let userRequest = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())

let apiData = {"posts":[],"comments":[],"users":[]}

Promise.all([postRequest, commentRequest, userRequest])
  .then((values) => {
    console.log('got data')
    apiData["posts"] = values[0]
    apiData["comments"] = values[1]
    apiData["users"] = values[2]
    return apiData
  })
  .then((data) => {
    console.log(data)
    let action = actionCreators.loadData(data)
    console.log(action)
    store.dispatch(action)
  })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
