'use strict';

import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'
import axios from 'axios';
//yaron addition
import { httpService } from './http.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'


axios.defaults.withCredentials = true;

const USERS_KEY = 'usersDB'
// const gUsers = _createUsers();


export const userService = {
    login,
    // checkLogin,
    signup,
    logout,
    getLoggedinUser,
}

const AUTH_URL = 'auth/';

// login({ username: 'admin', password: 'admin' })
async function login({ username, password }) {
    try {
        const res = await httpService.post(AUTH_URL + 'login', { username, password })
        utilService.saveToStorage('loggedinUser', res)
        return res
    } catch (err) {
        console.log('login err', err);
        throw err
    }
}

async function logout() {
    try {
        const res = await httpService.post(AUTH_URL + 'logout')
        utilService.saveToStorage('loggedinUser', '')
        return res
    } catch (err) {
        console.log('logout err', err);
    }
}

async function signup({ fullname, username, password }) {
    try {
        const res = await httpService.post(AUTH_URL + 'signup', { fullname, username, password })
        utilService.saveToStorage('loggedinUser', res.data)
        return res
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