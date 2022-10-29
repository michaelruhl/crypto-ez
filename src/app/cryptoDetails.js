import { createSlice } from "@reduxjs/toolkit";

export const cryptoDetailsSlice = createSlice({
  name: "cryptoDetails",
  initialState: {
    cryptoDetails: {},
  },
  reducers: {
    cryptoDetails: (state, action) => {
      state.cryptoDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { cryptoDetails } = cryptoDetailsSlice.actions;

export default cryptoDetailsSlice.reducer;