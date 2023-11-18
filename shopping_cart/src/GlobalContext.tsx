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
 * const cart = {
 * 'id-1': { id: 1, name: 'first', price: 10 },
 * 'id-2': { id: 2, name: 'second', price: 20 },
 * }
 * 
*/

const defaultState = {
    loading: false,
    cart: [...cartItems]
}

export const GlobalContext = ({children}: any) =>{
    
    const [state,dispatch] = useReducer(reducer,defaultState)
    // const contextValue: ContextValueType = {
    //    name:'saad'
    // }
    return <GlobalContextAPI.Provider value={{...state}}>
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

