import axios from 'axios';
import {UserInfo} from "../types/user";

const API_URL = 'http://localhost:8080/api/v1/auth';

axios.interceptors.request.use((config) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user && user.token) {
        config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});


interface ResponseData {
    token?: string;
    [key: string]: any; // This allows for other properties in the response data.
}

interface AxiosResponse {
    data: ResponseData;
}

const register = async (userInfo: UserInfo) => {
    const response: AxiosResponse = await axios.post(API_URL + "/register", {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        password: userInfo.password
    });

    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

const login = async (userInfo: UserInfo) => {
    const response: AxiosResponse = await axios
        .post(API_URL + '/authenticate', {
            email: userInfo.email,
            password: userInfo.password
        });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = async () => {
    localStorage.removeItem("user");
    const response: AxiosResponse = await axios.post(API_URL + "/logout");
    // console.log("logout response", response.data);
    return response.data;
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user") || "{}");
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
}
export default AuthService;
