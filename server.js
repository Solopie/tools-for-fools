const config = require("./utils/config")
const express = require("express");
const app = express();
const routes = require("./routes");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

app.use("/", routes);

app.listen(config.PORT, () => {
    console.log(`Web server is running at port ${config.PORT}`);
});