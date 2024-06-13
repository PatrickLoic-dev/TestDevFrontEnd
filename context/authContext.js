import { apiManager } from "./globalContext";

export const login = async data => {
    try {
        const result = await apiManager	("/user/login", {
            method : "POST",
            headers : {
                'Content-Type' : "application/json"
            },
            data : data
        })
        return result;
    } catch (error) {
        return error.response.data
    }
}

export const registration = async data  => {
    try {
        const result = await apiManager	("/users/add", {
            method : "POST",
            headers : {
                'Accept': 'application/json',
                'Content-Type' : "multipart/form-data",
            },
            data : data
        })
        return result;
    } catch (error) {
        return error.response.data
    }
}