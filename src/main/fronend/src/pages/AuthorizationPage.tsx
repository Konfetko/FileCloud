import React, {useState} from 'react';
import {useNavigate} from "react-router";
import loginForm from "../components/LoginForm";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

const AuthorizationPage = () => {
    let [logining,setLogining]=useState(true)
    return(
        <>
            {
                (logining===true)
                    ?<LoginForm change={setLogining}/>
                    :<RegistrationForm change={setLogining}/>
            }
        </>
    )
}

export default AuthorizationPage;