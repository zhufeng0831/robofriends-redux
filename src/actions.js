import { 
	CHANGE_SEARCH_FIELD, 
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js'

//action return an object
//payload send what is needed for the reducer
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

//redux thunk wait for actions 
//requestRobots is a higher level function, which returns a function, redux-thunk help understand the process
//apply the dispatch function to second layer function
//dispatch的作用同样也是dispatch to action,只不过在second level function里，trigger 一系列的action object
//fetch function is AJAX API， return a promise object
export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}