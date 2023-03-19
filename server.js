const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

const adminRoutes = require("./routes/admin");
const frontRoutes = require("./routes/front");

const generalController = require("./controllers/general.controller");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.router);
app.use(frontRoutes);

app.use(generalController.get404);  // will be executed for each incoming request

app.listen(3000);