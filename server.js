const config = require("./utils/config")
const routes = require("./routes");

const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

// Routes
app.use("/", routes);

const server = app.listen(config.PORT, () => {
    console.log(`Web server is running at port ${config.PORT}`);
});

// Sockets
const io = require("socket.io")(server)
io.on("connection", (socket) => {
    socket.on("new user", username => {
        io.emit("chat message", username + " has joined the chat!")
    })
    socket.on("chat message", msg => {
        io.emit("chat message", msg)
    })
})



