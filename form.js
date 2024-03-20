console.log("html form");

const form = document.getElementById("form");
const username = document.getElementById("uname");
const pswd = document.getElementById("pwd");
const msg = document.getElementById("message");

const correctUserName = "root";
const correctPassword = "Js@123";

function handleFormSubmit(e) {
  e.preventDefault();

  if (username.value == correctUserName && pswd.value == correctPassword) {
    let formdata = new FormData(form); //FormData() is predefined class
    console.log(formdata);
    const details = {};
    formdata.forEach((fieldValue, keyName) => {
      details[keyName] = fieldValue;
    });
    console.log(details);
  } else {
    msg.innerText = "Incorrect username and password";
  }
}

form.addEventListener("submit", handleFormSubmit);
