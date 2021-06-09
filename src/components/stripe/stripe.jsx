import React from 'react';
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({price}) {
    const priceForStripe=price*88;
    const publishableKey="pk_test_51IzlnaSCAowg8haIM51fIBOfVDUCDHpzZdVSRUaxBqHNq0t37q02k7DlGAXBnrKb28SYyufL5cNND1ibKQZrQAtC00SOKquQxZ";
    
    function onToken(token){
        console.log(token);
        alert("PAYMENT SUCCESFULL");
    }
    return (
        <StripeCheckout
            label="PAY NOW"
            name="SUYAL STORE"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`TOTAL ${price}`}
            amount={priceForStripe}
            panelLabel="PAY NOW"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
