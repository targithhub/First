console.log("Registration Form");

const form = document.getElementById("form");

function handleFormRegister(e) {
  e.preventDefault();
  let formdata = new FormData(form); //FormData() is predefined class
  console.log(formdata);
  const details = {};
  formdata.forEach((fieldValue, keyName) => {
    details[keyName] = fieldValue;
  });
  console.log(details);
}

form.addEventListener("submit", handleFormRegister);
