const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const cors = require('cors');

router.use(cors());

router.use(bodyParser.json());

var mysql = require('mysql');
 
var con = mysql.createConnection({
  host: "node-js-5709.cvk24p0dwiqd.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database: "auth"
});

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

con.connect(function(err) {
    if (err) throw err;
  
   console.log('connection successful');
  });

router.post('/signup', (req, res) => {

    var answer = req.body.answer.toLowerCase();
    var records = [[req.body.username,req.body.email,req.body.pwd,req.body.question,answer]];


	if(records[0][0]!=null)
	{
		con.query("INSERT into user_auth (username,email,password,question,answer) VALUES ?",[records],function(err,result,fields){

			if(err)
            {
                console.log(err)
                return res.status(500).json({
                    success: false,
                    message: "server error"
                })
                
            }

            else
            {
                return res.status(200).json({
                    success: true,
                    message: "Users Added",
                })
            }

		});
	}
});

module.exports = router;