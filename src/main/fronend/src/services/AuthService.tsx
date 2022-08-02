import {IUserDB} from "../models/IUserDB";
import sender from "../resources/http/httpAxios";
import {AxiosResponse} from "axios";
import IAuthResponse from "../models/IAuthResponse";
import IUserClient from "../models/IUserClient";

export default class AuthService {
    async authorizeUser(user: IUserClient) : Promise<AxiosResponse<IAuthResponse>>{
        return sender.post<IAuthResponse>("users/login",user)
    }
    async registrationUser(user:IUserClient) : Promise<AxiosResponse<IAuthResponse>>{
        return sender.post("users/registration",user)
    }
}