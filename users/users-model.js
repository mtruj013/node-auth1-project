const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('users')
}

function findById(id) {
    return db("users").where(id);
}


async function add(user) {
    try {
        const [id] = await db('users')
            .insert(user, "id");
        return findById(id)
    } catch (error) {
        console.log(error)
        throw error;
    }
}