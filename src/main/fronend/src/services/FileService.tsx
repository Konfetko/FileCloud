import sender from "../resources/http/httpAxios";
import {AxiosResponse} from "axios";

export default class FileService{
    async uploadFile(userID:number,file:any){//,{headers:{"Content-Type":"multipart/form-data"}}
        return await sender.post(`/files/fileupload${userID}`,file,{headers:{"Content-Type":"multipart/form-data"}})
    }
     getFiles(userID:number){//:Promise<AxiosResponse<IUserFile[]>>{
        return  sender.get(`/files/fileList${userID}`)
    }
    async getFile(fileId:number):Promise<AxiosResponse<Blob>>{
        return  sender.get(`/files/file${fileId}`,{responseType:'blob'})
    }
    async deleteFile(fileId:number){
        return sender.delete(`/files/file${fileId}`)
    }
}