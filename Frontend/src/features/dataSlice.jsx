import { createSlice } from "@reduxjs/toolkit";
//import React from "react";

const dataSlice = createSlice({
  name: "data",

  initialState: {
    loading:false,
    contentCategories:[],
    contents:[],
    branches:[],
    complaints:[],
    doctors:[],
    patients:[],
    appointments:[],
    cities:[],
    messages:[],
    events:[],
    daySchedules: [],
    files:[],
  },
  reducers:{
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getDataSuccess: (state, {payload}) => {
      state.loading = false;
      state[payload.url] = payload.data;
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
} = dataSlice.actions

export default dataSlice.reducer;
