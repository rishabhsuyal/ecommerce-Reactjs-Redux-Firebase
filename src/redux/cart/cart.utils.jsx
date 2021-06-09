export const addItemToCart =(cartItems, itemToAdd)=>{
    const existing =cartItems.find(cartItem=>cartItem.id===itemToAdd.id)
    if(existing){
        return cartItems.map(
            cartItem=>
            cartItem.id===itemToAdd.id ?  
             {...cartItem,quantity:cartItem.quantity+1}:cartItem
        )

    }
    return [...cartItems,{...itemToAdd,quantity:1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove)=>{
    const existing=cartItems.find(cartItem=>
        cartItem.id===cartItemToRemove.id
        )
    if(existing.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
    }
    return cartItems.map(cartItem=> cartItem.id===cartItemToRemove.id ?
        {...cartItem,quantity:cartItem.quantity-1 }:cartItem
        )


}