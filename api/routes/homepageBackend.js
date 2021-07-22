const express = require("express");

const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//var uniqid = require("uniqid");
var mysql = require('mysql');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

var con = mysql.createConnection({
  host: "db-admin.cbsrzgbgkhst.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "admin1234",
  database: "db_admin"
});

con.connect(function(err) {
    if (err) throw err;
  
   console.log('connection successful');
});

// var users = [{
//     email : 'abc@abc.ca',
//     firstName : 'ABC',
//     id : '5abf6783'
//     },
//     {
//     email : 'xyz@xyz.ca',
//     firstName: 'XYZ',
//     id : '5abf674563'
//     }]

router.get('/',(req,res) => {
    return res.status(200).json({
        success: true,
        message: "Homepage",
    });
});

// app.get('/',(req,res) => {
//     return res.status(200).json({
//         success: true,
//         message: "Connected",
//     });
// });

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