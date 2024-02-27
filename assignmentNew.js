// Q1
const nums = [4, 5, 6, 8, 9];
function checkNum(arr) {
  arr.forEach((items) => {
    console.log(items * 2);
  });
}

checkNum(nums);

//Q2
const strArr = ["hello", "friends", "javascript", "html"];
function toCapital() {
  strArr.forEach((items) => {
    console.log(items[0].toUpperCase());
  });
}

toCapital();

// Q3
const arr = [1, 0, 5, 2, 1, 0, 2, 1, 4, 3, 5, 3, 4, 4];
const newArray = [];
let result2;
function removeDuplicate(array1) {
  array1.forEach((idx) => {
    if (!newArray.includes(idx)) {
      newArray.push(idx);
    }
  });
  return newArray;
}

const op1 = removeDuplicate(arr);
console.log("Unique Array", op1);

//Q4
const arr1 = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
let avg;

function average(array) {
  for (let idx = 0; idx < array.length; idx++) {
    sum = sum + array[idx];
    avg = sum / array.length;
  }
  return avg;
}

const op = average(arr1);
console.log(op);

// Q5
const person = {
  name: "John",
  age: 25,
  city: "Indore",
};

//5.1
function printPerson(obj) {
  console.log(obj);
}

printPerson(person);

// //5.2

function changeCity(city) {
  person.city = city;
  console.log(person.city);
}

changeCity("Bhopal");

//6

const arr2 = [
  {
    name: "Mia",
    age: 21,
  },
  {
    name: "Robert",
    age: 16,
  },
  {
    name: "Monica",
    age: 26,
  },
  {
    name: "Rita",
    age: 36,
  },
  {
    name: "Rohan",
    age: 17,
  },
];
let result;
function filterAdults(array) {
  array.forEach((items) => {
    if (items.age > 18) {
      // result = console.log(items.name);
      result = console.log(items.name);
    }
  });
  return result;
}

const output = filterAdults(arr2);
console.log(output);
