import {IUserDB} from "../models/IUserDB";
import {makeAutoObservable, makeObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import IAuthResponse from "../models/IAuthResponse";
import APIurl from "../resources/APIurl";
import IUserClient from "../models/IUserClient";
import IUserFile from "../models/IUserFile";
import FileService from "../services/FileService";

export default class Store{
     user = {} as IUserDB
     isAuth:boolean = false
     authService= {} as AuthService
     fileService= {} as FileService
    constructor() {
         this.authService=new AuthService()
         this.fileService=new FileService()
        makeAutoObservable(this)
    }
    setUser(value: IUserDB) {
        this.user = value
    }

    setAuth(value: boolean) {
        this.isAuth = value
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
    async getFiles(userID:number){
         try{
             const response = await this.fileService.getFiles(userID)
             return response.data
         }catch (e){
             console.log(e)
         }
    }
}