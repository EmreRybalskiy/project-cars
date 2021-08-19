import { combineReducers } from 'redux';
import carReducer from './carReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  users: userReducer,
  cars: carReducer,
});

export type RootState = ReturnType<typeof rootReducer>
