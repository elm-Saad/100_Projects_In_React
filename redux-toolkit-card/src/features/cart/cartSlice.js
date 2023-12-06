
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

    // pass the reducer in redux
    reducers: {
        clearCart: (state) => {
          state.cartItems = []
        },
    },
})


// action set by default by immer library behind 
export const { clearCart } = cartSlice.actions

export default cartSlice.reducer