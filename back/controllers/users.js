const {users} = require('../controllers/Data')
exports.logIn = (req,res)=>{
    const userName = req.body.userName;
    if(!users.includes(userName)){
        users.push(userName);
    }
    res.end();
}