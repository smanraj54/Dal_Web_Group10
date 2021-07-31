const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const connection = mysql.createPool({
    host: "db-admin.cbsrzgbgkhst.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "admin1234",
  database: "db_admin"
});

app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Welcome",
    });
});


app.get('/getStores', (req, res) => {

    try {

        const sqlquery = "SELECT * FROM `store_details`";
        connection.query(sqlquery, (err,result) => {
            if (err) throw err;
            console.log(result);
            return res.status(200).json({
                success: true,
                data: result
            })
        });
    }
    catch (error) {
        return res.status(500).json({
            success: true,
            message: "internal server error"
        })
    }
});

app.get('/getCatagories', (req, res) => {

    try {
        const sqlquery = "SELECT DISTINCT(category) FROM `item_details`";
        connection.query(sqlquery, (err,result) => {
            if (err) throw err;
            console.log(result);
            return res.status(200).json({
                success: true,
                data: result
            })
        });
    }
    catch (error) {
        return res.status(500).json({
            success: true,
            message: "internal server error"
        })
    }
});

app.post('/getItems', (req, res) => {
    try {
        store_name = req.body.store_name;

        const sqlquery = "SELECT * FROM `item_details` WHERE store_name = '"+ store_name+"'";
        connection.query(sqlquery, (err,result) => {
            if (err) throw err;
            console.log(result);
            return res.status(200).json({
                success: true,
                data: result
            })
        });
    }
    catch (error) {
        return res.status(500).json({
            success: true,
            message: "internal server error"
        })
    }
});

app.use((req, res, next) => {
    return res.status(404).json({
        success: true,
        message: "Please check the url!"
    });
});
module.exports = app;