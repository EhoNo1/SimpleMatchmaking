const express = require("express")
let app = express();

let port = 3000;



app.get('/', async function(req,res) {
    res.json({test:"woah"});
});



app.use(function (req, res, next) {
    res.status(404);
    res.render("404");
});




//make app listenable
app.listen(port, function () {
    console.log("Express has started on port " + port);
});