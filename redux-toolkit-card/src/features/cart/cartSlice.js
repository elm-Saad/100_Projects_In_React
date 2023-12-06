
import { createSlice } from "@reduxjs/toolkit"

import cartItems from '../../cartItems'


const initialState = {
    cartItems: cartItems,
    amount: 9,
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
      removeItem:(state,action) => {
        const id = action.payload
        // to use the modified state every time it change  get access to state.___
        state.cartItems = state.cartItems.filter(item=>item.id != id)
      }

    },
})


// action set by default by immer library behind 
export const { clearCart,removeItem } = cartSlice.actions

export default cartSlice.reducer