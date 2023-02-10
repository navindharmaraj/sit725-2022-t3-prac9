var express = require("express");
var router = express.Router();
var car = require("../controller/carController");
router.get('/get',car.getCarCollection) // Function to get all cars in DB
router.post('/add',car.addCollection) // Function to add cars in DB
module.exports = router;