const {readFile, writeFile,readFileSync, writeFileSync, read, write} = require('fs')
const path = require('path')

console.log('winter is boring')
// read and writeFile are asyncronous allowing for the program to continue execution untill the other process has completed

// readSync and writeFileSync are syncronous and will stop to execute the process before executing the rest of the code

readFileSync(path.join(__dirname, 'content/first.txt'), 'utf8', (err,result)=> {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFileSync(path.join(__dirname, 'content/first.txt'), 'utf8', (err,result)=> {
        if(err){
            console.log(err)
            return
        }
        const second = result
    })
})