const db = require('../data/db-config.js');

module.exports = {
    find,
    add
}

function find(){
    return db('users')
}


async function add(user){
    try{
        const [id] = await db('users')
        .insert(user, "id");
        //return find by id
    } catch(error){
        throw error;
    }
}