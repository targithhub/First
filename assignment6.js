//Q1
let result;
function calculateArea(radius) {
  result = (22 / 7) * radius * radius;
  return result;
}

const op = calculateArea(21);
console.log(op);

//Q2
function isEven(num) {
  if (num % 2 == 0 && num != 0) {
    return true;
  } else {
    return false;
  }
}

const op1 = isEven(43);
console.log(op1);

//Q3
let fact = 1;

function calculateFactorial(number) {
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}

const op2 = calculateFactorial(5);
console.log(op2);

//Q4
const arr = [1, 2, 3, 4, 5];
let newArray = [];
function reverseArray(array) {
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    newArray.push(arr[idx]);
  }
  return newArray;
}
const op3 = reverseArray(arr);
console.log(op3);

//Q5
const person = {
  name: "Robert",
  age: 22,
  mobile: 7645893992,
};

function getKeys(obj) {
  return Object.keys(person);
}

const op4 = getKeys(person);
console.log(op4);

// Q6
const user = [
  { name: "A", weight: "56kg", height: "5'4" },
  { name: "B", weight: "86kg", height: "5" },
  { name: "C", weight: "75kg", height: "5'6" },
];
function calculateBMI(name, w, h) {
  if (name == "A") {
    console.log("A's BMI is: ", (w * w) / (h * h));
  } else if (name == "B") {
    console.log("B's BMI is: ", (w * w) / (h * h));
  } else {
    console.log("B's BMI is: ", (w * w) / (h * h));
  }
}

calculateBMI("B", "86", "5");

// Q7
const employees = [
  {
    name: "Monica",
    age: 27,
    department: "Engineering",
  },
  { name: "Shreya", age: 37, department: "Accounts" },
  { name: "Rohan", age: 23, department: "HR" },
  { name: "Nitin", age: 43, department: "Engineering" },
  { name: "Riya", age: 31, department: "Engineering" },
];

let getData = employees.map((data) => {
  if (data.department == "Engineering") {
    console.log(data);
  }
});

//Q8
const fruits = ["apple", "litchi", "orange", "berry", "banana"];
let getFruit = fruits.find((data) => {
  if (data.includes("a")) console.log(data);
});

//Q10

let indianRecipes = [
  {
    name: "Paneer Tikka Masala",
    ingredients: ["paneer", "onion", "tomato", "capsicum", "cream", "spices"],
    category: "vegetarian",
  },
  {
    name: "Vegetable Biryani",
    ingredients: ["rice", "vegetables", "spices", "saffron", "yogurt"],
    category: "vegetarian",
  },
  {
    name: "Aloo Gobi",
    ingredients: ["potatoes", "cauliflower", "onion", "tomato", "spices"],
    category: "vegetarian",
  },
  {
    name: "Chana Masala",
    ingredients: ["chickpeas", "onion", "tomato", "spices"],
    category: "vegan",
  },
  {
    name: "Dal Tadka",
    ingredients: ["lentils", "onion", "tomato", "spices"],
    category: "vegan",
  },
  {
    name: "Chicken Curry",
    ingredients: ["chicken", "onion", "tomato", "spices"],
    category: "non-vegetarian",
  },
];

function filterRecipe(cat) {
  const getRecipe = indianRecipes.filter((item) => {
    item.category = cat;
    console.log(item);
  });
}

filterRecipe("vegan");
