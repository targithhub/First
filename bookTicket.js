//Booking Flight Ticket

// let ticket = "booked";
let ticket = "Not booked";
const p1 = new Promise((resovle, reject) => {
  setTimeout(() => {
    if (ticket == "booked") {
      resovle("Your ticket booked successfully");
    } else {
      reject(new Error("Your ticket not booked"));
    }
  }, 2000);
});

console.log(p1);
p1.then((res) => console.log(res)).catch((err) => console.log(err));
