// Author : Pathik Kumar Patel
// Description: gets the user data from frontend and save it to user database.

const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const cors = require('cors');

router.use(cors());

router.use(bodyParser.json());

var mysql = require('mysql');
 
var con = mysql.createConnection({
    host: '35.188.62.128',
    user: 'root',
    password: 'admin1234',
    database: 'db_admin'
});

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://group10proposalweb.herokuapp.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

con.connect(function(err) {
    if (err) throw err;
  
   console.log('connection successful');
  });

// saving the details of the user to user table and giving proper response.

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