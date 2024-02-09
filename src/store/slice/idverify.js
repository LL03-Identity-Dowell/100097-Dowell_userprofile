import { createSlice } from "@reduxjs/toolkit";

const idverifyslice = createSlice({
	name: "idverify",
	initialState: {
		phone_Verification: "Not_Started",
		email_Verification: "Not_Started",
		voiceID_Verification: "Not_Started",
		faceID_Verification: "Not_Started",
		biometricID_Verification: "Not_Started",
		videoID_Verification: "Not_Started",
		idCard1_Verification: "Not_Started",
		idCard2_Verification: "Not_Started",
		idCard3_Verification: "Not_Started",
		idCard4_Verification: "Not_Started",
		idCard5_Verification: "Not_Started",
		signature_Verification: "Not_Started",
		socialMedia_Verification: "Not_Started",
		personalReference_Verification: "Not_Started",
		personal_Verification_By_Witness: "Not_Started",
		organisation_Verification: "Not_Started",
	},
	reducers: {
		getidverify(state, action) {
			console.log("state payload", action.payload);
			return action.payload;
		},
	},
});

export default idverifyslice.reducer;

export const { getidverify } = idverifyslice.actions;
