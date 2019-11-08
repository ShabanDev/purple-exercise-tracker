const db = require('../database');
const shortid = require('shortid');

function createUser(req, res){
    let username = req.body.username;
    var user = db.users.findOne({
        username: username
    });

    if(!user){
        user = db.users.insert({
            username: username,
            _id: shortid.generate()
        });

        //db.save();
        
        res.json({
            username: user.username,
            _id: user._id
        });
    }
    else {
        res.json({
            username: user.username,
            _id: user._id
        });
    }
}


module.exports = {
    createUser
};