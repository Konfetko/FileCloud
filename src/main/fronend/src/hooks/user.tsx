
import {useEffect, useState} from "react";
import IUserJWT from "../models/IUserJWT";

export  function useUser(){
    const [user,setUser]=useState<IUserJWT>()
    function parseJwt(token:string) {
        if (!token || token==='null')return;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    useEffect(()=>{
        let token = localStorage.getItem("token")
        setUser(parseJwt(String(token)))
        if(Date.now()>=Number(user?.exp)*1000) {
            setUser({idUser: 0, created: 0, exp: 0, username: ""})
            localStorage.removeItem("token")
        }

    },[])
    return {user}
}
