import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
const service = axios.create();

// 请求拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    },
);

// 响应拦截器
service.interceptors.response.use(
    async (response: AxiosResponse) => {
        if (response.status === 200) {
            return response.data;
        }
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default service;
