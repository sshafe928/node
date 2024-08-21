const path = require('path');

console.log(path.sep)
const filePath = path.join("/content", "subfolder", "test.txt")
console.log(__dirname)
console.log(filePath)

const base = path.basename(filePath)
console.log(base)


const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")


console.log(absolute)

// absolute url includes down the the c drive
// relative url would be a few paths to the file
