const db = require('../../data/dbConfig')

async function find() {
    return await db('projects');
}

async function create(neoProject) {
    return await db('projects')
        .insert(neoProject);
}

module.exports = {
    find,
    create
}
