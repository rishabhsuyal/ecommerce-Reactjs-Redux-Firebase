import React from 'react';
import "./checkout.scss";
import { connect } from "react-redux";
import {selectCartItems, selectCartItemsTotal} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe/stripe";

function Checkout({cartItems,totalPrice}) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>PRODUCT
                    </span>
                </div>
                <div className="header-block">
                    <span>DESCRIPTION
                    </span>
                </div>
                <div className="header-block">
                    <span>QUANTITY
                    </span>
                </div>
                <div className="header-block">
                    <span>PRICE
                    </span>
                </div>
                <div className="header-block">
                    <span>REMOVE
                    </span>
                </div>
            </div>
            {
                cartItems.map(i=>(
                    <CheckoutItem key={i.id} cartItem={i} />
                ))
            }
            <div className="total">
            <span>TOTAL : ${totalPrice}</span>
            </div>
            <StripeCheckoutButton price={totalPrice} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    totalPrice:selectCartItemsTotal
})

export default connect(mapStateToProps)(Checkout);
