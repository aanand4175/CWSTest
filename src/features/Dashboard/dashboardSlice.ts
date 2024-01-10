import {createSlice} from '@reduxjs/toolkit';
export interface AuthStateType {
  openSummary: Array<any>;
  prioritySummary: Array<any>;
  transactionSummary: Array<any>;
  monthlyClosed: Array<any>;
  actionData: {[key: string]: any};
  graphData: Array<any>;
  machineSaleDetail: {[key: string]: any};
}
const initialState: AuthStateType = {
  openSummary: [],
  prioritySummary: [],
  transactionSummary: [],
  monthlyClosed: [],
  actionData: {},
  graphData: [],
  machineSaleDetail: {},
};
export const dashboardSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveComplaintEngSummary: (state, {payload}) => {
      state.openSummary = payload.openSummary;
      state.prioritySummary = payload.prioritySummary;
      state.transactionSummary = payload.transactionSummary;
      state.monthlyClosed = payload.monthlyClosed;
      state.machineSaleDetail = payload.machineSaleDetail[0];
    },
    saveComplaintZonalSummary: (state, {payload}) => {
      state.actionData = payload.action[0];
      state.graphData = payload.graph;
    },
  },
});
export const {saveComplaintEngSummary, saveComplaintZonalSummary} =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
