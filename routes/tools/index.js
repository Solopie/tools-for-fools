const tools = require("express").Router();
const toolsList = require("../../utils/toolList");

tools.get("/", (req,res) => {
    res.redirect("/");
})

// Exclude certain tools with specific needed parameters from backend
const excludedTools = ["Chat Room"];

for(const tool of toolsList) {
    if(!(excludedTools.includes(tool.name))) {
        tools.get("/" + tool.route, (req,res) => {
            res.render(tool.template, { title: tool.name + " - Tools for Fools", tool_name: tool.name})
        })
    }
}

// Manually assign listener for specific tools
tools.get("/chatroom", (req,res) => {
    res.render("chatroom", { title: "Chat Room - Tools for Fools", tool_name: "Chat Room", messages: ["Test Message", "Another test message"]})
})


module.exports = tools;