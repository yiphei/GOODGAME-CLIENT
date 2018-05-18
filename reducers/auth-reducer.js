import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true };
    case ActionTypes.DEAUTH_USER: {
      return { ...state, authenticated: false };
    }
    case ActionTypes.AUTH_ERROR: {
      // add newly created post into all array
      // https://stackoverflow.com/questions/40911194/how-do-i-add-an-element-to-array-in-reducer-of-react-native-redux
      // return { ...state, all: [...state.all, action.payload] };
      return { ...state, authenticated: false };
    }
    default:
      return state;
  }
};

export default AuthReducer;
