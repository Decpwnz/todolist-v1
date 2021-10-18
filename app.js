const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use('view engine', 'ejs');

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    if (currentDay === 6 || currentDay === 0) {
        day === "Weekend";
        res.sendFile(__dirname + "/weekend.html");
    } else {
        day === "Weekday";
        res.sendFile(__dirname + "/weekday.html");
    }
});

app.listen(3000, function (){
    console.log("Server started on port 3000.")
})