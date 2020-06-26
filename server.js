const express = require("express");

//Set Handlbars
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parses all application body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const router = require("../controllers/burgers_controller.js")
app.use(router);

// I have no idea what else to do here?????

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });