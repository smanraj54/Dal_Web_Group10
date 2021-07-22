const express = require("express");

const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

// const cors = require('cors');
// router.use(cors({
//     origin: ["http://localhost:3000/"],
//     methods: ["GET","POST"],
//     credentials: true
// }));

var mysql = require("mysql");

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://group10proposalweb.herokuapp.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var con = mysql.createConnection({
  host: "node-js-5709.cvk24p0dwiqd.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database: "auth",
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
