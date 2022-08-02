import axios from "axios";
import APIurl from "../APIurl";

const sender = axios.create({
    baseURL:APIurl
})
export default sender;