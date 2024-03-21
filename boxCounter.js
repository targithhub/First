console.log("counter");

// let b1 = document.getElementById("b1");
// let b2 = document.getElementById("b2");
// let b3 = document.getElementById("b3");

let box = document.getElementById("box");
let para = document.getElementById("p1");

para.textContent = 0;

function addOne() {
  para.textContent = Number(para.textContent) + 1;
}

function addThree() {
  para.textContent = Number(para.textContent) + 3;
}

function addFive() {
  para.textContent = Number(para.textContent) + 5;
}

box.addEventListener("click", addOne);
// b1.addEventListener("click", addOne);
// b2.addEventListener("click", addThree);
// b3.addEventListener("click", addFive);
