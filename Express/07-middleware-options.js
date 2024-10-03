const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.static('./public'))

//morgan is a logger
app.use(morgan('short'))

app.get('/', (req, res)=>{
    res.send('welcome Home Chumps!')
})
app.get('/about', (req, res)=>{
    res.send('About you: Still a Chump!')
})
app.get('/api/products', (req, res)=>{
    res.send('Products: for chumps')
})
app.get('/api/items', (req, res)=>{
    res.send('Items for chumps')
})
app.get('*', (req, res)=>{
    res.send('404 - Crap not found')
})

app.listen(5000, ()=>{
    console.log('running on port 5000')
})