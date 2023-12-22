import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../utils/axios'
import { getFromLocalStorage } from '../../utils/localStorage'

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  // ex
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  // default value
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
}

const jobSlice = createSlice({
    name:'job',
    initialState,
    reducers:{
      handleChange:(state,{payload:{name,value}})=>{
        state[name] = value
      },
      clearValues:()=>{
        // what ever is returned from the reducer is the new state as a hole
        return {
          ...initialState
        }
      }
    },
})


export const {handleChange,clearValues} = jobSlice.actions

export default jobSlice.reducer