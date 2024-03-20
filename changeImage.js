console.log("Image");

const flipImg = document.getElementById("image");
function changeHappy() {
  flipImg.src = "./images/smile.png";
}

function changeSad() {
  flipImg.src = "./images/sad.png";
}

flipImg.addEventListener("click", changeHappy);
flipImg.addEventListener("click", changeSad);
