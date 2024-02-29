//Q1
let products = [
  {
    name: "Smartphone",
    price: 599.99,
    quantity: 10,
    category: "Electronics",
    sku: "PHN123",
  },
  {
    name: "Jeans",
    price: 49.99,
    quantity: 20,
    category: "Fashion",
    sku: "JNS456",
  },
  {
    name: "Laptop",
    price: 899.99,
    quantity: 5,
    category: "Electronics",
    sku: "LPT789",
  },
  {
    name: "Sneakers",
    price: 79.99,
    quantity: 15,
    category: "Fashion",
    sku: "SN101",
  },
  {
    name: "Smartwatch",
    price: 1009.99,
    quantity: 10,
    category: "Watches",
    sku: "ISN10",
  },
  {
    name: "Regular",
    price: 999.99,
    quantity: 20,
    category: "Watches",
    sku: "ISN11",
  },
];

//To get data
let getData = products.map((data) => {
  if (data.category == "Electronics") {
    console.log(data);
  }
});

//To show data with some condition
let getData1 = products.filter((detail) => {
  if (detail.category == "Watches" && detail.name == "Smartwatch") {
    console.log(detail);
  }
});

// To find some perticular item
let getData2 = products.find((item) => {
  if (item.name == "Sneakers") {
    console.log(item);
  }
});

// Q2
let movies = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    releaseYear: 1994,
  },
  {
    title: "Inception",
    genre: "Action",
    rating: 9.0,
    releaseYear: 2010,
  },

  {
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.1,
    releaseYear: 2008,
  },
];

//To get data
let getMovie = movies.map((m) => {
  if (m.genre == "Action") {
    console.log(m);
  }
});

//To show data with some condition
let getMovie3 = movies.filter((m) => {
  if (m.genre == "Action" && m.releaseYear == "2008") {
    console.log(m);
  }
});

// To find some perticular item
let getMovie2 = movies.find((m) => {
  if (m.title == "The Shawshank Redemption") {
    console.log(m);
  }
});

//Q3
let libraryBooks = [
  {
    title: "The Blue Umbrella",
    author: "Ruskin Bond",
    ISBN: 9780,
  },

  {
    title: "1984",
    author: "Feorge Orwell",
    ISBN: "4935",
  },

  {
    title: "Cherry Tree",
    author: "Ruskin Bond",
    ISBN: 9770,
  },
  {
    title: "The great Gatsby",
    author: "F. Scott Fitzgerald",
    ISBN: "4327",
  },
];

// To get data
let getBook = libraryBooks.map((book) => {
  if (book.author == "Feorge Orwell") {
    console.log(book);
  }
});

//To show data with some condition
let getBook2 = libraryBooks.filter((book) => {
  if (book.author == "Ruskin Bond") {
    console.log(book);
  }
});

// To find some perticular item
let getBook3 = libraryBooks.find((book) => {
  if (book.title == "The great Gatsby") {
    console.log(book);
  }
});
