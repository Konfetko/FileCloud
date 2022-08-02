import React, {useState} from 'react';
import {IUser} from "../models/IUser";
import {useNavigate} from "react-router";
import UserService from "../services/UserService";
import cls from "../scssModules/AuthorizationPage.module.scss";
import IChangeVisibility from "../models/IChangeVisibility";



const LoginForm = ({change}:IChangeVisibility) => {

    let [user,setUser] = useState<IUser>({username:"",password:"",role:{roleTitle:""}})
    let [inputType,setInputType]= useState<String>("password")
    let navigate = useNavigate()

    const authorize= (event: React.FormEvent)=>{
        event.preventDefault()
        let userService: UserService = new UserService()
        userService.authorizeUser(user)
        //navigate()
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
        change(false)
    }
    return (
        <div className={cls.authBlock}>
            <div className={cls.title}>FileCloud</div>
            <div className={cls.title} >Выполненіе входа в учётную запісь</div>
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
                <button className={cls.button + " "+cls.loginButton} >ВОЙТІ</button><br/>
                <button className={cls.button +" "+cls.createButton} onClick={changeForm}>СОЗДАТЬ УЧЕТНУЮ ЗАПІСЬ</button>
            </form>
        </div>
    );
};

export default LoginForm;