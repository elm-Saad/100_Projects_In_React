import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const url = 'https://course-api.com/react-useReducer-cart-project'

// etch the data Async with out axios
export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(error))
})
/**
 * export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
 */
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    // pass the reducer in redux is like 
    // pass deferent functionality and have access to the state and the payload then export ;to use it 
    // calling the hook useDispatch and run it 
    reducers: {
      clearCart: (state) => {
        state.cartItems = []

        // what ever get return from the reducer is going to be the new state

      },
      removeItem:(state,action/** or use {payload} */) => {
        const id = action.payload
        // to use the modified state every time it change  get access to state.___
        state.cartItems = state.cartItems.filter(item=>item.id != id)
      },

      increase: (state,{payload})=>{
        const cartItem = state.cartItems.find(item=>item.id==payload.id)
        cartItem.amount = cartItem.amount + 1
      },

      decrease: (state,{payload})=>{
        const cartItem = state.cartItems.find(item=>item.id==payload.id)
        cartItem.amount = cartItem.amount - 1
      },
      calculateTotals:(state)=>{
        let amountOfItem = 0
        let totalOfMoney = 0

        state.cartItems.forEach(item=>{
          amountOfItem += item.amount
          totalOfMoney +=item.amount * item.price
        })

        state.amount = amountOfItem
        state.total = totalOfMoney.toFixed(1)
      }

    },

    //lifecycle actions new syntax 
    extraReducers: (builder) => {
      builder
        .addCase(getCartItems.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getCartItems.fulfilled, (state, action) => {
          // console.log(action);
          state.isLoading = false
          state.cartItems = action.payload
        })
        .addCase(getCartItems.rejected, (state, action) => {
          // u can display  the error from the action here when using axios
          // console.log(action);
          state.isLoading = false
        })
    },
})


// action set by default by immer library behind 
export const { clearCart,removeItem,increase,decrease,calculateTotals } = cartSlice.actions

export default cartSlice.reducer