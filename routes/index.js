const routes = require("express").Router();
const tools = require("./tools");
const toolList = require("../utils/toolList");

routes.use("/tools", tools);

let count = 0;

routes.get("/", (req,res) => {
    count++;
    res.render("index", { title: "Tools for Fools", count, toolList })
});


module.exports = routes;