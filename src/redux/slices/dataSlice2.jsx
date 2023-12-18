import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios'
export const  getData2=createAsyncThunk('getData2',async()=>{
    const response=await axios.get('http://localhost:3000/comments')
    return response.data
})

const dataSlice1=createSlice({
    name:'data2',
    initialState:{
        data:[],
        loading:false,
        error:''

    },
    extraReducers:(builder)=>{
            builder.addCase(getData2.pending,(state,action)=>{
                state.loading=true,
                state.error=''
            })
            builder.addCase(getData2.fulfilled,(state,action)=>{
                state.loading=false,
                state.error='',
                state.data=action.payload
                console.log(state.data)
            })
            builder.addCase(getData2.rejected,(state,action)=>{
                state.error=action.payload.message,
                state.loading=false
            })
    }
})
export default dataSlice1.reducer