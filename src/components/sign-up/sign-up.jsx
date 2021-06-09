import React,{useState} from 'react';
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import CustomButton from "../custom-buttom/custom-button";
import FormInput from '../form-input/form-input';
import "./sign-up.styles.scss";
import { useHistory } from 'react-router-dom';


function SignUp() {
    const history = useHistory();
    const [input, setinput] = useState({
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    function handleChange(event){
        const {name, value}=event.target;
        setinput(prevState=>({
            ...prevState,
            [name]:value
        }));
    };
    function handleSubmit (event){
        event.preventDefault();
        const {displayName, email, password, confirmPassword}=input;
        console.log(input);
        if(password !==confirmPassword){
            alert("Password didnt match");
            return;
        }
        try{
            const {user}=auth.createUserWithEmailAndPassword(email,password);
            createUserProfileDocument(user,{displayName});
            history.push("/");
            setinput({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
            });

        }catch(error){
            console.log(error);
        }
    }
    return (
        <div className="sign-up">
        <h2 className="title">I dont have a account</h2>
        <span>Sign up with your email and password </span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
        type="text"
        name="displayName"
        value={input.displayName}
        onChange={handleChange}
        label="Display Name"
        required
        />
        <FormInput
        type="text"
        name="email"
        value={input.email}
        onChange={handleChange}
        label="Email"
        required
        />
        <FormInput
        type="password"
        name="password"
        value={input.password}
        onChange={handleChange}
        label="Password"
        required
        />
        <FormInput
        type="password"
        name="confirmPassword"
        value={input.confirmPassword}
        onChange={handleChange}
        label="Conform Password"
        required
        />
        <CustomButton onClick={handleSubmit} type="submit">Sign-Up</CustomButton>

        </form>
            
        </div>
    )
}

export default SignUp;
