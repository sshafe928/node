// commonjs, every file is a modules by default
// Modules - encapsulated code (only share the minimum)

const name = require("./04-names")
const message = require("./05-utils")
const data = require("./06-alternative-flavor")
require('./07-mind-grenade')


console.log(name.shakira)
console.log(name.pitbull)
message(name.daniel)
console.log(data.marriedPerson)
console.log(data.items[0])

