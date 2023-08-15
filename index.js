let config = require("./config.json")
console.log(config)
let serverBrowser = require("./lib/serverbrowser")
const express = require("express")
let app = express();


serverBrowser.addServer("000.000.000.000","JohnDoe",25565,"1.0","ExampleGame",true,false)



app.get('/', async function(req,res) {
    res.json({test:"woah"});
});

app.get('/serverlist', async function(req,res) {
    res.json(serverBrowser.getServerList());
})

app.post('/registerserver', async function(req,res) {
    //req.body
    console.log(req.body);
    res.json("no");
});



app.use(express.jsonencoded({ex}))
app.use(function (req, res, next) {
    res.status(404);
    res.render("404");
});


//make app listenable
app.listen(config.port, function () {
    console.log("Express has started on port " + config.port);
});