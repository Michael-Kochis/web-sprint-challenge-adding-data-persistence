const express = require('express');

const projects = require('./model');

const router = express.Router();

router.get("/", (req, res, next) => {
    projects.find()
        .then(resp => {
            res.status(200).json(resp);
        }).catch(next);
})

router.post("/", (req, res, next) => {
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
