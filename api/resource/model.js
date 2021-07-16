const db = require('../../data/dbConfig');

async function find() {
    return await db('resources');
}

async function findById(resource_id) {
    return await db('resources')
        .where ({ resource_id })
        .first();
}

async function create(neoProject) {
    return await db('resources')
        .insert(neoProject);
}

module.exports = {
    find,
    findById,
    create
}
