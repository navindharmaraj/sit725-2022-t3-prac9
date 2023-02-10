var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var cors = require('cors');
var path = __dirname + '/views';
var carRouter = require('./routes/carRoutes')
var calcRouter = require('./routes/calcRoute')

//Route Config
app.use("/", router);
app.use("/car", carRouter);
app.use("/cal", calcRouter);
//Route Config Ends

app.use(express.static('assests'));
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }))
router.get("/", function (req, res) {
    res.sendFile(path + "/index.html");
});

app.listen(3003, function () {
    console.log("Live at Port 3003");
});