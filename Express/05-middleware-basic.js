const express = require('express')
const app = express()
const logger = require('./middleware/logger')

//request ==> middleware ==> responce

app.get('/', logger, (req, res, next)=>{
    res.send('Home')
})


app.listen(5000,()=>{
    console.log('listening on port 5000')
})