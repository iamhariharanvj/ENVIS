const express = require('express')
const connectDB = require('./db/db')
const menuRoutes = require('./routes/menuRoutes')
const bodyParser = require('body-parser')
const app = express()



connectDB();

app.use(bodyParser.json());
app.use('/',menuRoutes)

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`)
})