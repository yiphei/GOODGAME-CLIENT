import axios from 'axios';

const ROOT_URL = 'https://minitumblr.herokuapp.com/api';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

export function fetchGames() {
  // Action Creator returns a function
  // that gets called b the middleware passing in dispatch to it as an arg
  return (dispatch) => {
    // axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
    axios.get(`${ROOT_URL}/posts`).then((response) => {
      // response.data is a json file
      console.log('in fetchGames', response.data);
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }).catch((error) => {
      console.log('error occured during fetchPosts');
    });
    // on the completion we will dispatch an action
    // can now dispatch stuff
  };
}

// axios GET
export function fetchGame(id) {
  return (dispatch) => {
    // axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
    console.log('fetchpost ', id);
    axios.get(`${ROOT_URL}/posts/${id}`).then((response) => {
      console.log('in fetchGame', response.data);
      dispatch({ type: 'FETCH_POST', payload: response.data });
    }).catch((error) => {
      console.log('error occured during fetchPosts');
    });
  };
}


export function createGame(post) {
  return (dispatch) => {
    const fields = {
      title: post.title, content: post.content, tags: post.tags, cover_url: post.cover_url,
    };
    console.log(localStorage.getItem('token'));
    // axios.post(`${ROOT_URL}/posts${API_KEY}`, fields).then((response) => {
    axios.post(`${ROOT_URL}/posts`, fields, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log('in createGame');
      dispatch({ type: 'CREATE_POST', payload: null });
      // dispatch({ type: 'CREATE_POST', payload: response.data });
    }).catch((error) => {
      console.log(error.response);
    });
  };
}

// axios DELETE
export function deletePost(id, history) {
  return (dispatch) => {
    // axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
    axios.delete(`${ROOT_URL}/posts/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log('in deletePost');
      history.push('/'); // navigate back to another page
      fetchGames();
      dispatch({ type: 'DELETE_POST', payload: null });
    }).catch((error) => {
      console.log('error occured during fetchPosts');
    });
  };
}

// axios PUT
export function updateGame(game) {
  return (dispatch) => {
    const id = game._id;
    const fields = {
      id: game._id, title: game.title, content: game.content, tags: game.tags, cover_url: game.cover_url,
    };
    console.log(game);
    // axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, fields).then((response) => {
    axios.put(`${ROOT_URL}/posts/${id}`, fields, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log('in updatePost', response.data);
      fetchGames();
      dispatch({ type: 'UPDATE_POST', payload: game });
    }).catch((error) => {
      console.log('error occured during updatePost');
    });
  };
}

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, password }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  return (dispatch) => {
    const fields = {
      email, password,
    };
    // does an axios.post on the /signin endpoint
    axios.post(`${ROOT_URL}/signin`, fields).then((response) => {
      console.log('in signinUser');
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
    }).catch((error) => {
      console.log(error.response);
      // dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

// export function signupUser({ email, password, handle }, history) {
export function signupUser(user) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  return (dispatch) => {
    const fields = {
      email: user.email, password: user.password, handle: user.handle,
    };
    // does an axios.post on the /signup endpoint
    console.log('start signupUser');
    axios.post(`${ROOT_URL}/signup`, fields).then((response) => {
      console.log('in signupUser');
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
    }).catch((error) => {
      console.log(error.response);
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}
