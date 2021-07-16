const express = require('express');

const resources = require('./model');
const { authDenyEndpoint } = require('../auth/auth-middleware');

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
            resources.findById(resp)
                .then(resource => {
                    res.status(201).json(resource);
                }).catch(next);
        }).catch(next);
})

router.put("/:project_id", authDenyEndpoint, (req, res, next) => {
    res.status(500).json({ 
        message: "error, put endpoint for resources is disabled." 
    })
})

router.delete("/:project_id", authDenyEndpoint, (req, res, next) => {
    res.status(500).json({ 
        message: "error, delete endpoint for resources is disabled." 
    })
})

module.exports = router;
