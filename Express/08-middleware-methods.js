const express= require('express')
const app = express();
let {people} = require('./db/data')

//static assets
app.use(express.static('./public'))

/*
Parse form data built in middle wre functioning express that parses incoming requests. if ou check req.body without it then you will see that the value is undefinied
*/

app.use(express.urlencoded({extended: false}))

// Parse form data thia works similarly to the urlencoded function but handles the json
app.use(express.json())

app.get('/api/people', (req,res) =>{
    res.json({success: true, data: people});
})

app.post('/api/people', (req,res) =>{
    console.log(req.body)
    const {name} = req.body
    //if the new person has a name
    if(name){
        return res.status(201).json({success: true, data: name})
    }
return res.status(404).json({success: false, msg: "please provide a name"});
})

//above is for javascript.html
// below is for the index.html

app.post("/login", (req,res) =>{
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(201).json({success: true, data: name})
    }
    res.send('Please provide Credentials')
})

//server listen
app.listen(5000, ()=>{
    console.log('running on port 5000')
})