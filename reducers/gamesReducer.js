import { ActionTypes } from '../actions';

const initialState = {
  all: [], // array of all posts
  game: {},
};

const GamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS: {
      return { ...state, all: action.payload }; // return state w/ all property set to new posts
    }
    default:
      return state;
  }
};

export default GamesReducer;
