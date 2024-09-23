const express = require('express')
const path = requore('path')
const app = express()
const port = 5000

/*
set up static middle ware
middle ware is in the middle of the request and the respoce cycle of the node.js execution.
it also provides access to many functions like request and reponse objects

responce object is passed as the second argument/parameter to the requestListener Function
the reponse object represents the writable stream back to the client
--write() sends text or text streams tot he client
--writeHead() sends status and response headers to the client
--end() signals that the servers should consider that the responce is complete
--getHeader() returns the value of the specified header
--setimout() sets the timeout value of the socket to the specified value in milliseconds
--statusCode() returns the status code that will be sent to the client

for the writeHEad and statusCode methods the following are accepted:
100-199 Informaiton respince
200-299 Successfull responce
300-399 redirect message
400-499 client error
500-599 server error
you can find more detailed list at https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

the responce object is made by a client to a named host wich is located ont eh server. the aim of the request is to access resources of another server
a proper HTTpP request contains the following:
-- a request line
-- a series of http headers
-- a message body (if needed)



Request line:
Has 3 main ascpect:
-- a method like GET,POST,UPDATE,DELETE ect tells the server who is or what shoulf be donw with the resource
-- the path component identifies the resources on the server
-- the http version number showng what specification to which the client has treid to make the message comply


HTTP Headers:
Http headers are written on a message to provide the recipient with information about the request, the sender and theway in which the sender wants to communicate with the server/recipient
ex. {'conent-type' :'text/html'}  others include  - host, user-agent...ect
-- 
*/