var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var users = [{
    email : 'abc@abc.ca',
    firstName : 'ABC',
    id : '5abf6783'
    },
    {
    email : 'xyz@xyz.ca',
    firstName: 'XYZ',
    id : '5abf674563'
    }]

let port = process.env.PORT || 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});




app.post('/add', (req, res) => {
    const userTemp = req.body;
    userTemp.id = uniqid();
    users.push(userTemp);
    console.log("Inside POST Statement");
    return res.status(200).json({
        success : 'True',
        inside : 'POST Statement',
        Message : 'Users Not FounUser Added',
    })
});

app.get('/users', (req, res) => {
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


app.get('/users/:id', (req, res) => {
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

app.put('/update/:id', (req, res) => {
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












// app.get("/", (req, res) => {
//     res.status(200).json({"status": "Success", "message": "User api server for Tutorial5 in CSCI5709"});
// });
// app.get("/users", (req, res) => {
//     res.json(
//         {
//             "success": true,
//             "message": "user_retrieved",
//             "data": "Hello World"
//         }
//     )
// });