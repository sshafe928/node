let {people} = require('../db/data')
// get functions for sll people
const readPeople = (req,res) =>{
    res.json({success:true, data: people})
}

//post function for create people
let lenght = people.lenght +1
const createPeople = (res,res)=>{
    const {name,id} = req.body
    if(!name){
        return res.status(404).json({success:false, msg:'name is required'})
    }
    let people = {id: length++, name: name}
    people.push(person)
    res.status(201).json({success:true, data:[person]})
}

//put function for update people
const updatePeople = (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find(person => person.id === Number(id))

    if(!person){
        return express.json({success:false, data: []})
    }

    const newPeople = people.map(person => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(202).json({data: newPeople, success: true})
}


const deletePerson = (req,res) => {
    const {id} = req.params
    const person = people.find(person => person.id === Number(id))

    if(!person){
        return res.status(404).json({success:false, msg:'no matching id found'});
    }

    people = people.filter(person =>{
        return person.id !== Number(id)
    })

    res.status(202).json({success:true, data: people})
}

module.exports = {createPeople, readPeople, updatePeople, deletePerson}