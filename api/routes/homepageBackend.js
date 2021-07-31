/*
Author: Manraj Singh
Dal Id: B00877934
email id: mn697903@dal.ca
*/

const express = require("express");

const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//var uniqid = require("uniqid");
var mysql = require('mysql');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://group10proposalweb.herokuapp.com"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// connecting to the database where homepage item_deteails page is present
var con = mysql.createConnection({
    host: '35.188.62.128',
    user: 'root',
    password: 'admin1234',
    database: 'db_admin'
});

con.connect(function(err) {
    if (err) throw err;
  
   console.log('connection successful');
});

// confirmation on the connection success with the backend api
router.get('/',(req,res) => {
    return res.status(200).json({
        success: true,
        message: "Homepage",
    });
});

//getting all the items list from the database to show on the homescreen 
router.get('/items', (req, res) => {

        con.query(`SELECT * FROM item_details`, function(err, result, fields) {
            console.log(result.length);
            
            if (err)
            {
                return res.status(404).json({
                    success: false,
                    message: "No user found!"
                })
            } 
            if (result)
            {
                return res.status(200).json({
                    success: true,
                    message: "Users retrieved",
                    data: result
                });
            } 
        });

});


module.exports = router;