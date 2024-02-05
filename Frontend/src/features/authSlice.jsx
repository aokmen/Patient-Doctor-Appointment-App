import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{
    currentUser: null,
    loading: false,
    error: false,
    token: null
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state,action) => {
      state.loading = false;
      state.currentUser = action.payload?.user?.email;
      state.token = action.payload?.key;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.patient ? payload?.patient.email : (payload?.doctor ? payload?.doctor.email : payload?.admin.email);
      state.token = payload?.key;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
// export const { reducer } = authSlice; 
// export const {
//   fetchStart,
//   loginSuccess,
//   logoutSuccess,
//   registerSuccess,
//   fetchFail,
// } = authSlice.actions

export const { reducer, actions: { fetchStart, loginSuccess, logoutSuccess, registerSuccess, fetchFail }} = authSlice;

export default authSlice;

