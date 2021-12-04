const {messages,users} = require('../controllers/Data')
exports.createMessage = (req,res)=>{
    const {user, content} = req.body;
    const date = new Date().toTimeString().slice(0,8)
    messages.push({user,content, date})
    res.send("message added")
}
exports.updateMessages = (req,res)=>{
    res.setHeader('Content-Type', 'text/event-stream')
    const updateLog = setInterval(()=>{
        const data = {messages,users}
        res.write(`data: ${JSON.stringify(data)}\n\n`)    
    },1000) 
    res.on('close',()=>{
        clearInterval(updateLog);
        res.end()})
}