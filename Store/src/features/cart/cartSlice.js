import { createSlice } from "@reduxjs/toolkit"
import { Toast } from "react-toastify/dist/components"


const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
}


const cartSlice = createSlice({
    name:'cart',
    initialState:defaultState,
    reducers:{
        addItem:(state,action)=>{
            console.log('123')
        },
        clearCart:(state)=>{
            console.log('123')
        },
        removeItem:(state,action)=>{
            console.log('123')
        },
        editItem:(state,action)=>{
            console.log('123')
        }
    }
})

export const {addItem,clearCart,removeItem,editItem} = cartSlice.actions


export default cartSlice.reducer