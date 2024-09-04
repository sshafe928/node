const http = require('http');

// const server = http.createServer((req,res) =>{
//     if(req.url == '/'){
//         res.end('This is the homepage')
//     }
//     /// ect
// })

// server.listen(5000, (err)=>{
//     if(err)
//         console.log(err)
    
//     console.log('listening on port 5000')
// })

// event emitter API

const server = http.createServer()
//emit request event

//subscrie to it, listen to it, respond to it

server.on("request",(req,res) =>{
    if(req.url == '/'){
        console.log(req.url)
        res.end('This is the homepage')
    }else if (req.url == '/about'){
        console.log(req.url)
        res.end('About')
    }else{
        res.end('404!!!!')
    }
})


server.listen(5000, (err)=>{
    if(err)
        console.log(err)
    
    console.log('listening on port 5000')
});
