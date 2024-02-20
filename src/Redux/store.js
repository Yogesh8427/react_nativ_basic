import { configureStore } from "@reduxjs/toolkit";
import rootreduser from "./combinereduser";


const store =configureStore({
    reducer:rootreduser
})



export default store;