/*
Author: Narendran Krishnakumar
Page Function: Backend API for the admin management
*/
const express = require ('express');
const apps = express();
const cors = require("cors");
const mysql = require('mysql');
const bodyParser = require('body-parser');


//db credentials 
const db = mysql.createPool({
    host: '35.188.62.128',
    user: 'webdatabasegroup10',
    password: 'admin1234',
    database: 'db_admin',
});




//defaults
apps.use(cors());
apps.use(express.json())
apps.use(bodyParser.urlencoded({extended:true}))




//API for store creation
apps.post("/api/addStore",(req,res) =>{

    let storeName = req.body.storeName
    let phone = req.body.phone
    let address = req.body.address
    let price = req.body.price
    let logo = req.body.logo
    let opHrs = req.body.opHrs
    let category = req.body.category

    let sqlSelect = "select store_name from store_details where store_name=?";
    db.query(sqlSelect,storeName,(err,result)=>{
       
        if(result>1){
            res.send(response)
        }
        else{
            let sqlInsert = "insert into store_details (store_name,store_addr,op_hrs,category,price,services,store_logo) values (?,?,?,?,?,?,?)";

            db.query(sqlInsert,[storeName,address,opHrs,category,
            price,phone,logo],(err,result)=>{
                console.log(result)
                res.send(result)
              
            })
        }

    })

    
})

//API for Item Addition to store
apps.post("/api/addItem",(req,res) =>{

    let storeName = req.body.storeName
    let itemName = req.body.itemName
    let itemQty = req.body.itemQty
    let itemPrice = req.body.itemPrice
    let itemDesc = req.body.itemDesc
    let itemImage = req.body.itemImage
  
    let sqlInsert = "insert into item_details (store_name,item_name,item_qty,item_price,item_desc,item_image) values (?,?,?,?,?,?)";

    db.query(sqlInsert,[storeName,itemName,itemQty,itemPrice,
    itemDesc,itemImage],(err,result)=>{
        console.log(result)
        res.send(result)
    })
})


//API for removing an item
apps.post("/api/removeItem",(req,res) =>{

    let storeName = req.body.storeName
    let itemName = req.body.itemName
    
  
    let sqlInsert = "delete from item_details where item_name=? and store_name=?";

    db.query(sqlInsert,[itemName,storeName],(err,result)=>{
        console.log(result)
        res.send(result)
    })
})

//API for removing store
apps.delete('/api/removeStore/:storeName',(req,res)=>{
    let storeName = req.params.storeName
    let sqlDelete = "delete from store_details where store_name = ?";
    db.query(sqlDelete,storeName,(err,result)=>{
        console.log(result)
       
    })
     sqlDelete = "delete from item_details where store_name = ?";
    db.query(sqlDelete,storeName,(err,result)=>{
        console.log(result)
        res.send(result)
    })
   
});


//API for updating item
apps.put('/api/updateItem/',(req,res)=>{
    let storeName = req.body.storeName
    let itemName = req.body.itemName
    let itemQty = req.body.itemQty
    let itemPrice = req.body.itemPrice
    let itemDesc = req.body.itemDesc
    let sqlUpdate = "update item_details set item_qty=?, item_price=?, item_desc =? where store_name=? and item_name=?";
    db.query(sqlUpdate,[itemQty,itemPrice,itemDesc,storeName,itemName],(err,result)=>{
        console.log(result)
        res.send(result)
    })
})



apps.get('/api/getStoreNames',(req,res) =>{
    let sqlSelect = "select store_name from store_details ";
    db.query(sqlSelect,(err,result)=>{
       res.send(result);
    }) 


})

apps.get('/api/getItemNames/:storeName',(req,res) =>{
    let storeName = req.params.storeName
    let sqlSelect = "select * from item_details where store_name=?";
    db.query(sqlSelect,storeName,(err,result)=>{
       res.send(result);
    }) 


})




module.exports = apps;
