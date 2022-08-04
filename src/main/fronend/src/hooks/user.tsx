
import {useEffect, useState} from "react";
import {IUserDB} from "../models/IUserDB";

export  function useUserId(){
    const [user,setUser]=useState<IUserDB>()
    function parseJwt(token:string) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    useEffect(()=>{
        setUser(parseJwt(String(localStorage.getItem("token"))))
    },[])
    return {user}
}
