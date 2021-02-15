const tools = require("express").Router();
const toolsList = require("../../utils/toolList");

tools.get("/", (req,res) => {
    res.redirect("/");
})

for(const tool of toolsList) {
    tools.get("/" + tool.route, (req,res) => {
        res.render(tool.template, { title: tool.name + " - Tools for Fools", tool_name: tool.name})
    })
}


module.exports = tools;