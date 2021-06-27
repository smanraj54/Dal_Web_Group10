//import {express} from "express";
//import users from '../data/users';
var bodyParser = require('body-parser')

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

// router.put('/', (req, res) => {
//     console.log("Inside PUT Statement");
//     return res.status(404).json({
//         success : 'True',
//         inside : 'PUT Statement',
//         Message : 'Users Not Found'
//     })
// })

router.post('/add', (req, res) => {
    const userTemp = req.body;
    users.push(userTemp);
    console.log("Inside POST Statement");
    return res.status(404).json({
        success : 'True',
        inside : 'POST Statement',
        Message : 'Users Not Found',
    })
})

router.get('/', (req, res) => {
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
    
    
})

users.map((user) => {
    const path = '/:'+user.id;
    console.log("Path =" + path);
    router.get(path, (req, res) => {
        console.log("Path =" + path);

        try{
    
            if(!user){
                return res.status(404).json({
                    success : 'False',
                    Message : 'Users Not Found'
                });
            }
    
            res.status(200).json({
                success :  true,
                Message : "Users Received",
                data : user
            });
        }
        catch(err){
            return res.status(500).json({
                success : 'False',
                Message : 'Server response Error',
                Stack_Trace : err 
            })
    
        }
        
        
    })
});

users.map((user) => {
    const path = '/:'+user.id;
    console.log(path);
    router.put(path, (req, res) => {
        const userTemp = req.body;
        user.email = userTemp.email;
        user.firstName = userTemp.firstName;
        try{
    
            if(!user){
                return res.status(404).json({
                    success : 'False',
                    Message : 'Users Not Found'
                });
            }
    
            res.status(200).json({
                success :  true,
                Message : "Users Received",
                data : user
            });
        }
        catch(err){
            return res.status(500).json({
                success : 'False',
                Message : 'Server response Error',
                Stack_Trace : err 
            })
    
        }
        
        
    })
});

module.exports = router;