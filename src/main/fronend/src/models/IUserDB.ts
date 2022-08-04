import IUserClient from "./IUserClient";

export interface IUserDB extends IUserClient{
    idUser:number,
    files:any[]
}