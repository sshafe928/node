const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    console.log('user hit resource')
    res.status(200).send('home page found')
})

app.get('/about', (req, res) =>{
    res.status(200).send('about page found')
})

app.get('*', (req, res) =>{
    res.status(404).send('<h1>Resources not found</h1>')
})

app.listen(5000,()=>{
    console.log('listening on http://localhost:5000')
})