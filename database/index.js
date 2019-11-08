const loki = require('lokijs');

const db = new loki('db.json');

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