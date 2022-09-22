const counter = document.getElementById("num");
let btn = document.getElementsByClassName("btn");
let zero = document.getElementsByTagName("h2")[0];
document.body.style.backgroundColor = "red";

let score = 0;
btn[0].addEventListener("click", () => {
  score--;
  zero.textContent = score;
  if (score < 0) {
    document.body.style.backgroundColor = "red";
  } else if (score == 0) {
    document.body.style.backgroundColor = "yellow";
  }
});
btn[1].addEventListener("click", () => {
  zero.textContent = 0;
});
btn[2].addEventListener("click", () => {
  score++;
  zero.textContent = score;
  if (score > 0) {
  }
});
