const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("<p>Hello</p>");
});

app.get("/admin", (req,res) => {
    res.send("<h1>Hi this is the admin page</h1>");
});

app.listen(3000, () => {
    console.log("Web server is running at port 3000");
});