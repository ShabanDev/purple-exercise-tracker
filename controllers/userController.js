const loki = require('lokijs');
const shortid = require('shortid');

let db = new loki('db.json');
let users = db.getCollection('users') || db.addCollection('users');

function createUser(req, res){
    let username = req.body.username;
    var user = users.findOne({
        username: username
    });

    if(!user){
        user = users.insert({
            username: username,
            _id: shortid.generate()
        });

        db.save();
        
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