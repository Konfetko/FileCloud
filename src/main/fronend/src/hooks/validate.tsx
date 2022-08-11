import IUserClient from "../models/IUserClient";
import {useState} from "react";

export default function useValidate(user:IUserClient){
    const [error,setError] = useState('')
    const [isValidated,setValidated]=useState(false)

    const validate =()=>{
        let username = user.username.trim()
        let password = user.password
        if(username.length===0)
        {
            setError("Имя пользователя не может быть пустым")
            setValidated(false)
            return
        }
        if(username.length<6)
        {
            setError("Имя пользователя не может быть меньше 6 символов")
            setValidated(false)
            return
        }
        if(password.length<8){
            setError("Пароль не может быть меньше 8 символов")
            setValidated(false)
            return
        }


        setError('')
        setValidated(true)
    }

    return {error,isValidated,validate}
}