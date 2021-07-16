const db = require('../../data/dbConfig')

async function find() {
    return await db('projects');
}

async function findById(project_id) {
    let returnThis = await db('projects')
        .where ({ project_id })
        .first();
    returnThis.project_completed = !!returnThis.project_completed;

    return returnThis;
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
