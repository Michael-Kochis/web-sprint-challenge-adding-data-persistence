const express = require('express');

const tasks = require('./model');
const { authDenyEndpoint } = require('../auth/auth-middleware');

const router = express.Router();

router.get("/", (req, res, next) => {
    tasks.find()
        .then(resp => {
            res.status(200).json(resp);
        }).catch(next);
})

router.post("/", (req, res, next) => {
    const neoTask = req.body;

    tasks.create(neoTask)
        .then((resp) => {
            tasks.findById(resp)
                .then(task => {
                    res.status(201).json(task);
                }).catch(next);
        }).catch(next);
})

router.put("/:project_id", (req, res, next) => {
    res.status(500).json({ 
        message: "error, put endpoint for tasks is disabled." 
    })
})

router.delete("/:project_id", (req, res, next) => {
    res.status(500).json({ 
        message: "error, delete endpoint for tasks is disabled." 
    })
})

module.exports = router;
