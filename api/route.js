// Add Express
const express = require("express");
// Add controller
const Controller = require('./controller');
const bodyParser = require("body-parser");

const router = express.Router();


router.get("/api/ping", (req, res) => {
    res.send("PONG");
});

router.put("/api/basket",bodyParser.urlencoded({extended: false}), Controller.AddToBasketDto);


router.get("/api/basket", Controller.BasketDto);
router.post("/api/basket/checkout", Controller.ProductsAddedToBasketDto);
router.get("/api/products", Controller.AvailableProductDto);

module.exports = router;