const projects = require('./model');

const checkProjectPayload = (req, res, next) => {
    const payload = req.body;

    if (!payload.project_name || typeof(payload.project_name) !== "string") {
        res.status(400).json({ 
            message: "For projects, project_name is a required field."
        })
    } else if (!payload.project_description || 
        typeof(payload.project_description) !== "string") {
            res.status(400).json({ 
                message: "For projects, project_description is a required field."
            })
        } else {
        next();
    }
}

module.exports = {
    checkProjectPayload
}
