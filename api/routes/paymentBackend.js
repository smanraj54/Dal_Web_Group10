//Author: Robinder Jasdev Singh Dhillon

const http = require('http');
const port = process.env.PORT || 3000
const express = require('express');
const app = express();
const cors = require('cors');
const server = http.createServer(app);
var mysql = require('mysql');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const uniqid = require('uniqid');
app.use(cors());

server.listen(port, ()=>{
    console.log("server started at http://localhost:"+port);
})

//get request to check if connection is made

app.get("/", (req, res) => {
    res.send('Hello World!')
  });
  
//handling post request from frontend to store values in database
app.post('/payment', function  (req, res) {
    
    const userdata = req.body; //saving the user information from the form
    // console.log(userdata)
    try{
            userdata.id = uniqid(); //generating a hexadecimal order ID
            // user.push(userdata)
            console.log(userdata)
            insertDb(userdata)
            // console.log('query time')


            res.status(200).json({
                Message: "User added",
                success : true,
                data: userdata                
        })
    
}
catch(err){
    return res.status(500).json({
        message: "Internal Server Error",
        success : false
    })
}
    })
//code to insert data to database
    insertDb = (userdata)=>{
        console.log('in insert')
        var todayDate = Date.now()
        var connection = mysql.createConnection({
          host: "db-admin.cbsrzgbgkhst.us-east-1.rds.amazonaws.com",
          user: "admin",
          password: "admin1234",
          database: "db_admin"
          });
          
          connection.connect(function(err) {
            if (err) {
              console.error('Database connection failed: ' + err.stack);
              return;
            }
          
            console.log('Connected to database.');
            //if condition, if the type of payment is cash on delivery or points, execute code in if, otherwise execute code in else
            if(userdata.type != 'Cash on Delivery' && userdata.type != 'Redeem Points option'){
                var query = `INSERT INTO db_admin.client(idclient,name,type,card,timestamp,status,price) VALUES ('${userdata.id}', '${userdata.cardHolderName}','CardPayment', ${userdata.cardNumber}, ${todayDate}, 'SUCCESS',${userdata.finalOrderPrice})`;
            console.log('in if')
            connection.query(query, function (err, result) {
                if (err) throw err;
                console.log("client record inserted");
              });
              connection.end
            }
            else{
                console.log('in else')
            
                var sqlquery = `INSERT INTO webEmployee.client(idclient,type,timestamp,status,price) VALUES ('${userdata.id}', '${userdata.type}', ${todayDate}, 'SUCCESS',${userdata.finalOrderPrice})`;
            
            connection.query(sqlquery, function (err, result) {
                if (err) throw err;
                console.log("client record inserted");
              });
              connection.end
            }
           
          });
    }