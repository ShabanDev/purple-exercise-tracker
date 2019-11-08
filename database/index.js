const loki = require('lokijs');

const db = new loki('db.json', {
    autoload: true,
    autosave: true,
    autosaveInterval: 4000
});

let collections = {};
collections.users = db.getCollection('users');

if(!collections.users){
    collections.users = db.addCollection('users');
}

collections.activities = db.getCollection('activities');

if(!collections.activities){
    collections.activities = db.addCollection('activities');
}


module.exports = collections;