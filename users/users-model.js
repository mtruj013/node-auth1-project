const db = require('../data/db-config.js');

module.exports = {
    find,
    findBy,
    add
}

function find() {
    return db('users')
}

function findBy(filter) {
    return db("users").where(filter);
}


function add(user) {
    return db('users')
    .insert(user, 'id')
    .then(([id]) => id)
}