import { configureStore } from "@reduxjs/toolkit";
import sectionslice from "./slice/sectionslice";
import idverifyslice from './slice/idverify';


const store = configureStore({
    reducer: {
        sections: sectionslice,
        idverify:idverifyslice
    },
});


export default store;
