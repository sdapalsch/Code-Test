import actionTypes from './actionTypes.js'

export const setLoading = (loading) => {
  return {
    type: actionTypes.SET_LOADING,
    loading: loading
  }
}

export const loadData = (data) => {
  if (!data || !data.posts || !data.comments || !data.users) {
    console.log('missing data')
    console.log(data)
  }
  return {
    type: actionTypes.LOAD_DATA,
    posts: data.posts,
    comments: data.comments,
    users: data.users,
    loading: false
  }
}

const actionCreators = {
  setLoading: setLoading,
  loadData: loadData
}

export default actionCreators
