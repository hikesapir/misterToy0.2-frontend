'use strict';

import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'
import axios from 'axios';

const USERS_KEY = 'usersDB'
// const gUsers = _createUsers();


export const userService = {
    login,
    // checkLogin,
    signup,
    logout,
    getLoggedinUser,
}

const AUTH_URL = (process.env.NODE_ENV !== 'development') ? '/api/auth/' : '//localhost:3030/api/auth/';


async function login({ username, password }) {
    try {
        const res = await axios.post(AUTH_URL + 'login', { username, password })
        utilService.saveToStorage('loggedinUser', res.data)
        return res.data
    } catch (err) {
        console.log('login err', err);
        throw err
    }
}

async function logout() {
    try {
        const res = await axios.post(AUTH_URL + 'logout')
        utilService.saveToStorage('loggedinUser', '')
        return res.data
    } catch (err) {
        console.log('logout err', err);
    }
}

async function signup({ fullname, username, password }) {
    try {
        const res = await axios.post(AUTH_URL + 'signup', { fullname, username, password })
        utilService.saveToStorage('loggedinUser', res.data)
        return res.data
    } catch (err) {
        console.log('signup err', err);
    }
}

function getLoggedinUser() {
    return utilService.loadFromStorage('loggedinUser')
}

function _createUsers() {
    var users = [
        {
            "fullname": "sus popo",
            "username": "sus15",
            "password": "123",
            "isAdmin": false
        },
        {
            "fullname": "sus popo",
            "username": "admin",
            "password": "123",
            "isAdmin": true
        },
        {
            "fullname": "sus popo",
            "username": "sasa",
            "password": "123",
            "isAdmin": false
        }
    ]
    storageService.postMany(USERS_KEY, users)
    return users

}