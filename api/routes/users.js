//import {express} from "express";
//import users from '../data/users';
var bodyParser = require('body-parser')

const uniqid = require('uniqid');

const express = require('express');

const userExpress = express();

const router = express.Router();

const users = require('../data/users');


 router.use(express.json());
 router.use(express.urlencoded({ extended: false}));

 router.use(middleware);

function middleware(req, res, next){
    console.log( req.body);
    next();
}

router.post('/add', (req, res) => {
    const userTemp = req.body;
    userTemp.id = uniqid();
    users.push(userTemp);
    console.log("Inside POST Statement");
    return res.status(200).json({
        success : 'True',
        inside : 'POST Statement',
        Message : 'Users Not FounUser Added',
    })
})

router.get('/users', (req, res) => {
    console.log("Inside GET Statement");

    try{

        if(!users || !users.length){
            return res.status(404).json({
                success : 'False',
                Message : 'Users Not Found'
            });
        }

        res.status(200).json({
            success :  true,
            Message : "Users Received",
            data : users
        });
    }
    catch(err){
        return res.status(500).json({
            success : 'False',
            Message : 'Server response Error',
            Stack_Trace : err 
        })

    }
    
    
});


router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    var userTemp = null;
    users.map(user => {
        if(user.id === id){
            userTemp = user;
        }
    });
    console.log("Inside GET Statement");

    try{

        if(!userTemp){
            return res.status(404).json({
                success : 'False',
                Message : 'User with id = '+ id +' Not Found'
            });
        }

        res.status(200).json({
            success :  true,
            Message : "Users Received",
            data : userTemp
        });
    }
    catch(err){
        return res.status(500).json({
            success : 'False',
            Message : 'Server response Error',
            Stack_Trace : err 
        })

    }
});

router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const newUser = req.body;
    var userTemp = null;
    users.map(user => {
        if(user.id === id){
            user.firstName = newUser.firstName;
            user.email = newUser.email;
            userTemp = user;
        }
    });
    console.log("Inside PUT Statement");

    try{

        if(!userTemp){
            return res.status(404).json({
                success : 'False',
                Message : 'User with id = '+ id +' Not Found'
            });
        }

        res.status(200).json({
            success :  true,
            Message : "User Updated"
        });
    }
    catch(err){
        return res.status(500).json({
            success : 'False',
            Message : 'Server response Error',
            Stack_Trace : err 
        })

    }
});





module.exports = router;