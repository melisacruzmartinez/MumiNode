const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');
router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM pregunta',(err,rows))
});

module.exports = router;




















