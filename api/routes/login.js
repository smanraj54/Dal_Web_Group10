// Author : Pathik Kumar Patel
// Description: login backend file which handles request from frontend and does authentication of user.
// references : https://www.codegrepper.com/code-examples/javascript/frameworks/dist/cors+issue+node+js

const express = require("express");

const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

var mysql = require("mysql");

// adding header to allow access api from the frontend

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://group10proposalweb.herokuapp.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// making connection with MySQL instance.

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

// router.get("/login", (req,res) => {
//     if(!req.session.user){
//         return res.status(401).send({
//             loggedIn: false
//         });
//     }

//     else{
//         return res.status(200).send({
//             loggedIn: true,
//             user: req.session.user
//         })
//     }
    

// });


// checking the user credentials from database and giving response.

router.post("/login", (req, res) => {
    
  con.query(
    `SELECT username,email,password FROM user_auth WHERE email = '${req.body.email}'`,
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
            console.log(req.session.user);
            return res.status(200).json({
                success: true,
                message: "Users Authenticated successfully",
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
          message: "User doesn't exist",
        });
      }
    }
  );
});

module.exports = router;
