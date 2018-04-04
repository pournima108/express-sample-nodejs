
var express = require('express');
var Request = require("request");
var bodyParser = require('body-parser');
var Routing = require('./Routing/Post-result.js');
var getData = require('./Routing/Get-api.js');
//var zChat = require('./web_sdk');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Chat.init({
//     account_key: 'EK7YOWLBbzWm8JOEzn81U8AQcAIHbwLU'
// });

app.get('/', function (req, res) {
    res.send(__dirname + "/index.html" );
 })//HTML Routing

 app.get('/getApi', function (req, res) {
    var response = getData.makeRequest(req);
    res.send(response);
 })//Call API

app.post('/app',function(req,res){
    var result = Routing.Concatenation(req);
    //console.log("The value is" + result);
    res.send(result);
})//POST Method Sample

app.listen(port);
console.log("Server Running Successfully at port " + port);
