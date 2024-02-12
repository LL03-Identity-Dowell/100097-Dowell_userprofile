import { configureStore } from "@reduxjs/toolkit";
import sectionslice from "./slice/sectionslice";
import idverifyslice from './slice/idverify';
import profiledataSlice from "./slice/profiledataSlice";
import profileviewSlice from "./slice/profileviewSlice";
import userdataslice from "./slice/userdataslice";


const store = configureStore({
    reducer: {
        sections: sectionslice,
        idverify: idverifyslice,
        profile: profiledataSlice,
        view: profileviewSlice,
        user:userdataslice
    },
});


export default store;
