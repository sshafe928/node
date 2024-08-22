const http = require('http')
const server = http.createServer((req, res) => {
    // consition rendering
    if(req.url === '/'){
        res.end("welcome to the homepage")
    } 
    else if(req.url === '/about'){
        res.end("there is nothing to know about me")
    } 
    else {
        res.end('404 you suck')
    }
})


server.listen(5000)