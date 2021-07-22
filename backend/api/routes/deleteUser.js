// Author : Pathik Kumar Patel
// Description: deleteing the user.

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());

var mysql = require("mysql");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://group10proposalweb.herokuapp.com"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
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

// deleting the user if user exists.

router.delete('/delete/:id', (req,res) => {

    let userID = req.params.id;
	var records = [[req.body.firstName,req.body.email]];

    con.query(`SELECT * FROM user_auth`, function(err, result, fields) {
        
        var found=false;
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            if (row.id == userID)
            {
                found=true;
            }
            console.log(row.id)
          });

        if (found==false)
        {
            return res.status(404).json({
                success: false,
                message: "No user found!"
            })
        }

        else
        {
            con.query(`DELETE FROM user_auth WHERE (email = '${req.params.email}');`,function(err,result){
        
                console.log(result);

                if(err)
                {
                    return res.status(500).json({
                        success: false,
                        message: "server error"
                    })
                }

                else
                {
                    return res.status(200).json({
                        success: true,
                        message: "User deleted",
                    })
                }
                
            });
        }
    });

});

module.exports = router;