// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Initialize Port
const port = 5000;

const routes = require('./api/route');

app.use(routes);
app.use(express.json());


// Initialize server
app.listen(port, () => {
  console.log("En écoute sur le port "+port+" .");
});


module.exports = app;