var express = require("express");
var bodyParser = require("body-parser");
var app = express();
let port = process.env.PORT || 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

app.get("/", (req, res) => {
    res.status(200).json({"status": "Success", "message": "User api server for Tutorial5 in CSCI5709"});
});
app.get("/users", (req, res) => {
    res.json(
        {
            "success": true,
            "message": "user_retrieved",
            "data": "Hello World"
        }
    )
});