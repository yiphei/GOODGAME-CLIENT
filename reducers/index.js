import { combineReducers } from 'redux';
import GamesReducer from './gamesReducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  games: GamesReducer,
  auth: AuthReducer,
});

export default rootReducer;
