/* Node has built in  promises for many of theri libraries
allowing us to skip a lot of the promise setups but you should know how to set up a promise anyways
*/

const {readFile, writeFile} = require('fs').promises
const path = require('path')

const start = async()=>{
    try {
        const first = await readFile(path.join(__dirname, '../content/first.txt'), 'utf8')
        const second = await readFile(path.join(__dirname, '../content/second.txt'), 'utf8')
        await writeFile(path.join(__dirname, "../content/result-min-grenade.txt"), `this is ASYNC AWESOME: ${first}, ${second} `, {flag:'a'})
        console.log(first, second)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

start()