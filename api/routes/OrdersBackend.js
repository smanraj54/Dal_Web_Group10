/*
Author: Manraj Singh
Dal Id: B00877934
email id: mn697903@dal.ca
*/
const express = require("express");

const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var uniqid = require("uniqid");
var mysql = require('mysql');

// restricting the access of backend api to the frontend code only for security
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://group10proposalweb.herokuapp.com"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// Connecting to the frontend code
var con = mysql.createConnection({
    host: '35.188.62.128',
    user: 'root',
    password: 'admin1234',
    database: 'db_admin'
});

con.connect(function(err) {
    if (err) throw err;
  
   console.log('connection successful');
});


//Get api to show the connection success message 
router.get('/',(req,res) => {
    return res.status(200).json({
        success: true,
        message: "Orders Page",
    });
});

// Get api exposed to fetch all the items from Database
router.get('/items', (req, res) => {

    con.query(`SELECT * FROM order_items`, function(err, result, fields) {
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


router.get('/items/:id', (req, res) => {

    let userID = req.params.id;
    con.query(`SELECT * FROM order_items WHERE order_id = '${userID}'; `, function(err, result, fields) {
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


router.get('/details', (req, res) => {

    con.query(`SELECT * FROM order_details`, function(err, result, fields) {
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


//Delete API exposed to delete perticular entry in the cart table in database using the id
router.delete('/delete/:id', (req, res) => {
    console.log("about to delete id: "+req.params.id);
    let userID = req.params.id;
    con.query(`DELETE FROM order_items WHERE order_id = '${userID}';`,function(err,result){
        
        console.log(result);
        con.query(`DELETE FROM order_details WHERE order_id = '${userID}';`,function(err,result){
        
            console.log(result);
    
            if(err)
            {
                return res.status(500).json({
                    success: false,
                    message: "server error"
                })
            }
                    
        });

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


});

router.post('/add', (req, res) => {

    const uniq = uniqid();

	console.log("Trying to find data in Cart tables");
        
        con.query(`SELECT * FROM cart_items`, function(err, result, fields) {
            console.log("fetching data from Cart table");
            var found=false;
            var records = [];
            Object.keys(result).forEach(function(key) {
                var row = result[key];
                console.log("Finding data : "+ row.item_id);
                //row.order_id = uniq;
                
                var record = [[row.item_id, row.store_name, row.item_name, row.item_qty, row.item_price, row.item_desc, row.item_image, uniq]];
                records.push(record);
            });

            console.log(records);

            for(const singleRecord of records){

                con.query("INSERT into order_items (item_id, store_name, item_name, item_qty, item_price, item_desc, item_image, order_id) VALUES ?",[singleRecord],function(err,result,fields){

                    if(err)
                    {
                        console.log('Entering Data Failed with Error:');
                        console.log(err);
                        return res.status(500).json({
                            success: false,
                            message: "server error"
                        }); 
                    }
    
                    else
                    {
                        console.log('Entering Data Complete!!!');
                    }        
    
                });
            }

            var status = 'pending';
            var dataRec = [[uniq, status]]
            con.query("INSERT into order_details (order_id, order_status) VALUES ?",[dataRec],function(err,result,fields){
                if(err)
                {
                    console.log('Entering Data Failed with Error:');
                    console.log(err);
                    return res.status(500).json({
                        success: false,
                        message: "server error"
                    }); 
                }

                else
                {
                    console.log('Entering Data Complete!!!');
                }
            });        

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






