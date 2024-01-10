import {createSlice} from '@reduxjs/toolkit';
export interface AuthStateType {
  userData: Array<any>;
  loginUser: {[key: string]: any};
}
const initialState: AuthStateType = {
  userData: [],
  loginUser: {},
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveCrediantial: (state, {payload}) => {
      state.userData = [...state.userData, payload];
    },
    saveLoginUser: (state, {payload}) => {
      state.loginUser = payload;
    },
    resetAuth: () => {
      return {...initialState};
    },
  },
});
export const {saveCrediantial, resetAuth, saveLoginUser} = authSlice.actions;

export default authSlice.reducer;
