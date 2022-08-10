import IUserClient from "../models/IUserClient";
import {useState} from "react";

const validateUser=(user:IUserClient):string=>{

    const username = user.username.trim()
    const password = user.password

    console.log(user)
    if(username.length===0)
        return "Введите имя пользователя"

    if(username.length<6)
        return "Имя пользователя не может быть меньше 6 символов"

    if(password.length<8)
        return "Пароль слишком короткий"

    return ''
}
export default validateUser;