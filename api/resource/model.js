const db = require('../../data/dbConfig');

async function find() {
    return await db('resources');
}

async function create(neoProject) {
    return await db('resources')
        .insert(neoProject);
}

module.exports = {
    find,
    create
}
