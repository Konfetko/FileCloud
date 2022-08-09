import sender from "../resources/http/httpAxios";
import {AxiosResponse} from "axios";
import IUserFile from "../models/IUserFile";

export default class FileService{
    async uploadFile(userID:number,file:any){//,{headers:{"Content-Type":"multipart/form-data"}}
        return await sender.post(`/files/fileupload${userID}`,file,{headers:{"Content-Type":"multipart/form-data"}})
    }
     getFiles(userID:number){//:Promise<AxiosResponse<IUserFile[]>>{
        return  sender.get(`/files/getFiles${userID}`)
    }
    async getFile(fileId:number):Promise<AxiosResponse<IUserFile>>{
        return  sender.get(`/files/getFile${fileId}`,{responseType:'blob'})
    }
    async deleteFile(){

    }
}