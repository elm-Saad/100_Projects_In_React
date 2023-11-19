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
    if(action.type === INCREASE){
        const NewCart = new Map(state.cart)
        // get the uniq cart
        const singleCart = NewCart.get(action.payload.id)

        // update the cart amount
        const UpdatedCarts = {...singleCart, amount: singleCart.amount + 1}

        // set the changes to the cart 
        NewCart.set(action.payload.id,UpdatedCarts)
        
        return {...state, cart: NewCart}
    }
    if(action.type === DECREASE){
        const NewCart = new Map(state.cart)
        // get the uniq cart
        const singleCart = NewCart.get(action.payload.id)

        // if you have left 1 item and u try to DECREASE =>> Remove the item
        if(singleCart.amount == 1){
            NewCart.delete(action.payload.id)
            return {...state, cart: NewCart}
        }
        // update the cart amount
        const UpdatedCarts = {...singleCart, amount: singleCart.amount - 1}

        // set the changes to the cart 
        NewCart.set(action.payload.id,UpdatedCarts)
        
        return {...state, cart: NewCart}
    }
    if(action.type === LOADING){
        return {...state, loading: true}
    }
    if(action.type === DISPLAY_ITEMS){
        const NewCart = new Map(action.payload.data.map(item=>{
            return [item.id, item]
        }))
        return {...state, loading: false, cart:NewCart}
    }
    return state
}