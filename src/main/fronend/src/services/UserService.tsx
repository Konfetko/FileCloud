import axios from "axios";
import {IUser} from "../models/IUser";
import sender from "../resources/http/httpAxios";

export default class UserService{
    authorizeUser(user: IUser){
        const response = sender.post("users/login",user);
        response.then(res=> console.log(res.data)).catch(e=>console.log(e))
    }
    registrationUser(user:IUser){
        const response = sender.post("users/registration",user)
        response.then(res=> console.log(res.data)).catch(e=>console.log(e))
    }

}