const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
    res.render("index", { title: "Tools for Fools"})
});

app.listen(3000, () => {
    console.log("Web server is running at port 3000");
});