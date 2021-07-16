const express = require('express');

const tasks = require('./model');

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
            res.status(201).json(resp);
        }).catch(next);
})

module.exports = router;
