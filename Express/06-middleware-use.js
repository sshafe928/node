const express = require('express')
const app = express();
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize')

/* 
req => middleware => response

order matters if your plce the appl.use after the home pathway get, then it wont run on the home get pathway since the response will end before the middleware has a chance to run

if you haqve the server middleware then you can caall them in an array where again order matters
*/



app.get('/', (req, res)=>{
    res.send('welcome home')
})

app.use(logger)

app.get('/about', (req, res)=>{
    res.send('About')
})

app.listen(5000, ()=>{
    console.log("running on port 5000")
})