import React from 'react'
import { auth, provider } from "./firebase";
import "./Login.css";
import { Button } from "@material-ui/core"


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://cdn.dribbble.com/users/31864/screenshots/3666062/attachments/819877/2.jpg" alt="" />
                 </div>
            <Button onClick={signIn}>Sign In</Button>
            
        </div>
    );
}

export default Login;
