const express = require('express');
const app = express();
const personRouter = require('./routes/people-router')

app.use(express.urlencoded({ extended: false }))
app.use('/person', personRouter)


// from now on this is our app.listen setup
const initServer = async () => {
    try {
        app.listen(7000, () => {
            console.log('Server is running on port 7000')
        });
    } catch (error) {
        console.error('Error starting server', error);
    }
}

initServer();