const express = require("express");
const routes = require("./routes");
const app = express();
const port = 3333;

const bodyParser = require('body-parser');

require("./database");

//body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Example app listening on port port!`));
