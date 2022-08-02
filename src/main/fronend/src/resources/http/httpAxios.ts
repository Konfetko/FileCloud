import axios from "axios";
import APIurl from "../APIurl";

const sender = axios.create({
    baseURL:APIurl,
    withCredentials:true
})

sender.interceptors.request.use( (config)=> {
    // @ts-ignore
    config.headers.Authorization =`Bearer ${localStorage.getItem("token")}`
    return config
})
export default sender;