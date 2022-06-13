const express = require('express');
require('dotenv').config();
const app = express();
require('./db/conn')

const port = 8005;


app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})