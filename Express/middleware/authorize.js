const authorize = (req, res,next) =>{
    //this is improper use for api keys, just for an example


const {apiKey}= req.query
if (apiKey === 'ping'){
    console.log('Access Granted')
    //this modifies the request for the next responce
    req.user = {name:'Jersy Mikes', id: 123456789}
    next()
}else{
    console.log('Access Denied')
    res.send({results:[], status: 401, message: 'Access Denied'})
}
}

module.exports = authorize