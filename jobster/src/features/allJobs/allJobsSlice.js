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
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get('/jobs/stats',{
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      console.log(res.data)

      return res.data
    } catch (error) {
      // if 401
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)





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
    handleChange:(state,{payload:{name,value}})=>{
      state[name] = value
    },
    clearFilters:(state)=>{
      return  {...state,...initialFiltersState}

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllJobs.fulfilled, (state,{payload}) => {
        state.isLoading = false
        state.jobs = payload.jobs
        // pagination
        state.numOfPages = payload.numOfPages
        state.totalJobs = payload.totalJobs
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
        state.monthlyApplications = payload.monthlyApplications
      })
      .addCase(showStats.rejected, (state, {payload}) => {
        state.isLoading = false
        toast.error(payload)
      })
},
})

export const {showLoading,hideLoading,handleChange,clearFilters} = allJobSlice.actions

export default allJobSlice.reducer
