import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:3001"
});

export const  UploadImage = (data) => {
    return Api.post('/upload/', data);
}
