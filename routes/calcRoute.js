var express = require("express");
var router = express.Router();
var calculation = require("../controller/calculationController");

router.get("/addTwoNumbers", calculation.addition)//Function to add 2 numbers
router.post("/addition", calculation.n_addition)//Function to add n numbers
router.post("/subTwoNumbers", calculation.subtraction)//Function to subtract 2 numbers
router.put("/updateArray", calculation.updateArray)//Function to subtract 2 numbers
router.delete("/deleteArray", calculation.deleteArray)//Function to subtract 2 numbers

module.exports = router;