const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.use(express.static(__dirname + '/public/css'));

routes.post("/users", UserController.store);

routes.get('/', (req, res) => {
  res.sendFile(__dirname +  "/views/form.html");

});


module.exports = routes;
