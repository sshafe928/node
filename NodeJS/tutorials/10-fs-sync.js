const {readFileSync, writeFileSync} = require('fs')
const path = require('path')
console.log("winter is here...")

const first = readFileSync(path.join(__dirname, '/content/first.txt'), 'utf8')
const second = readFileSync(path.join(__dirname, '/content/second.txt'), 'utf8')
const third = readFileSync(path.join(__dirname, '/content/first.txt'), 'ucs2')


/*
ascii
base64
base64url
hex
usc2
utf8
binary
latin1
*/

writeFileSync(path.join(__dirname, '/content/banana.txt'), `Here is the result: ${first}, ${second}`, {flag: 'a'})
console.log("Task completed")
console.log(third)
