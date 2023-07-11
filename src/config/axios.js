import axios from "axios";

const config = {
    baseURL: import.meta.env.VITE_API_BASE
}

export const AxiosConfig = axios.create(config);

AxiosConfig.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

AxiosConfig.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
