
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

//var uniqid = require("uniqid");
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
  host: "db-admin.cbsrzgbgkhst.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "admin1234",
  database: "db_admin"
});

con.connect(function(err) {
    if (err) throw err;
  
   console.log('connection successful');
});

//Get api to show the connection success message 
router.get('/',(req,res) => {
    return res.status(200).json({
        success: true,
        message: "Cart Page",
    });
});

// Get api exposed to fetch all the items from Database
router.get('/items', (req, res) => {

    con.query(`SELECT * FROM cart_items`, function(err, result, fields) {
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
    con.query(`DELETE FROM cart_items WHERE item_id = '${userID}';`,function(err,result){
        
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

});

// Fetching details of an entry in cart table using the id
router.get('/items/:id', (req, res) => {
    console.log("i am in GEt with ID");
    let userID = req.params.id;
    con.query(`SELECT * FROM cart_items WHERE item_id = '${userID}'`, function(err, result, fields) {
        console.log(result);
        var found=false;
        var quantity = 0;
        Object.keys(result).forEach(function(key) {
            var rowData = result[key];
            if (rowData.item_id == userID)
            {
                quantity = rowData.item_qty;
                found=true;
                console.log(rowData)
            }
            
          });

        if (found==false)
        {
            return res.status(404).json({
                success: false,
                message: "No user found!",
                item_qty: quantity
            })
        }

        else
        {
            if (err)
            {
                return res.status(500).json({
                    success: false,
                    message: "Server error"
                })
            } 
            if (result)
            {
                return res.status(200).json({
                    success: true,
                    message: "User retrieved",
                    data: result,
                    item_qty: quantity
                });
            } 
        }
    });
});

// Deleting all the entries from the table on canceling the order or completing the order
router.put('/truncate', (req, res) => {

    con.query(`TRUNCATE TABLE cart_items;`,function(err,res){
        
        if(err) throw err;

        console.log(res);
    });

    return res.status(200).json({
        success: true,
        message: "Users Truncated",
    })
});

// Adding new entry into the cart table of the item selected ... if the item already available then increasing the count
router.post('/add', (req, res) => {

	var records = [[req.body.item_id, req.body.store_name, req.body.item_name, req.body.item_qty,req.body.item_price,req.body.item_desc,req.body.item_image]];
	
    if(records[0][0]!=null)
	{
        var quantity = 1;
        records = [[req.body.item_id, req.body.store_name, req.body.item_name, quantity,req.body.item_price,req.body.item_desc,req.body.item_image]];
        console.log("Trying to find data in Cart tables");
        
        con.query(`SELECT * FROM cart_items`, function(err, result, fields) {
            console.log("fetching data from Cart table");
            var found=false;
            Object.keys(result).forEach(function(key) {
                var row = result[key];
                console.log("Finding data : "+ row.item_id);
                console.log(row);
                if (row.item_id == req.body.item_id)
                {
                    quantity = row.item_qty + 1;
                    console.log("Found data from Cart table : Quantity = "+ quantity + " Boolean comparison : " + (quantity > 1));
            
                }
                console.log(row.id);
            });

            records = [[req.body.item_id, req.body.store_name, req.body.item_name, quantity,req.body.item_price,req.body.item_desc,req.body.item_image]];
            console.log("quantity ====== " + quantity);
            if(quantity == 1){
                if(quantity <= req.body.item_qty){
                    con.query("INSERT into cart_items (item_id, store_name, item_name, item_qty, item_price, item_desc, item_image) VALUES ?",[records],function(err,result,fields){

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
                            return res.status(200).json({
                                success: true,
                                message: "Users Added",
                            });
                       }
        
                    });
                }
           }
        
            else{
                console.log("Trying to update!!!!!");
                if(quantity <= req.body.item_qty){
                    console.log("Updating!!!!!");
            
                    con.query(`UPDATE cart_items SET item_qty = '${quantity}' where item_id = '${req.body.item_id}'`,function(err,res){
    
                        if(err) 
                        {
                            console.log(err);
                        }
        
                        console.log(res);
                        console.log("Updated!!!!!");
                    });
                    return res.status(200).json({
                        success: true,
                        message: "Users quantity Updated",                    
                    });
                }
                else {
                    console.log('item quantity exceeded!!!');
                    return res.status(401).json({
                        success: false,
                        message: "quantity exceeded"
                    });
                }
            }
        });
    
    }
});

module.exports = router;