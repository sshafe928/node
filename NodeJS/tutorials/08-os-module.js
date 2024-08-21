const os = require('os')

// info about the current users device
const user = os.userInfo()
console.log(user)





// \method return the sustem uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds, ${os.uptime()/60} minutes, ${os.uptime()/3600} hours`)
// convert into hours mins and seconds

function convertTime(seconds){
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor(seconds % 3600)/60
    const secs = seconds % 60
    return `${hours} : ${minutes} : ${secs}`
}

console.log(convertTime(os.uptime()))




// computer info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    device: os.platform(),
    arch: os.arch(),
}
console.log(currentOS)