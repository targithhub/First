//Class Example with eccomerce
//Add to cart
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
    price: 109.99,
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

class Product {
  constructor(name, price, qty) {
    this.productName = name;
    this.price = price;
    this.quantity = qty;
    this.cartItems = [];
  }

  addToCart(sku, qty) {
    const pro = products.find((pro) => {
      pro.quantity = qty;
      pro.totalPrice = pro.price * qty;

      //this line update the quantity of item
      if (pro.sku == sku) {
        this.cartItems.push(pro);
        console.log(this.cartItems);
      }
    });
  }

  grandTotal() {
    let total = 0;
    this.cartItems.forEach((pro) => {
      console.log(pro.totalPrice);
      total += pro.totalPrice;
    });
    console.log("Grand total is: ", total);
  }

  removeProductFromCart(sku) {
    const items = this.cartItems.filter((item) => item.sku === sku);
    console.log(items);
  }
}

let p1 = new Product();
p1.addToCart("JNS456", 3);
p1.addToCart("SN101", 1);
p1.addToCart("PHN123", 2);

p1.removeProductFromCart("JNS456");

p1.grandTotal();
