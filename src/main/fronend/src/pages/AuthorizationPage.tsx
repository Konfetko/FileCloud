import React, { useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import {useUser} from "../hooks/user";

const AuthorizationPage = () => {
    let [logining,setLogining]=useState(true)
    const navigate = useNavigate()
    const {user} = useUser()
    useEffect(()=>{
        if(user!=null)
            navigate(`/user/files${user.idUser}`)
    },[user])
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