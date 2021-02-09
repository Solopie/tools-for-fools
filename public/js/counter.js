let button = document.getElementById("clickme")
let countText = document.getElementById("count")
let count = 0;

button.onclick = () => {
  count += 1;
  countText.innerHTML = count;
};
