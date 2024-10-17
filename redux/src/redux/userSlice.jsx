import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
    loading: true,
    error: false,
  },
  reducers: {
    userLoading: (state) => {
      state.error = false;
      state.loading = true;
    },
    userError: (state) => {
        state.error=true; 
        state.loading=false
    },
    userData: (state, action) => {
        state.loading=false;
        state.user = action.payload
    }
  },
});

export default userSlice