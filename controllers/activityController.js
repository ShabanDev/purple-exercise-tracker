const db = require('../database');

function addActivity(req, res){

    let user = db.users.findOne({
        _id: req.body.userId
    });

    if(!user){
        res.send('unknown _id');
    }
    else {
        let date = req.body.date;
        if(!date){
            date = (new Date()).getTime();
        }
        else {
            date = Date.parse(date);
        }
        let activity = db.activities.insertOne({
            _id: req.body.userId,
            username: user.username,
            date: date,
            duration: parseInt(req.body.duration),
            description: req.body.description
        });

        //db.save();

        res.json(activity);
    }
}

function getActivities(req, res){
    let query = {
        _id: req.query.userId
    }
    if(req.query.from || req.query.to){
        query.date = {}
    }
    if(req.query.from){
        query.date.$gte = Date.parse(req.query.from);
    }
    if(req.query.to){
        query.date.$lte = Date.parse(req.query.to);
    }
    if(req.query.limit){
        query.$limit = parseInt(req.query.limit);
    }
    res.json(db.activities.find(query));
}

module.exports = {
    addActivity,
    getActivities
}