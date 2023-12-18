import { createSlice } from "@reduxjs/toolkit";

const adminBooksSlice=createSlice({
    name:'adminBook',
    initialState:{
        data:[]
    },
    reducers:{
        addAdminBooks:(state,action)=>{
            state.data=[...state.data,action.payload]
            localStorage.setItem('adminBooks',JSON.stringify(state.data))
        }
    }
})
export default adminBooksSlice.reducer