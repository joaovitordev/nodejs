'use strict';

const express = require('express');

const app = express();
const router = express.Router();

// criando rota
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
})

app.use('/', route);

module.exports = app;