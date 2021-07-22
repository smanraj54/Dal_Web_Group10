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

app.get("/", (req, res) => {
    res.send('Hello World!')
  });
  

app.post('/payment', function  (req, res) {
    console.log('hello')
    
    const userdata = req.body;
    // console.log(userdata)
    try{
            userdata.id = uniqid();
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

    insertDb = (userdata)=>{
        console.log('in insert')
        var todayDate = Date.now()
        var connection = mysql.createConnection({
            host     : "webdb.cim0emcvx2mb.us-east-1.rds.amazonaws.com",
            user     : "web",
            password : "webrobinder",
            port     : 3306
          });
          
          connection.connect(function(err) {
            if (err) {
              console.error('Database connection failed: ' + err.stack);
              return;
            }
          
            console.log('Connected to database.');
            console.log(todayDate.type)
            console.log(`date is ${todayDate}`)
            console.log(`price is ${userdata.finalOrderPrice}`)
            console.log(`card is ${userdata.cardNumber}`)
            if(userdata.type != 'Cash on Delivery' && userdata.type != 'Redeem Points option'){
                var query = `INSERT INTO webEmployee.client(idclient,name,type,card,timestamp,status,price) VALUES ('${userdata.id}', '${userdata.cardHolderName}','CardPayment', ${userdata.cardNumber}, ${todayDate}, 'SUCCESS',${userdata.finalOrderPrice})`;
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