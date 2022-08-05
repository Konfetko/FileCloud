
import {useEffect, useState} from "react";
import {IUserDB} from "../models/IUserDB";

export  function useUser(){
    const [user,setUser]=useState<IUserDB>()
    function parseJwt(token:string) {
        if (!token || token==='null')return;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    useEffect(()=>{
        let token = localStorage.getItem("token")
        setUser(parseJwt(String(token)))
    },[])
    return {user}
}
