'use strict';
//create read update delete list

import { storageService } from "./async-storage-service.js";
import { utilService } from "./util-service.js";

const TOY_KEY = 'toysDB'
// const gToys = _createToys()

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
}

function query() {
    return storageService.query(TOY_KEY)
}

function getById(id) {
    return storageService.get(TOY_KEY, id)
}

function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price: 0,
        labels: [],
        createdAt: new Date(Date.now()).toLocaleString(),
        inStock: true,
        reviews: ['Good', 'Nice', 'Fun'],
    };
}

function save(toy) {
    console.log(toy);
    if (toy._id) return storageService.put(TOY_KEY, toy)
    return storageService.post(TOY_KEY, toy)
}

function remove(id) {
    return storageService.remove(TOY_KEY, id)
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