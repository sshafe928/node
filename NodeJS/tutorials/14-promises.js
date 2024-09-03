const {readFile, writeFile} = require('fs')
const path = require('path')
let ip= '127.0.0.1'
const myPromise = new Promise(function(resolve, reject){
    //async operations
    if(ip === '127.0.0.1' || ip === '127.0.0.5'){
        resolve('success')
    }else{
        reject('failed mission! no respawn')
    }
})
console.log(myPromise)

//next promise
let actualFile = path.join(__dirname, '/content/first.txt');

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.toUpperCase()); // Corrected 'toUppercase' to 'toUpperCase'
        }, 500);
    });
}

function saveData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data saved: ${data}`);
        }, 500);
    });
}

function readFilePromise(pathway) {
    return new Promise((resolve, reject) => {
        readFile(pathway, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

readFilePromise(actualFile)
    .then(content => processData(content))
    .then(processedData => saveData(processedData))
    .then(result => {
        console.log(result); // Output: Data saved: <processed data>
    })
    .catch(error => {
        console.error(error); // Output error if there's an issue
    });