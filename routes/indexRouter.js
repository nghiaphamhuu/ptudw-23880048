'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

router.get('/createTables', (req, res) => {
    let models = require('../models');
    models.sequelize.sync().then(() => {
        res.send('tables created');
    })
});
// khoi dong web server
router.get('/', controller.showHomePage);

router.get('/:page', controller.showPage);

module.exports =router;