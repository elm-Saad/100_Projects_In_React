
 
export const calculateTotal = (cart) =>{
    let TotalAmount = 0
    let TotalPrice = 0
    //calculate the Totals 
    for(let item of cart.values()){
        TotalAmount += item.amount
        TotalPrice += item.amount * item.price
    }
    
    TotalPrice = TotalPrice.toFixed(2)
    
    return {TotalAmount, TotalPrice}
}