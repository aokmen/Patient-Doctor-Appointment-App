import { createSlice } from "@reduxjs/toolkit";
//import React from "react";

const messagingSlice = createSlice({
  name: "message",

  initialState: {
    subject: "",
    content: ""
  },
  reducers:{
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getDataSuccess: (state, {payload}) => {
      state.loading = false;
      state[payload.res] = payload.data;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  }

});
export const {
  fetchStart,
  getDataSuccess,
  fetchFail,
} = messagingSlice.actions

export default messagingSlice.reducer;
