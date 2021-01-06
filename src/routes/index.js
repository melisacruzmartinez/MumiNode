const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const mysqlConnection = require('../database');
router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM pregunta',(err,rows,fields)=>{
    if (!err){
        res.json(rows);
    }else{
        console.log("vjfivfjbfkngb");
    }
})
});

module.exports = router;




















