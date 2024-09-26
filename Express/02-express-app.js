const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, './public')))
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/edit', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/edit.html'))
})

app.get('/javascript', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/javascript.html'))
})

app.all('*', (req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000, ()=>{
    console.log('Listening on http://localhost:5000')
})