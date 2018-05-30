import { ActionTypes } from '../actions';

const initialState = {
  all: [], // array of all posts
  game: {},
};

const GamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST: {
      return { ...state, game: action.payload }; // return state w/ all property set to new posts
    }
    case ActionTypes.FETCH_POSTS: {
      return { ...state, all: action.payload }; // return state w/ all property set to new posts
    }
    case ActionTypes.CREATE_POST: {
      return { ...state };
    }
    case ActionTypes.DELETE_POST: {
      return state;
    }
    case ActionTypes.UPDATE_POST: {
      return { ...state, game: action.payload }; // return state w/ all property set to new posts
    }
    case ActionTypes.ADD_PLAYER: {
      return { ...state, game: action.payload.game }; // return state w/ all property set to new posts
    }
    case ActionTypes.UPDATE_POSTGAMEVALUTAION: {
      return { ...state, game: action.payload }; // return state w/ all property set to new posts
    }
    default:
      return state;
  }
};

export default GamesReducer;
