import axios from "axios";


export const apiManager = axios.create({
    baseURL : "https://dummyjson.com/",
    responseType : 'json',
    withCredentials : true
})