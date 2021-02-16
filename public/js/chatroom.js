let username;
while(!username) {
    username = prompt("Please enter a username", "")
}

let socket = io();

socket.emit("new user", username);

const message = document.getElementById("messages")
const form = document.getElementById("form")
const input = document.getElementById("input")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(input.value) {
        socket.emit("chat message", username + ": " + input.value)
        input.value = ""
    }
})

socket.on("chat message", function(msg) {
    const item = document.createElement("li")
    item.className = "list-group-item"
    item.textContent = msg
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})