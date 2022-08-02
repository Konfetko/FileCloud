import IUserClient from "./IUserClient";

export interface IUserDB extends IUserClient{
    id:number,
    files:any[]
}