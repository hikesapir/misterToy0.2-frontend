'use strict';

import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'


const USERS_KEY = 'usersDB'
// const gUsers = _createUsers();


export const userService = {
    checkLogin,
    // signup,
    logout,
    getLoggedinUser,
}

function checkLogin({ username, password }) {

    return storageService.query(USERS_KEY)
        .then(users => {
            var user = users.find(user => user.username === username && user.password === password)
            if (!user) throw 'Invalid Credentials'
            utilService.saveToStorage('loggedinUser', user)
            user = { ...user }
            return user
        })
}

function getLoggedinUser() {
    return utilService.loadFromStorage('loggedinUser')
}

function logout() {
    utilService.saveToStorage('loggedinUser', {
        fullname: null,
        username: null,
        password: null,
        isAdmin: null
    })

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