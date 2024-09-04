const {createReadStream, createWriteStream} = require('fs')

//default size of a chunk in bytes is 64kb
//last buffer- the remainder left
//highWaterMark - conrols the size of the chunks

const stream = createReadStream('./content/big.txt',{highWaterMark: 9000})
// const stream = createReadStream('./content/big.txt',{encoding: 'utf8'})


stream.on('data', function (chunk){
    console.log(chunk)
    console.log("************************************************************************************************")
})

stream.on("error", function (err){console.log(err)})