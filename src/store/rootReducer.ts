import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import dashboardReducer from '../features/Dashboard/dashboardSlice';

export const reducers = combineReducers({
  Auth: authReducer,
  dashboard: dashboardReducer,
});
const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET') {
    return reducers(undefined, action);
  }
  return reducers(state, action);
};
export default rootReducer;
