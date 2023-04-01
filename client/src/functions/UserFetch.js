import axios from 'axios';
import { useDispatch } from 'react-redux';

export const getJWTOfLogin = (url = '', login) => {
    console.log(login);
    if (url === '') {
        url = 'http://localhost:3001/api/v1/user/login';
    }
    return axios
        .post(url, login)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            return false;
        });
};

export const getAllUsers = (params) => {
    return axios
        .get(`user/`, { params: { params } })
        .then((res) => {
            return res.data;
        })
        .catch((err) => console.log(err));
};

export const getUserByUserName = (url = '', username) => {
    if (url === '') {
        url = `http://localhost:3001/api/v1/user/${username}`;
    }
    // console.log(url);
    return axios
        .post(url)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            return false;
        });
};

export const addUser = (url, user) => {
    if (url === '') {
        url = 'http://localhost:3001/api/v1/user/signup';
    }
    return axios
        .post(url, user)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            return false;
        });
};
