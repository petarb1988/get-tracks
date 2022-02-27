const express = require('express');
const router = express.Router();
const tracks = require('../controllers/controller');


router.get('/sorted', function (req, res) {
    try {
        const result = tracks.getSorted(req.query.sortBy);
        res.status(200).send(result);
        res.end();
    } catch (error) {
        res.status(500).send(error);
        res.end();
    }
});

router.get('/:id', function (req, res) {
    try {
        const result = tracks.getById(req.params.id);
        res.status(200).send(result);
        res.end();
    } catch (error) {
        res.status(500).send(error);
        res.end();
    }
});

router.get('/', function (req, res) {
    try {
        const result = tracks.getAll();
        res.status(200).send(result);
        res.end();
    } catch (error) {
        res.status(500).send(error);
        res.end();
    }
});


module.exports = router;