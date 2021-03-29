const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.post("/users", UserController.store);

//Rota de Cadastro formulario
routes.get("/cad", (req, res) => {
});

module.exports = routes;
