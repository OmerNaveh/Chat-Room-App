const express= require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000

app.use(express.json())
app.listen(port, ()=>{console.log(`running on ${port}`)})