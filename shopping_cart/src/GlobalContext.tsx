import { createContext,useContext, useReducer} from "react"
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
    cart: new Map(cartItems.map(item=>{
        return [item.id, item]
    }))
}

export const GlobalContext = ({children}: any) =>{

    const [state,dispatch] = useReducer(reducer,defaultState)


    const ClearAllCardItems = () =>{
        dispatch({type:CLEAR_CART})
    }

    const RemoveSingleCardItem = (id) => {
        dispatch({type:REMOVE, payload:{id}})
    }
    
    return <GlobalContextAPI.Provider value={{...state, ClearAllCardItems, RemoveSingleCardItem}}>
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

