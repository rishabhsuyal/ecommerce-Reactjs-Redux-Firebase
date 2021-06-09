import React from 'react';
import CustomButton from "../custom-buttom/custom-button";
import "./cart-dropdown.styles.scss";
import {  Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selector";
import { useHistory } from "react-router-dom";
import CartItem from "../cart-item/cart-item";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
function CartDropdown({cartItems, dispatch}) {
    const history=useHistory();
    const routeChange = () =>{ 
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }
    return (
        <div className="cart-dropdown">
                <div className="cart-items">
                {
                cartItems.length?
                (cartItems.map(cartItem=>
                <CartItem key={cartItem.id} item={cartItem} />
                )):(
                    <span className="empty-message">
                        YOUR CART IS EMPTY
                    </span>
                )
                }
                </div> 
                <CustomButton onClick={routeChange}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})
    

export default connect(mapStateToProps)(CartDropdown);
