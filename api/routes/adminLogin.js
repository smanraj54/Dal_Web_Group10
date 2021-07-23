// author : Pathik Kumar Patel
// date created: 19-07-2021

const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

var mysql = require("mysql");

// Allowing CORS policy.

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://group10proposalweb.herokuapp.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var con = mysql.createConnection({
  host: "db-admin.cbsrzgbgkhst.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "admin1234",
  database: "db_admin",
});

con.connect(function (err) {
  if (err) throw err;

  console.log("connection successful");
});

router.post("/login", (req, res) => {
    
  con.query(
    `SELECT * FROM admin_credentials WHERE username = '${req.body.username}'`,
    function (err, result, fields) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "server error",
        });
      }

      if (result.length > 0) {
        if (result[0].password === req.body.password){
            req.session.user = result;
            return res.status(200).json({
                success: true,
                message: "Admin Authenticated successfully",
              });
        }
          
        else {
          return res.status(204).send({
            success: false,
            message: "Username or Password do not match",
          });
        }
      } else {
        return res.status(204).send({
          success: false,
          message: "Admin doesn't exist",
        });
      }
    }
  );
});

module.exports = router;
