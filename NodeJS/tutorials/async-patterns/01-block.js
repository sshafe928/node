/* the point of this example is that it will take a long time to run the loop in the middle called blocking code
if you have 3 tabs open to the hime page everything will load fine but change one page to / about and then event the home page will take
time to load since the about page is loading, thus blocking the entire server
*/

const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url == '/'){
        res.end('HOME PAGE')
    }
    //blocking code
    else if(req.url == '/about'){
        for(let i = 0; i<100; i++){
            for(let j = 0; j < 100; j++){
                console.log(`${i} ${j}`)
            }
        }
    res.end('ABOUT PAGE')
    }
    else
        res.end("ERROR PAGE YOU SUCK")
});

server.listen(5000, ()=>{
    console.log("server listening on PORT 5000..")
})

