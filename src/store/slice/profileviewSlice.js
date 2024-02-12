import { createSlice } from "@reduxjs/toolkit";

const profileviewSlice = createSlice({
	name: "profileview",
	initialState: null,
	reducers: {
		getprofileview(state, action) {
			return action.payload;
		},
	},
});

export default profileviewSlice.reducer;

export const { getprofileview } = profileviewSlice.actions;
