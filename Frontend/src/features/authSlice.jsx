<<<<<<< HEAD
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
      state.currentUser = payload?.data?.email;
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
=======
import React from "react";
 
const authSlice = () => {
  return <div></div>;
};
>>>>>>> 46cf13b91dfa20348787a3fa593cd4a8efa74f0d

export default authSlice;

