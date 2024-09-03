/* we ar egoing to get the custom emoitter class needed if you want to custom extend from class otherwise
for emitting and handles events creates an instance of this class */

const EventEmitter = require('events')

const customEmitter = new EventEmitter

//the on and emit methods are to keep track of the order, you can also use additional arguments/parameters and the built in function/module
// can utilize it


customEmitter.on('response',(name,id) =>{
    console.log(`data recieved user: ${name} with id ${id}`)
})

customEmitter.on('testing',()=>{
    console.log(`some other logic is at work`)
})

customEmitter.emit('response','jhon',34)
customEmitter.emit('testing')


//example:

class TemperatureSensor extends EventEmitter{
    constructor(){
        super()
        this.temperature = 95
    }

    updateTemperature(newTemp){
        this.temperature = newTemp
        this.emit('TemperatureUpdate', newTemp)

    }
}

const sensor = new TemperatureSensor

//listener for temo updates

sensor.on('TemperatureUpdate', (temp) =>{
    console.log(`Temperature updated: ${temp} Farenheit`)
    //or trigger a bew function api call or calculation
})
//simulate temperature changes

sensor.updateTemperature(25)
sensor.updateTemperature(104)