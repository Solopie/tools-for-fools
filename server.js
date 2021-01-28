const config = require("./utils/config")
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

let count = 0;

app.get("/", (req,res) => {
    count++;
    res.render("index", { title: "Tools for Fools", count })
});

app.listen(config.PORT, () => {
    console.log(`Web server is running at port ${config.PORT}`);
});