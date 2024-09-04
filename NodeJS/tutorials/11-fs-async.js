const {readFile, writeFile,readFileSync, writeFileSync, read, write} = require('fs')
const path = require('path')

console.log('winter is boring')
// read and writeFile are asyncronous allowing for the program to continue execution untill the other process has completed

// readSync and writeFileSync are syncronous and will stop to execute the process before executing the rest of the code


// ASYNC

// readFileSync(path.join(__dirname, 'content/first.txt'), 'utf8', (err,result)=> {
//     if(err){
//         console.log(err)
//         return
//     }
//     const first = result
//     readFileSync(path.join(__dirname, 'content/first.txt'), 'utf8', (err,result)=> {
//         if(err){
//             console.log(err)
//             return
//         }
//         const second = result
//     })
// })


// readFile('./content/first.txt', 'utf8', (err, firstData) => {
//     if (err) {
//         console.error(err);
//         return;
//     }


//     readFile('./content/second.txt', 'utf8', (err, secondData) => {
//         if (err) {
//             console.error(err);
//             return;
//         }

//         const result = `${firstData} and ${secondData}`;
//         writeFile('./content/result-min-grenade.txt', result, (err) => {
//             if (err) {
//                 console.error(err);
//                 return;
//             }
//             console.log("Async write complete");
//         });
//     });
// });

// // Testing loop
// for (let index = 0; index < 1000; index++) {
//     console.log(`Testing ...`);
// }


//SYNC
try {
    const firstData = readFileSync('./content/first.txt', 'utf8')
    for (let index = 0; index < 1000; index++) {
        console.log('testing server')
    }
    const secondData = readFileSync('./content/second.txt', 'utf8')
    const result = `${firstData} and ${secondData}`;
    writeFileSync('./content/result-min-grenade.txt', result)
} catch (error) {
    console.log(err)
    
}