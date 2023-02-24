import axios from 'axios';

const BASE_URL = "http://surc.online/api/";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})