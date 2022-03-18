'use strict';
//create read update delete list

import { storageService } from "./async-storage-service.js";
import { utilService } from "./util-service.js";
import axios from 'axios';


const TOY_KEY = 'toysDB'
// const gToys = _createToys()

const TOY_URL = (process.env.NODE_ENV !== 'development') ? '/api/toy/' : '//localhost:3030/api/toy/';


export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
}

async function query(filterBy) {
    console.log('qurey');
    try {
        const res = await axios.get(TOY_URL, { params: filterBy })
        console.log('toys', res.data);
        return res.data
    } catch (err) {
        console.log('query err', err);
        throw err
    }
}

async function getById(toyId) {
    try {
        const res = await axios.get(TOY_URL + toyId)
        return res.data
    } catch (err) {
        console.log('getById err', err);
        throw err
    }
}

async function save(toy) {
    try {
        var res = ''
        if (toy._id) {
            res = await axios.put(TOY_URL + toy._id, toy)
        } else {
            res = await axios.post(TOY_URL, toy)
        }
        return res.data
    } catch (err) {
        console.log('save err', err);
        throw err
    }
}

async function remove(toyId) {
    try {
        const res = await axios.delete(TOY_URL + toyId)
        return res.data
    } catch (err) {
        console.log('remove err', err);
        throw err
    }
}

function getEmptyToy() {
    return {
        name: '',
        price: 0,
        labels: [],
        createdAt: Date.now(),
        inStock: true,
        reviews: ['Good', 'Nice', 'Fun'],
    };
}

function _createToys() {
    const toys = [{
        "_id": "Lk3sn",
        "name": "shushu",
        "price": 401,
        "labels": [
            "Baby",
            "Box game"
        ],
        "createdAt": 1647468191714,
        "inStock": true,
        "reviews": [
            "Good",
            "Nice",
            "Fun"
        ]
    },
    {
        "_id": "WxSpm",
        "name": "rarar",
        "price": 90,
        "labels": [
            "Doll"
        ],
        "createdAt": 1647468154224,
        "inStock": true,
        "reviews": [
            "Good",
            "Nice",
            "Fun"
        ]
    },
    {
        "_id": "H9Zzs",
        "name": "ggaag",
        "price": 80,
        "labels": [
            "Baby"
        ],
        "createdAt": 1647468081054,
        "inStock": true,
        "reviews": [
            "Good",
            "Nice",
            "Fun"
        ]
    }]
    storageService.postMany(TOY_KEY, toys)
    return toys
}