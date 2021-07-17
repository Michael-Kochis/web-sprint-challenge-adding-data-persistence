const express = require('express');

const projects = require('./model');
const { checkProjectPayload } = require('./project-middleware');
const { authDenyEndpoint } = require('../auth/auth-middleware');

const router = express.Router();

router.get("/", (req, res, next) => {
    projects.find()
        .then(resp => {
            res.status(200).json(resp);
        }).catch(next);
})

router.post("/", checkProjectPayload, (req, res, next) => {
    const neoProject = req.body;

    projects.create(neoProject)
        .then((resp) => {
            projects.findById(resp)
                .then(project => {
                    res.status(201).json(project);
                }).catch(next);
        }).catch(next);
})

router.put("/:project_id", (req, res, next) => {
    res.status(500).json({ 
        message: "error, put endpoint for projects is disabled." 
    })
})

router.delete("/:project_id", (req, res, next) => {
    res.status(500).json({ 
        message: "error, delete endpoint for projects is disabled." 
    })
})

module.exports = router;
