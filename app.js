const express = require("express");
const app = express();
const http = require("https");
const bodyParser = require("body-parser");




const url = "https://api.openweathermap.org/data/2.5/weather?q=Guwahati&appid=b0a7b4b6fb499c74e7ebb1bd94218fac&units=metric";

app.use(bodyParser.urlencoded)

app.get("/",function(req ,res){

    res.sendFile(__dirname + "/index.html")

    // http.get(url, function(response){
    //     console.log(response.statusCode);

    //     response.on("data",function(data){
    //         const weatherData = JSON.parse(data)
    //         const temp = weatherData.main.temp
    //         const desc = weatherData.weather[0].description
    //         const icon = weatherData.weather[0].icon
    //         const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            
            
    //         res.write("<h1>The temperature in London is "+temp+" C</h1>");
    //         res.write("<p>The weather condition is " + desc + "<p>" );
    //         res.write("<img src = " + iconUrl + ">");
    //         res.send();
    //     })
    // });
});

app.post("/",function(req, res){
    console.log("Post received")
})


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});