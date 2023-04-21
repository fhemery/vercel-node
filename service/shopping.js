const {response} = require("express");
const axios = require('axios').default;

exports.AddToBasketDto = (req,res) =>{
        try {
            const idProduct =  req.body.id;
            const idQuantity =  req.body.quantity;
            axios.get('http://microservices.tp.rjqu8633.odns.fr/api/products/'+idProduct)
                .then((response) => {
                if(response.status == 200){
                    res.send('le produit existe');
                } else {
                    console.log("le produit n'existe pas ");
                }
            })
        } catch (error) {
                res.send("le produit n'existe pas ")
        }
};
exports.BasketDto = (req,res,callback) =>{
        try {
                axios.get('http://microservices.tp.rjqu8633.odns.fr/api/products/63f8be39e00cccf1085b6134')
                    .then((response) => {
                            console.log(response.data);
                            console.log(response.status);
                            console.log(response.statusText);
                            console.log(response.headers);
                            console.log(response.config);
                            res.send(response.data)
                    });
        } catch (error) {
                res.send(error)
        }
};
