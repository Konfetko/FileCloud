import sender from "../resources/http/httpAxios";
import header from "../components/Header";
import {AxiosResponse} from "axios";
import IUserFile from "../models/IUserFile";

export default class FileService{
    async uploadFile(userID:number,file:any){
        return await sender.post(`/files/fileupload${userID}`,file,{headers:{"Content-Type":"multipart/form-data"}})
    }
     getFiles(userID:number){//:Promise<AxiosResponse<IUserFile[]>>{
        return  sender.get(`/files/getFiles${userID}`)
    }
    async getFile(userID:number,fileTitle:string):Promise<AxiosResponse<IUserFile>>{
        return  sender.get(`/files/getFile${userID}&${fileTitle}`)
    }
    async deleteFile(){

    }
}