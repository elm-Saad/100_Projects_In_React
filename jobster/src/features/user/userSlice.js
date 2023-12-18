import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import customFetch from '../../utils/axios'

const initialState = {
    isLoading:false,
    user:null
}

export const RegisterUser = createAsyncThunk(
    'user_registerUser',
    //return a promise that well get handled in the extra reducer
    async(user,thunkAPI)=>{
        try {
            const res = await customFetch.post('auth/register',user)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)
export const LoginUser = createAsyncThunk(
    'user_LoginUser',
    async(user,thunkAPI)=>{
        console.log('Login user'+ user )
    }
)
const userSlice = createSlice({
    name:'user',
    initialState,
    //lifecycle actions new syntax 
    extraReducers: (builder) => {
        builder
          .addCase(RegisterUser.pending, (state) => {
            state.isLoading = true
          })
          .addCase(RegisterUser.fulfilled, (state, action) => {
            const { user } = action.payload            
            state.isLoading = false
            state.user = user
            toast.success(`hello there ${user.name}`)
          })
          .addCase(RegisterUser.rejected, (state, action) => {
            state.isLoading = false
            toast.error(action.payload)
          })
      },
})


export default userSlice.reducer