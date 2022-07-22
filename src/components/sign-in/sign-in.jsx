import { React, useState } from 'react';
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-buttom/custom-button";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";



function SignIn() {
    // const history = useHistory();
    const [input, setinput] = useState({
        email:"",
        password:""
    });

    function handleChange(event) {
        const {name,value}=event.target;
        setinput(prevState=>({
            ...prevState,
            [name]:value
        }))
        
    }
    function handleSubmit(e) {
        e.preventDefault();
        const {email,password}=input;
        try{
            auth.signInWithEmailAndPassword(email,password);
            setinput({
                email:"",
                password:""
            })
        }catch(error){
            console.log(error);
        }
    }
    
    return (
        <div className="sign-in">
            <form onSubmit={handleSubmit}>
                <FormInput 
                onChange={handleChange}
                value={input.email}
                label="Email" 
                type="email"
                name="email"
                required
                 />
                <FormInput 
                label="Password" 
                name="password"
                type="password" 
                value={input.password}
                onChange={handleChange}
                required
                />
                <div className="button">
                <CustomButton type="submit" onClick={handleSubmit}>SUBMIT</CustomButton>
                <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
