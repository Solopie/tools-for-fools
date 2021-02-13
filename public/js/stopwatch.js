let start = document.getElementById("start")
let pause = document.getElementById("pause")
let reset = document.getElementById("reset")
let display = document.getElementById("display")

let timer, previousTime;
let displayedTime = 0

start.onclick = () => {
    if(timer) {
        clearInterval(timer);
    }
    timer = setInterval(incrementTime, 1000);
}

const incrementTime = () => {
    displayedTime += 1;
    display.innerHTML = displayedTime;
}

pause.onclick = () => {
    clearInterval(timer);
}