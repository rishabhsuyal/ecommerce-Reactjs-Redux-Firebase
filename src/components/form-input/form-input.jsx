import React from 'react';
import "./form-input.styles.scss";

function FormInput ({handlechange,label,...otherProps}) {
    return (
        <div className="group">
            <input className="form-input" onChange={handlechange} {...otherProps}/>
            {
                label?
                (<label className={`${otherProps.length ? 'shrink':''} form-input-label`}>
                 {label}
                </label>)
                :null
            }
        </div> 
    )
}

export default FormInput;
