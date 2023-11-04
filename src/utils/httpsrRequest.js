import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const getSearch = async (path, params) => {
    return await request.get(path, params).then((res) => {
        return res.data;
    });
};
