import { combineReducers } from 'redux';
import GamesReducer from './gamesReducer';

const rootReducer = combineReducers({
  games: GamesReducer,
});

export default rootReducer;
