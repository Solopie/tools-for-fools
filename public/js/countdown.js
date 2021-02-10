
let input = document.getElementById("input")
let start = document.getElementById("start")
let reset = document.getElementById("reset")
let display = document.getElementById("display")

var initialDate, initialTime, initialInput


start.onclick = () => {
    // grab time when user pressed start
    initialDate = new Date()
    initialTime = Math.floor(initialDate.getTime()/1000)

    if (isNaN(input.value) == true){
        display.innerHTML = "Please input a valid number"
    } else {
        // need to +1 to user input as the HTML changes after the first second happens
        initialInput = Number(input.value) + 1

        timer = setInterval(displayTime,1000)
    }
};

function displayTime() {
    // grab new time
    let date = new Date()
    let time = Math.floor(date.getTime()/1000)

    // amount of seconds since the user pressed start
    let difference = (time - initialTime)

    // change the display
    display.innerHTML = "Countdown: " + (initialInput - difference)

    // if the amount of seconds becomes the user input then we have reached our timer
    if ((initialInput - difference) <= 0){
        clearInterval(timer)
    }
}

reset.onclick = () => {
    clearInterval(timer)
}