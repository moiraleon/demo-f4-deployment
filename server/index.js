const express= require('express');
const path = require('path');
const app =express();

const port = process.env.PORT||5500

app.listen(port,()=>{console.log(`listening on port ${port}`)})