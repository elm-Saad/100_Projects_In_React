import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import customFetch from '../../utils/axios'

const initialState = {
    isLoading:false,
    user:null
}

export const RegisterUser = createAsyncThunk(
    'user_registerUser',
    async(user,thunkAPI)=>{
        try {
            const res = await customFetch.post('auth/testingRegister',user)
            console.log(res)
        } catch (error) {
            toast(error.response.data.msg)
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
    initialState
})


export default userSlice.reducer