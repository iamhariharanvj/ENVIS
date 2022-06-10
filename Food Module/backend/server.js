const express = require('express')
const connectDB = require('./db/db')

const app = express()

connectDB();

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`)
})