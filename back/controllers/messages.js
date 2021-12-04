const messages = []
exports.createMessage = (req,res)=>{
    const {user, content} = req.body;
    const date = new Date().toTimeString().slice(0,8)
    messages.push({user,content, date})
}
exports.updateMessages = (req,res)=>{
    res.setHeader('Content-Type', 'text/event-stream')
    res.write(`data:
        {\n
            data: "content": ${messages[messages.length-1].content}},\n
            data: "user": ${messages[messages.length-1].user}\n
            data: }\n\n`)
    res.on('close',()=>{res.end()})
}