const express = require("express");
const app = express();
const http = require("https");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req ,res){

    res.sendFile(__dirname + "/index.html");

});

app.post("/",function(req, res){
    console.log(req.body.cityName);
    const query = req.body.cityName;
    const apiKey = "b0a7b4b6fb499c74e7ebb1bd94218fac";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

http.get(url, function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            
            
            res.write("<h1>The temperature in " +query+ " is "+temp+" C</h1>");
            res.write("<p>The weather condition is " + desc + "<p>" );
            res.write("<img src = " + iconUrl + ">");
            res.send();
        });
    });
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});