const db = require('../../data/dbConfig')

async function find() {
    return await db('tasks');
}

async function findById(task_id) {
    let returnThis = await db('tasks')
        .where ({ task_id })
        .first();
        returnThis.task_completed = !!returnThis.task_completed;

        return returnThis;
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

