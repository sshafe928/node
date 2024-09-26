//ITS TIME FOR NODEMON, POSTMAN AND QUERIES/APIs
const express = require('express')
const app = express()
const{products} = require('./db/data')

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
})

//Return all products
app.get('/api/products', (req,res)=>{
    const newProducts = products.map(product =>{
        const {id, name, age} = product
        return {id, name, age}
    })
    res.json(newProducts)
    // res. json 
})

//This is how you set up params for the data query
// anything after : is considered a parameter
app.get('/api/products/:productID', (req,res)=>{
    console.log(req.query)
    const {productID} = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))

    if(!singleProduct){
        return res.status(404).send('Product not found/Item does not exist')
    }else if(req.query.life =='42'){
        return res.status(202).send('you have found the easter egg')
    }
    return res.json(singleProduct)
})
app.get('/api/products/:productID/reviews/:reviewID', (req,res) => {
    //params are in string format use number to make them a number
    //there is no limit to how many paramters you can make
    console.log(req.params)
    console.log(Number(req.params.productID))
    res.send(`this product has been reviewd by a person: its the best there is 10/10 would buy again`)
})

//sets up a  query that you can grab
app.get('/api/v1/query', (req,res)=>{
    console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.lenght < 1){
        return res.status(200).json({success: true, data:[]})
    }
    res.status(200).json(sortedProducts)
})


app.listen(5000, ()=>{
    console.log('Server listening on port 5000....')
})

//query parameter is seperated by a? if more are put it is seperated by a &