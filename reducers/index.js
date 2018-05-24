import { combineReducers } from 'redux';
import GamesReducer from './gamesReducer';
import AuthReducer from './auth-reducer';
import UserReducer from './user-reducer';
import CourtsReducer from './courtsReducer';

const rootReducer = combineReducers({
  courts: CourtsReducer,
  games: GamesReducer,
  auth: AuthReducer,
  user: UserReducer,
});

export default rootReducer;
