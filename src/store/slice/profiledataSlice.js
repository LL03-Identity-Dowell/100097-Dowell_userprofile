import { createSlice } from "@reduxjs/toolkit";

const profiledataSlice = createSlice({
	name: "profiledata",
	initialState: null,
	reducers: {
		getprofiledetails(state, action) {
			return action.payload;
		},
	},
});

export default profiledataSlice.reducer;

export const { getprofiledetails } = profiledataSlice.actions;
