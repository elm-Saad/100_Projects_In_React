import { createContext,useContext, useReducer, useEffect} from "react"
import { ContextValueType } from "./interfaces"
import {reducer} from './reducer'
import cartItems from "./data"
import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS,
  } from './actions'

import { calculateTotal } from './utils'
const GlobalContextAPI = createContext<ContextValueType|undefined>(undefined)

/**
 * make the array from : 
 * 
 * const cart = [
 * { id: 1, name: 'first', price: 10 },
 * { id: 2, name: 'second', price: 20 },
 * ]
 * 
 * =>TO :
 * 
 * const cart =[
 *   [1, { id: 1, name: 'first', price: 10 }],
 *   [2, { id: 2, name: 'second', price: 20 }],
 * ]
 * 
*/
// const items = cartItems.map(item=>{
//     return [item.id, item]
// })
//const card = new Map(items) to control it like : get has delete and size

// convert the Map to an array of key-value pairs
// const cartArray = Array.from(card.entries())

const defaultState = {
    loading: false,
    cart: new Map()
}

export const GlobalContext = ({children}: any) =>{

    const [state,dispatch] = useReducer(reducer,defaultState)

    //Calculate Total
    const {TotalAmount,TotalPrice} = calculateTotal(state.cart)
    console.log(state.cart.values())

    const ClearAllCardItems = () =>{
        dispatch({type:CLEAR_CART})
    }

    const RemoveSingleCardItem = (id: string) => {
        dispatch({type:REMOVE, payload:{id}})
    }
    const AddCardItem = (id: string) =>{
        dispatch({type:INCREASE, payload:{id}})

    }
    const RemoveCardItem = (id: string) =>{
        dispatch({type:DECREASE , payload:{id}})
    }


    const fetchData = async() =>{
        dispatch({type:LOADING})
        const res = await fetch ('https://www.course-api.com/react-useReducer-cart-project')
        // if(!res.ok){ //To be more secure I Guess
        //     const data = new Map(cartItems.map(item=>{
        //         return [item.id, item]
        //     }))
        //     dispatch({type:DISPLAY_ITEMS, payload:{data}}) 
        // }
        const data =  await res.json()
        dispatch({type:DISPLAY_ITEMS, payload:{data}})
    }
    useEffect(()=>{
        fetchData()
    },[])
    return <GlobalContextAPI.Provider value={{...state, ClearAllCardItems, RemoveSingleCardItem,AddCardItem, RemoveCardItem,TotalAmount,TotalPrice }}>
        {children}
    </GlobalContextAPI.Provider>
}

// custom hook

export const useContextAPI = (): ContextValueType=>{
    const contextAPI =  useContext(GlobalContextAPI)
    if (!contextAPI) {
        throw new Error("useContextAPI must be used within a GlobalApp provider")
    }
    return contextAPI
}

