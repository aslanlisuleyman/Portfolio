import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios'
export const  getData3=createAsyncThunk('getData3',async()=>{
    const response=await axios.get('http://localhost:3000/books')
    return response.data
})

const dataSlice3=createSlice({
    name:'data',
    initialState:{
        data:[],
        loading:false,
        error:''

    },
    extraReducers:(builder)=>{
            builder.addCase(getData3.pending,(state,action)=>{
                state.loading=true,
                state.error=''
            })
            builder.addCase(getData3.fulfilled,(state,action)=>{
                state.loading=false,
                state.error='',
                state.data=action.payload
                console.log(state.data)
            })
            builder.addCase(getData3.rejected,(state,action)=>{
                state.error=action.payload.message,
                state.loading=false
            })
    }
})
export default dataSlice3.reducer