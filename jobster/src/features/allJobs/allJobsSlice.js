import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../utils/axios'


// filter feature
const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
}




export const getAllJobs = createAsyncThunk(
  'allJobs_getJobs',
  async(_,thunkAPI)=>{
    let url = `/jobs`

    try {
      const resp = await customFetch.get(url, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      return resp.data // return all jobs data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
export const showStats = createAsyncThunk(
  'allJobs_showStats',
  async(_,thunkAPI)=>{
    try {
      const res = await customFetch.get('/jobs/stats')
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
/**
 * u can use extraReducer for showStats but we could as well call it from the state page 
 */




const allJobSlice = createSlice({
  name:'allJobs',
  initialState,
  reducers:{
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllJobs.fulfilled, (state,{payload}) => {
        state.isLoading = false
        state.jobs = payload.jobs
      })
      .addCase(getAllJobs.rejected, (state, {payload}) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true
      })
      .addCase(showStats.fulfilled, (state,{payload}) => {
        state.isLoading = false
        state.stats = payload.defaultStats
      })
      .addCase(showStats.rejected, (state, {payload}) => {
        state.isLoading = false
        toast.error(payload)
      })
},
})

export const {showLoading,hideLoading} = allJobSlice.actions

export default allJobSlice.reducer
