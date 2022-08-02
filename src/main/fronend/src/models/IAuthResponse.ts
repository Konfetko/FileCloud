import {IUserDB} from "./IUserDB";

export default interface IAuthResponse{
    accessToken:string,
    refreshToken:string,
    user:IUserDB
}