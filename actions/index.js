import axios from 'axios';

const ROOT_URL = 'https://minitumblr.herokuapp.com/api';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
};

// axios GET
export function fetchGames() {
  // Action Creator returns a function
  // that gets called b the middleware passing in dispatch to it as an arg
  return (dispatch) => {
    // axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
    axios.get(`${ROOT_URL}/posts`).then((response) => {
      // response.data is a json file
      console.log('in fetchPosts', response.data);
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }).catch((error) => {
      console.log('error occured during fetchPosts');
    });
    // on the completion we will dispatch an action
    // can now dispatch stuff
  };
}
