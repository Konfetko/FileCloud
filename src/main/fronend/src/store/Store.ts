import {IUserDB} from "../models/IUserDB";
import {makeAutoObservable, makeObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import IAuthResponse from "../models/IAuthResponse";
import APIurl from "../resources/APIurl";
import IUserClient from "../models/IUserClient";

export default class Store{
     _user = {} as IUserDB
     _isAuth:boolean = false
     authService= {} as AuthService
    constructor() {
         this.authService=new AuthService()
        makeAutoObservable(this)
    }

    setUser(value: IUserDB) {
        this._user = value;
    }

    setAuth(value: boolean) {
        this._isAuth = value;
    }
    async login(user:IUserClient){
        try{
            const response = await this.authService.authorizeUser(user)
            console.log(response)
            localStorage.setItem("token",response.data.accessToken)
            this.setUser(response.data.user)
            this.setAuth(true)
        }catch (e){
            console.log(e)
        }
    }
    async registration(user:IUserClient){
        try{
            const response = await this.authService.registrationUser(user)
            console.log(response)
            localStorage.setItem("token",response.data.accessToken)
            this.setUser(response.data.user)
            this.setAuth(true)
        }catch (e){
            console.log(e)
        }
    }
    async logout(){
         try{
             localStorage.removeItem("token")
             this.setAuth(false)
             this.setUser({} as IUserDB)
         }catch (e){
             console.log(e)
         }
    }
    async checkAuth(){
         try{

             const response = await axios.get<IAuthResponse>(`${APIurl}/users/refresh`,{withCredentials:true})
             //console.log(response)
             localStorage.setItem("token",response.data.accessToken)
             this.setAuth(true)
             this.setUser(response.data.user)
         }catch (e){
             console.log(e)
         }
    }
}