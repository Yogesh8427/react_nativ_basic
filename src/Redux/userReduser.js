import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
    name:"user",
    initialState:false,
    reducers:{
        login:(state,action)=>{
          state=action.payload;
          return state
        },
        logout:(state,action)=>{
            state=action.payload;
            return state
        }
    }
})

export const{login,logout}=user.actions;

export default user.reducer;