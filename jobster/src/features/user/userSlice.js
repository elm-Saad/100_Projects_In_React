import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import customFetch from '../../utils/axios'
import { addToLocalStorage, getFromLocalStorage,removeFromLocalStorage } from '../../utils/localStorage'

const initialState = {
  isLoading:false,
  isSidebarOpen:false,
  user:getFromLocalStorage()
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
        try {
            const res = await customFetch.post('auth/login',user)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)

export const UpdateUser = createAsyncThunk(
  'user_updateUser',
  async(user,thunkAPI)=>{
    try {
      //get the token and pass is to headers as this for uniq identifier
      const resp = await customFetch.patch('/auth/updateUser', user, {
        headers:{
          //.....user/**name of store */.user/**name of prop */....
          Authorization:`Bearer ${thunkAPI.getState().user.user.token}`,
        }

      })
      return resp.data
    } catch (error) {  
      // 570 video handle old token /expired token
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser())
        return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
      }

      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)




const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
      toggleSidebar : (state)=>{
        state.isSidebarOpen=!state.isSidebarOpen
      },
      logoutUser : (state)=>{
        state.user=null
        state.isSidebarOpen=false
        removeFromLocalStorage()
      }
    },
    //lifecycle actions new syntax 
    extraReducers: (builder) => {
        builder
          .addCase(RegisterUser.pending, (state) => {
            state.isLoading = true
          })
          .addCase(RegisterUser.fulfilled, (state, action) => {
            const { user } = action.payload 
            //add user to local storage
            addToLocalStorage(user)
            state.isLoading = false
            state.user = user
            toast.success(`hello there ${user.name}`)
            // get the token from here user.token
          })
          .addCase(RegisterUser.rejected, (state, action) => {
            state.isLoading = false
            toast.error(action.payload)
          })
          .addCase(LoginUser.pending, (state) => {
            state.isLoading = true
          })
          .addCase(LoginUser.fulfilled, (state, action) => {
            const { user } = action.payload   
            //add user to local storage
            addToLocalStorage(user)         
            state.isLoading = false
            state.user = user
            toast.success(`welcome back ${user.name}`)
            // get the token from here user.token
          })
          .addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false
            toast.error(action.payload)
          })
          .addCase(UpdateUser.pending, (state) => {
            state.isLoading = true
          })
          .addCase(UpdateUser.fulfilled, (state, action) => {
            const { user } = action.payload   
            //add user to local storage
            addToLocalStorage(user)         
            state.isLoading = false
            state.user = user
            toast.success(`User Updated`)
            // get the token from here user.token
          })
          .addCase(UpdateUser.rejected, (state, action) => {
            state.isLoading = false
            toast.error(action.payload)
          })
      },
})


export const {logoutUser,toggleSidebar} = userSlice.actions

export default userSlice.reducer