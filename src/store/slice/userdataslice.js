import { createSlice } from "@reduxjs/toolkit";

const userdataSlice = createSlice({
	name: "userdata",
	initialState: null,
	reducers: {
		getuserdetails(state, action) {
			return action.payload;
		},
	},
});

export default userdataSlice.reducer;

export const { getuserdetails } = userdataSlice.actions;
