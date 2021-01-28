let button = document.getElementById("clickme")
let count = 0;

button.onclick = () => {
  count += 1;
  button.innerHTML = "Count: " + count;
};
