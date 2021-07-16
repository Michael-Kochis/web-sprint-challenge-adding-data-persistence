const db = require('../../data/dbConfig')

async function find() {
    return await db('tasks');
}

async function findById(task_id) {
    return await db('tasks')
        .where ({ task_id })
        .first();
}

async function create(neoProject) {
    return await db('tasks')
        .insert(neoProject);
}

module.exports = {
    find,
    findById,
    create
}

