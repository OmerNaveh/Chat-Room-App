const {messages,users} = require('../controllers/Data')
const {EventEmitter} = require('events')

const msgEvents = new EventEmitter();
msgEvents.on('createMessage', ({user,content, date})=>{
    messages.push({user,content, date})
    msgEvents.emit('updateLog')
})
exports.createMessage = (req,res)=>{
    const {user, content} = req.body;
    const date = new Date().toTimeString().slice(0,8)
    msgEvents.emit('createMessage',{user,content,date});
    res.send("message added")
}
exports.updateMessages = (req,res)=>{
    res.setHeader('Content-Type', 'text/event-stream')
    // res.setHeader("Access-Control-Allow-Headers", "*");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    const data = {messages,users}
    res.write(`data: ${JSON.stringify(data)}\n\n`)    
    msgEvents.on('updateLog', ()=>{
        res.write(`data: ${JSON.stringify(data)}\n\n`)   
    })
    res.on('close',()=>{
        res.end()})
}