import actionTypes from './actionTypes.js';

const initialState = {
	loading: true,
	posts: [],
	comments: [],
  users: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_LOADING:
			return {
				...state,
				loading: action.loading
			}
		case actionTypes.LOAD_DATA:
			return {
				...state,
				posts: action.posts,
				comments: action.comments,
				users: action.users,
				loading: action.loading
			}
		default:
			return state
	}
	return state
}

export default reducer
