import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:3001"
});

export const LogIn = (formData) => {
    return Api.post('/auth/login', formData);
}

export const SignUp = (formData) => {
    return Api.post('/auth/register', formData);
}
