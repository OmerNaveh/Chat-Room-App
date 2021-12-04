const express= require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000
const userRouter = require('./routers/user')
const messagesRouter = require('./routers/messages')

app.use(cors());
app.use(express.json())
app.listen(port, ()=>{console.log(`running on ${port}`)})
app.use('/users', userRouter)
app.use('/meesages', messagesRouter)