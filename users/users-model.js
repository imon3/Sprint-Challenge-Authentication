const db = require('../database/dbConfig');

module.exports = {
    find,
    findUserBy,
    findUserById,
    add
}

function find() {
    return db('users')
        .select('id', 'username', 'password')
}

function findUserBy(filter) {
    return db('users')
        .where(filter)
}

function findUserById(id) {
    return db('users')
        .where({ id })
        .first()
}

async function add(user) {
    const [id] = await db('users').insert(user)
    return findUserById(id)
}