const db = require('../../data/dbConfig')

async function find() {
    return await db('projects');
}

async function findById(project_id) {
    return await db('projects')
        .where ({ project_id })
        .first();
}

async function create(neoProject) {
    return await db('projects')
        .insert(neoProject);
}

module.exports = {
    find,
    findById,
    create
}
