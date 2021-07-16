const db = require('../../data/dbConfig')

async function find() {
    let returnThis = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 
            'project_name', 'project_description');
    returnThis.forEach((task) => {
        task.task_completed = !!task.task_completed;
    })
    
    return returnThis;
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

