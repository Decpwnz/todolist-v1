const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    // if (currentDay === 6 || currentDay === 0) {
    //     day = "Weekend";
    // } else {
    //     day = "Weekday";
    // }

    switch (currentDay) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 0:
            day = "Sunday";
            break;
    
        default:
            console.log("Error, there's no more than 7 days in a week lol. Current day is esqual to" + currentDay)
            break;
    }
   
    res.render("list", {kindOfDay: day});
});


app.listen(3000, function (){
    console.log("Server started on port 3000.")
})

