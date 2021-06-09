import React from 'react';
import "./custom-button.styles.scss";
function CustomButton({children,isGoogleSignIn,inverted, ...otherProps}) {
    return (
        <div>
        <button className=
        {
            `${inverted?"inverted":""}
            ${isGoogleSignIn?"google-sign-in":""} custom-button`
        }
          {...otherProps}>
        {children}  
        </button>
            
        </div>
    )
}

export default CustomButton
