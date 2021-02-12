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

app.get("/counter", (req,res) => {
    res.render("counter", { title: "Tools for Fools", tool_name: "Counter" })
})

app.get("/countdown", (req,res) => {
    res.render("countdown", { title: "Tools for Fools", tool_name: "Countdown" })
})

app.get("/poll", (req,res) => {
    res.render("development", { title: "Tools for Fools", tool_name: "Anonymous Poll" })
})

app.get("/stopwatch", (req,res) => {
    res.render("development", { title: "Tools for Fools", tool_name: "Stopwatch" })
})

app.get("/scoreboard", (req,res) => {
    res.render("development", { title: "Tools for Fools", tool_name: "Scoreboard" })
})

app.get("/sketch", (req,res) => {
    res.render("development", { title: "Tools for Fools", tool_name: "Sketch Sharing" })
})

app.listen(config.PORT, () => {
    console.log(`Web server is running at port ${config.PORT}`);
});