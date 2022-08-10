import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router";
import cls from "../scssModules/AuthorizationPage.module.scss";
import IChangeVisibility from "../models/IChangeVisibility";
import {Context} from "../index";
import IUserClient from "../models/IUserClient";
import validateUser from "../hooks/validate";
import Error from "./Error";



const LoginForm = ({change}:IChangeVisibility) => {

    let [user,setUser] = useState<IUserClient>({ username:"",password:"",role:{roleTitle:""}})
    const [error,setError] = useState('')
    let [inputType,setInputType]= useState<String>("password")
    let navigate = useNavigate()
    const {store} = useContext(Context)


    const authorize= async(event: React.FormEvent)=>{
        event.preventDefault()

        setError(validateUser(user))
        if(!error){
            return
        }
        console.log(error)

        const response = await store.login(user)
        if(store.isAuth)
            navigate(`/user/files${store.user.idUser}`)
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
                {error && <Error error={error}/>}
                <button className={cls.button + " "+cls.loginButton} >ВОЙТІ</button><br/>
                <button className={cls.button +" "+cls.createButton} onClick={changeForm}>СОЗДАТЬ УЧЕТНУЮ ЗАПІСЬ</button>
            </form>
        </div>
    );
};

export default LoginForm;