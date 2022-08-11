import React, {useContext, useState} from 'react';
import {IUserDB} from "../models/IUserDB";
import {useNavigate} from "react-router";
import AuthService from "../services/AuthService";
import cls from "../scssModules/AuthorizationPage.module.scss";
import IChangeVisibility from "../models/IChangeVisibility";
import IUserClient from "../models/IUserClient";
import {Context} from "../index";
import useValidate from "../hooks/validate";
import Error from "./Error";



const RegistrationForm = ({change}:IChangeVisibility) => {

    let [user,setUser] = useState<IUserClient>({username:"",password:"",role:{roleTitle:"USER"}})
    let [inputType,setInputType]= useState<String>("password")
    let navigate = useNavigate()
    const {store} = useContext(Context)
    const {error,isValidated,validate} = useValidate(user)

    const registrate= (event: React.FormEvent)=>{
        event.preventDefault()

        validate()
        if(!isValidated)
            return


        store.registration(user)

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
            <form className={cls.form} onSubmit={registrate}>
                <div>
                    <span className={cls.label}>Імя пользователя</span>
                    <input type="text" placeholder={"Імя пользователя"} onChange={setUsername}/>
                </div>
                <div className={cls.block}>
                    <span className={cls.label}>Пароль</span>
                    <input type={String(inputType)} placeholder={"Пароль"} onChange={setPassword}/>
                </div>
                <button className={cls.buttonShow} onClick={changeVisibility}>Показать пароль</button><br/>
                {error && <Error error={error}/>}
                <button className={cls.button + " "+cls.loginButton} >Создать запісь</button><br/>
                <button className={cls.button +" "+cls.createButton} onClick={changeForm}>Авторізоваться</button>
            </form>
        </div>
    );
};

export default RegistrationForm;