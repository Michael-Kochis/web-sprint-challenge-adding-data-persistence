const db = require('../../data/dbConfig')

async function find() {
    return await db('tasks');
}

async function create(neoProject) {
    return await db('tasks')
        .insert(neoProject);
}

module.exports = {
    find,
    create
}

