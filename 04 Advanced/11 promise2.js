// Promise.all

const { reject, resolve } = require('promise')
const Promise = require("promise")

function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("CodeKofy")
        }, 3000);
    })
}

function getMobile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("90775332009887")
        }, 2000);
    })
}

Promise.all([getName(), getMobile()]).then((result) => {
    console.log(result);
})