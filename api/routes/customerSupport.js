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
    host: '35.188.62.128',
    user: 'root',
    password: 'admin1234',
    database: 'db_admin'
});

app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Welcome",
    });
});

app.post('/complainsubmit', (req, res) => {
    try {
        typeOfComplain = req.body.type;
        desc = req.body.desc;
        email = req.body.email;
        response = "";
        status = "pending";
        const ticketNumber = Math.floor(100000 + Math.random() * 900000);

        const sqlquery = "INSERT INTO `ticketmaster` (`ticketNumber`, `email`, `status`, `type`, `desc`, `response`) VALUES ('"+ ticketNumber + "','"+ email + "', '"+status+"', '"+ typeOfComplain +"', '"+ desc+"','"+response+"')";
        connection.query(sqlquery, (err,result) => {
            if (err) throw err;
            console.log(result);
            return res.status(200).json({
                success: true,
                message: "Submitted successfully!",
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

app.post('/complainupdate', (req, res) => {
    try {
        typeOfComplain = req.body.type;
        desc = req.body.desc;
        email = req.body.email;
        response = "";
        ticketNumber = req.body.ticketNumber;
        status = "pending";

        const sqlquery = "UPDATE `ticketmaster` SET `status`='"+status+"', `type`='"+typeOfComplain+"', `desc`='"+desc+"', `response`='"+response+"' WHERE `ticketNumber` = '"+ticketNumber+"'";

        connection.query(sqlquery, (err,result) => {
            if (err) throw err;
            console.log(result);
            return res.status(200).json({
                success: true,
                message: "Updated successfully!",
            })
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: true,
            message: "internal server error"
        })
    }
});


app.post('/getcomplaints', (req, res) => {
    try {
        email = req.body.email;

        const sqlquery = "SELECT * FROM `ticketmaster` WHERE email = '"+ email+"'";
        connection.query(sqlquery, (err,result) => {
            if (err) throw err;
            console.log(result);
            return res.status(200).json({
                success: true,
                data: result,
            })
        });
    }
    catch (error) {
        return res.status(500).json({
            success: true,
            message: "internal server error"
        })
    }
})

app.use((req, res, next) => {
    return res.status(404).json({
        success: true,
        message: "Please check the url!"
    });
});
module.exports = app;