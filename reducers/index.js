import { combineReducers } from 'redux';
import GamesReducer from './gamesReducer';
import AuthReducer from './auth-reducer';
import UserReducer from './user-reducer';


const rootReducer = combineReducers({
  games: GamesReducer,
  auth: AuthReducer,
  user: UserReducer,
});

export default rootReducer;
