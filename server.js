const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

// app.get("/", (req,res) => {
//     res.sendFile("./public/index.html")
// });

// app.get("/admin", (req,res) => {
//     res.send("<h1>Hi this is the admin page</h1>");
// });

app.listen(3000, () => {
    console.log("Web server is running at port 3000");
});