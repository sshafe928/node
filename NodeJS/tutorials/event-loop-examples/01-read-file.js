const {readFile, writeFile} = require('fs')
const path = require('path')




//Async
console.log('started the first task')
//check your file path
readFile(path.join(__dirname, "../content/first.txt"), 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')