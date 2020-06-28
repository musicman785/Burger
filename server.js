const express = require("express");

//Set Handlbars
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parses all application body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js")
app.use(routes);

// Log (server-side) when our server has started
app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));