const shopping = require('../service/shopping');

// appelé avec la /api/basket en méthode PUT
exports.AddToBasketDto = (req, res) => {
    shopping.AddToBasketDto(req,res)
};

// appelé avec la /api/basket en méthode GET
exports.BasketDto  = (req, res) => {
    shopping.BasketDto(req,res);
};

// appelé avec la /api/basket/CHECKOUT en méthode POST
exports.ProductsAddedToBasketDto  = (req, res) => {
    shopping.ProductsAddedToBasketDto(req,res)
};
// appelé avec la /api/products en méthode GET
exports.AvailableProductDto   = (req, res) => {
    shopping.AvailableProductDto(req,res)
};