const express = require('express');

const projects = require('./model');
const { checkProjectPayload } = require('./project-middleware');

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

module.exports = router;
