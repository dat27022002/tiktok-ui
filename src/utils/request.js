import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const getSearch = async (path, params) => {
    return await request.get(path, params).then((res) => {
        return res.data;
    });
};
