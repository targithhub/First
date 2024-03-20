console.log("Image");

const flipImg = document.getElementById("image");
function changeHappy() {
  flipImg.src = "./smile.png";
}

function changeSad() {
  flipImg.src = "./sad.png";
}

flipImg.addEventListener("click", changeHappy);
flipImg.addEventListener("click", changeSad);
