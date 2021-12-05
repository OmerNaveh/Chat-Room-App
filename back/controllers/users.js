const {users} = require('../controllers/Data')
// const jwt = require('jsonwebtoken')
exports.logIn = (req,res)=>{
    const userName = req.body.userName;
    if(!users.includes(userName)){
        users.push(userName);
    }
    // const token = jwt.sign(userName, 'secret')
    // console.log(token);
    // res.cookie(token)
    res.end();
}