import React, {useContext, useState} from 'react';
import {IUserDB} from "../models/IUserDB";
import {useNavigate} from "react-router";
import AuthService from "../services/AuthService";
import cls from "../scssModules/AuthorizationPage.module.scss";
import IChangeVisibility from "../models/IChangeVisibility";
import IUserClient from "../models/IUserClient";
import {Context} from "../index";



const RegistrationForm = ({change}:IChangeVisibility) => {

    let [user,setUser] = useState<IUserClient>({username:"",password:"",role:{roleTitle:"USER"}})
    let [inputType,setInputType]= useState<String>("password")
    let navigate = useNavigate()
    const {store} = useContext(Context)

    const authorize= (event: React.FormEvent)=>{
        event.preventDefault()
        let userService: AuthService = new AuthService()
        userService.registrationUser(user)
        if(store.isAuth)
            changeForm()
    }
    const setUsername=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        setUser(prev=>({...prev,username:event.target.value}))
    }
    const setPassword=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        setUser(prev=>({...prev,password:event.target.value}))
    }
    const changeVisibility=()=>{
        setInputType(prev=>(prev=="password"?"text":"password"))
    }
    const changeForm=()=>{
        change(true)
    }
    return (
        <div className={cls.authBlock}>
            <div className={cls.title}>FileCloud</div>
            <div className={cls.title} >Созданіе учётной запісі</div>
            <form className={cls.form} onSubmit={authorize}>
                <div>
                    <span className={cls.label}>Імя пользователя</span>
                    <input type="text" placeholder={"Імя пользователя"} onChange={setUsername}/>
                </div>
                <div className={cls.block}>
                    <span className={cls.label}>Пароль</span>
                    <input type={String(inputType)} placeholder={"Пароль"} onChange={setPassword}/>
                </div>
                <button className={cls.buttonShow} onClick={changeVisibility}>Показать пароль</button><br/>
                <button className={cls.button + " "+cls.loginButton} >Создать запісь</button><br/>
                <button className={cls.button +" "+cls.createButton} onClick={changeForm}>Авторізоваться</button>
            </form>
        </div>
    );
};

export default RegistrationForm;