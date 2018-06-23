const EXPRESS = require("express");
const BODYPARSER = require("body-parser");
const PATH = require("path");

const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());

require("./app/routes/apiRoutes.js")(APP);
require("./app/routes/htmlRoutes.js")(APP, PATH);

APP.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});