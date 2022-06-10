const express = require('express')
const mongoose = require('mongoose')

const app = express()
const dbUrl = 'mongodb+srv://admin:nau8E4dsXzKobT1j@hostelfoodinfo.xauah0a.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbUrl, (err)=>{
    if (err) {
        console.log(`Error connecting to MongoDB ${err.message}`)
    }
    else {
        console.log(`MongoDB connection succeeded`)
    }
})


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`)
})