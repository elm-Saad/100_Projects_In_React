import { CLEAR_CART,REMOVE,INCREASE,DECREASE,LOADING,DISPLAY_ITEMS} from './actions'

export const reducer = (state,action) => {
    if(action.type === CLEAR_CART){
        return {...state, cart: new Map()}
    }
    if(action.type === REMOVE){
        const NewCart = new Map(state.cart)
        NewCart.delete(action.payload.id)
        return {...state,cart: NewCart}
    }
    return state
}