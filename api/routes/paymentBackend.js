const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
router.use(cors());
router.use(bodyParser.json());
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "webdb.cim0emcvx2mb.us-east-1.rds.amazonaws.com",
    user: "web",
    password: "webrobinder",
    port: 3306
});

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

con.connect(function (err) {
    if (err) throw err;
    console.log('connection successful');
});

router.get("/", (req, res) => {
    res.send('Hello World!')
  });

router.post('/payment', function  (req, res) {
    const userdata = req.body;
    try{
            userdata.id = uniqid();
            console.log(userdata)
            insertDb(userdata)

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
          
            if(userdata.type != 'Cash on Delivery' && userdata.type != 'Redeem Points option'){
                var query = `INSERT INTO webEmployee.client(idclient,name,type,card,timestamp,status,price) VALUES ('${userdata.id}', '${userdata.cardHolderName}','CardPayment', ${userdata.cardNumber}, ${todayDate}, 'SUCCESS',${userdata.finalOrderPrice})`;
            con.query(query, function (err, result) {
                if (err) throw err;
                console.log("client record inserted");
              });
              con.end
            }
            else{
                var sqlquery = `INSERT INTO webEmployee.client(idclient,type,timestamp,status,price) VALUES ('${userdata.id}', '${userdata.type}', ${todayDate}, 'SUCCESS',${userdata.finalOrderPrice})`;
                con.query(sqlquery, function (err, result) {
                if (err) throw err;
              });
              con.end
            }
    }
