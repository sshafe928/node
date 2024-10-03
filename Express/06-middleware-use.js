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
//depending on the order of where you put the logger, whatt he logger uses will change
app.use(logger)

app.get('/about', (req, res)=>{
    res.send('About')
});

app.use('/api', [logger, authorize])
/*
this will apply the logger to anypath that includes /api as a part of its path
this is a nice way for you to run your logger on an api to stop ertain requests
But still allow them on the home and documentation pages*/

app.get('/api/products', (req, res)=>{
    res.send("products")
})

app.get("/api/items", (req, res)=>{
    console.log(req.user)
    res.send("Items")
})

app.listen(5000, ()=>{
    console.log("running on port 5000")
})