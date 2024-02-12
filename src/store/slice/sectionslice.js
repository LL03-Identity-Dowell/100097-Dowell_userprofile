import { createSlice } from "@reduxjs/toolkit";

const sectionslice = createSlice({
	name: "sections",
	initialState: null,
	reducers: {
		getsections(state, action) {
			
			return action.payload;
		},
	},
});

export default sectionslice.reducer;

export const { getsections } = sectionslice.actions;
