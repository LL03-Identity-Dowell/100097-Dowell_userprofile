import { createSlice } from "@reduxjs/toolkit";

const idverifyslice = createSlice({
	name: "idverify",
	initialState: null,
	reducers: {
		getidverify(state, action) {
			console.log("state payload", action.payload);
			return action.payload;
		},
	},
});

export default idverifyslice.reducer;

export const { getidverify } = idverifyslice.actions;
