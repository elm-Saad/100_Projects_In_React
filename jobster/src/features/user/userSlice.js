import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    isLoading:false,
    user:null
}

export const RegisterUser = createAsyncThunk(
    'user_registerUser',
    async(user,thunkAPI)=>{
        console.log('register user'+ user )
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