let config = require("./config.json");
console.log(config);
let serverBrowser = require("./lib/serverbrowser");
const express = require("express");
let app = express();

const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({extended:true}));

//DevelopmentTools
if (config.devInjectSimulateEntires) {require("./dev/simulated-entries").devInjectSimulatedEntries(serverBrowser)}



app.get('/', async function(req,res) {
    res.json({test:"woah"});
});

app.get('/serverlist', async function(req,res) {
    res.json(serverBrowser.getServerList());
});

app.get('/servercount', async function (req, res) {
    res.json({"count":serverBrowser.getServerCount()});
});

app.post('/registerserver', async function(req,res) {
    //req.body
    console.log(req.body);
    if (req.body && serverBrowser.addServer(req.body)) {
        res.status(201);
        res.send(201);
    } else {
        console.log("Empty request");
        res.status(400); //Bad request
        res.send(404);
    }
});


app.use(function (req, res, next) {
    res.status(404);
    res.send("404");
});


//make app listenable
app.listen(config.port, function () {
    console.log("Express has started on port " + config.port);
});