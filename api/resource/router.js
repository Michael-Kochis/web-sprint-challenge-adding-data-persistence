const express = require('express');

const resources = require('./model');

const router = express.Router();

router.get("/", (req, res, next) => {
    resources.find()
        .then(resp => {
            res.status(200).json(resp);
        }).catch(next);
})

router.post("/", (req, res, next) => {
    const neoResource = req.body;

    resources.create(neoResource)
        .then((resp) => {
            res.status(201).json(resp);
        }).catch(next);
})

module.exports = router;
